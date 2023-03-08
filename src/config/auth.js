export const msalConfig = {
    auth: {
      clientId: "6bb7303e-2203-4ca9-8eb5-6aaf91ea2867",
      authority: "https://login.microsoftonline.com/91ad1255-4f61-4adf-8ec8-6c4c67958bbb", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:1000",
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphContactEndpoint: "https://graph.microsoft.com/v1.0/me/contacts"
  };