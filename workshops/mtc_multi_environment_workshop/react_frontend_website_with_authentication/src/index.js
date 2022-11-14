import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import authentication from '@kdpw/msal-b2c-react';
import 'bootstrap/dist/css/bootstrap.min.css'


authentication.initialize({
  instance: 'https://<tenantName>.b2clogin.com/tfp/', 
  tenant: '<tenantName>.onmicrosoft.com',
  signInPolicy: '<SigninPolicy>',
  applicationId: '<appId>',
  cacheLocation: 'sessionStorage',
  scopes: ['profile', 'openid'],
  redirectUri: 'http://localhost:3000', // change to storage account url when uploaded
  validateAuthority: false
});


authentication.run(() => {
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  )
})

reportWebVitals();
