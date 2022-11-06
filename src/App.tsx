import React from "react";

import * as curlconverter from "curlconverter";
import { CURL_GET_EXAMPLE } from "./constants";

function App() {
  const [curlCommand, setCurlCommand] = React.useState(CURL_GET_EXAMPLE);
  const [converted, setConverted] = React.useState("");

  const convert = () => {
    // const result = curlconverter.toJavaScript(curlCommand);
    const result = curlconverter.toDart(curlCommand);
    setConverted(result);
  };

  return (
    <div>
      <h4>POC React app using cURL converter</h4>

      <code>cURL command</code>
      <textarea
        rows={10}
        style={{ width: "100%" }}
        value={curlCommand}
        onChange={(e) => setCurlCommand(e.target.value)}
      />
      <button onClick={convert}>Convert</button>

      <br />
      <br />

      <code>Javascript fetch</code>
      <textarea rows={20} style={{ width: "100%" }} value={converted} readOnly={true} />
    </div>
  );
}

export default App;
