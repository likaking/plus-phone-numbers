import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import ProcessAllNums from './processNumbers';


const FooterNFT = React.lazy(()=> import('./footer'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar />
 <body style = {{minHeight:'50em'}}>
 <ProcessAllNums />
 </body>

  <Suspense fallback = {<div>Loading Footer</div>}>
  <FooterNFT />
  </Suspense>

  </React.StrictMode>
);


reportWebVitals();
