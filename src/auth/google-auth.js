import { google } from 'googleapis';

const authConfig = require('./google-auth-config.json');

const auth = new google.auth.GoogleAuth({
      client_id: authConfig.client_id,
      client_secret: authConfig.client_secret,
      redirect_uri: authConfig.redirect_uri
});

const authenticate = async () => {
      const url = auth.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email']
      });

      return url;
};

const getToken = async (code) => {
      const token = await auth.getToken(code);
      return token;
};

const getUserInfo = async (token) => {
      const userInfo = await google.people('v1').people.get({
      resourceName: 'people/me',
      personFields: 'names,emailAddresses'
      }, {
      auth: token
      });

      return userInfo.data;
};

export { authenticate, getToken, getUserInfo };