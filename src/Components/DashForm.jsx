import React, { useState, useEffect,useRef } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashForm() {
  const [imageURL, setImageURL] = useState('');
  const [shortLink, setShortLink] = useState('http://your-proxy-server:3001/proxy?url=shortLink');
  const [loading, setLoading] = useState(false);
  const [adWatched, setAdWatched] = useState(false);

 
  const inputRef = useRef(null);

  const handleCopy = () => {
    // Check if the browser supports the Clipboard API
    if (navigator.clipboard) {
      // Use the Clipboard API to copy the input value
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          toast.success('Text copied to clipboard');
        })
        .catch((err) => {
          toast.error('Error copying text to clipboard');
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      inputRef.current.select();
      document.execCommand('copy');
      toast.success('Text copied to clipboard');
    }
  };
    

  const handleAdWatched = () => {
    // Simulate ad-watching completion
    setAdWatched(false);
  };

  useEffect(() => {
    // Set a timeout to automatically enable "Watch Ad" after 30 seconds
    const timeoutId = setTimeout(() => {
      setAdWatched(false);
    }, 10000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleImageUpload = async (e) => {
  /*   setLoading(false); */
  

    const file = e.target.files[0];
    console.log(file);

   /*  if (!adWatched) {
      alert('Please watch the ad first.');
      setLoading(true);
      return;
    } */

    try {
      // Azure Storage account and container details
      const storageAccount = 'institute1';
      const containerName = 'videos';
      const blobName = `${Date.now()}-${file.name}`;

      // Azure Storage SAS token (for security, generate this server-side)
      const sasToken = ''//azure sas token;

      // Azure Storage blob URL with SAS token
      const blobServiceClient = new BlobServiceClient(`https://${storageAccount}.blob.core.windows.net?${sasToken}`);
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const response = await blockBlobClient.upload(file, file.size);

      if (!response._response.status) {
        throw new Error(`Failed to upload image. Status: ${response._response.status}`);
      }

      setImageURL(blockBlobClient.url);
      

      // Use Bitly API to shorten the URL
      const accessToken = '';//bitly token
      const bitlyAPI = 'https://api-ssl.bitly.com/v4/shorten';

      const bitlyResponse = await fetch(bitlyAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          long_url: blockBlobClient.url,
        }),
      });

      const bitlyResult = await bitlyResponse.json();
      const shortenedURL = bitlyResult.id;
      setShortLink(shortenedURL);

      await toast.promise(
        Promise.resolve(),
        {
          pending: 'Uploading and generating short link...',
          success: 'Image uploaded successfully and short link generated!',
          error: 'Error uploading image',
        },
      );
     
    } catch (error) {
      console.error('Error uploading image:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-auto w-auto border-0 md:border-r-4 p-4 font-extrabold text-center md:text-2xl">
          Upload Your Image To Generate Link
          <div className="card shrink-0 w-full max-w-sm shadow-xl mx-auto opacity-70 mt-2">
            <form className="card-body">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG, or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
              <button
                type="button"
                className="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Generate Link
              </button>
            </form>
          </div>
        </div>
        <div className="text-2xl font-bold text-center">
          Your Uploaded Image & generated Link
          <div className="w-32 h-32 shadow-xl py-4 mx-auto object-fill rounded-lg">
            <figure>
              <img
                src={imageURL} // Use the actual imageURL state
                alt="Uploaded"
              />
            </figure>
            <div className="py-2 flex justify-center">
              <input value=/* {`http://localhost:3000/${shortLink}`} */{shortLink}
                type=""
                id="default-search"
                className="block px-10 py-2 rounded-full p-4 ps-10 text-sm text-gray-900 border b read-only:"ref={inputRef}
              />
            </div>
            <button onClick={handleCopy}><FaRegCopy /></button>
          </div>
          {/* <p>Shortened Link: {shortLink}</p> */}
        </div>
      </div>
    </div>
  );
}

export default DashForm;
