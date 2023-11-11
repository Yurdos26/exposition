import React from "react";
import createRoot from "react-dom";

import "./logoreact/logoreact.css";
import "./digitalclock/clock.css";

import { App } from "./App.jsx";

createRoot.render(<App />, document.getElementById("root"));

export default App;
