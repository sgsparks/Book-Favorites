export const oktaConfig = {
  clientID: '0oaeaeka870GGyPeL5d7',
  issuer: 'https://dev-45946239.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true
}