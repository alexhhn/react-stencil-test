import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// test-component is the name of our made up Web Component that we have
// published to npm:
import {
  applyPolyfills,
  defineCustomElements,
} from "@alexwebstep/test-stencil/loader";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
