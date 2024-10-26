import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

export function render(url) {
  console.log('Rendering on server for URL:', url); // For debugging
  return ReactDOMServer.renderToString(<App />);
}
