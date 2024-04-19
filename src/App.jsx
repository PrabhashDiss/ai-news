// App.js

import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';

function App() {
  const [newsUrls, setNewsUrls] = useState([]);

  console.log("Rendering App component...");

  const fetchNewsUrls = async () => {
    try {
      console.log("Fetching news URLs from urls.txt...");
      const response = await fetch('/src/urls.txt'); // Adjust the path to point to the urls.txt file in the src folder
      console.log("Response:", response);
      
      console.log("Reading text from response...");
      const data = await response.text();
      console.log("Data:", data);
      
      console.log("Splitting data into URLs...");
      const urls = data.split('\n').filter(url => url.trim() !== '');
      console.log("Filtered URLs:", urls);
      
      console.log("Setting news URLs state...");
      setNewsUrls(urls);
    } catch (error) {
      console.error('Error fetching news URLs:', error);
    }
  };  

  useEffect(() => {
    console.log("Calling fetchNewsUrls function...");
    fetchNewsUrls();
  }, []);

  console.log("Rendering App component...");
  
  return (
    <div>
      <h1>AI News Page</h1>
      <NewsList newsUrls={newsUrls} />
    </div>
  );
}

export default App;
