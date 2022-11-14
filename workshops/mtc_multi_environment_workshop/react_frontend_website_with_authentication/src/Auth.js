import authentication from '@kdpw/msal-b2c-react'
import decodeJWT from 'jwt-decode'; 

class Auth {
  isLoggedIn() {
    if (authentication.getAccessToken()) {
      return true;
    }
    return false;
  }

  logout() {
    authentication.signOut();
  }

  getToken() {
    return authentication.getAccessToken();
  }

  currentUser() {
    const decoded = decodeJWT(authentication.getAccessToken());
    return {
      emails: decoded.emails,
    };
  }
}

export default new Auth();