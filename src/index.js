import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./style/material-themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
  clientId: "d0b5aa5a208c477d83d39ee5eadb7ccd",
  clientSecret: "a669371f690249db807a6e445b22c9ec",
  redirectUri: "http://localhost:3000/",
});
const store = configureStore(spotifyApi);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themeOptions}>
          <App spotifyApi={spotifyApi} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
