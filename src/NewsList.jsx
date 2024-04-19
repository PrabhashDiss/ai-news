// NewsList.js

import React from 'react';
import NewsItem from './NewsItem';

function NewsList({ newsUrls }) {
  return (
    <div>
      {newsUrls.map((url, index) => (
        <NewsItem key={index} url={url} />
      ))}
    </div>
  );
}

export default NewsList;
