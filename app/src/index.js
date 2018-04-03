/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


/*
 * Local import
 */
import App from 'src/components/App';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Router>
      <App />
    </Router>
  );
  render(rootComponent, document.getElementById('root'));
});
