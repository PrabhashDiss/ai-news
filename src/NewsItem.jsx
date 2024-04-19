// NewsItem.js

import React, { useState, useEffect } from 'react';

function NewsItem({ url }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Fetch news title based on URL
    fetchNewsTitle();
  }, [url]);

  const fetchNewsTitle = async () => {
    try {
      console.log('Fetching news title for URL:', url); // Log the URL being fetched
      const response = await fetch(url);
      const html = await response.text();
      console.log('HTML content:', html); // Log HTML content for debugging
      const title = extractTitleFromHTML(html);
      console.log('Extracted title:', title); // Log extracted title for debugging
      setTitle(title);
    } catch (error) {
      console.error('Error fetching news title:', error);
    }
  };

  const extractTitleFromHTML = (html) => {
    // Regular expression to match the first heading or paragraph
    const titleRegex = /<(h1|h2|h3)[^>]*>(.*?)<\/\1>/i;
    const match = html.match(titleRegex);
    if (match && match[2]) {
      // Return the text content inside the matched element
      return match[2].trim();
    } else {
      // If no matching element found, return a default title
      return 'Untitled';
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    </div>
  );
}

export default NewsItem;
