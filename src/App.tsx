import React from "react";

const EXAMPLE: string = `curl 'http://en.wikipedia.org/' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8'
-H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0
Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H
'Referer: http://www.wikipedia.org/' -H 'Connection: keep-alive' --compressed{" "}
`;

function App() {
  const [curlCommand, setCurlCommand] = React.useState(EXAMPLE);
  const [converted, setConverted] = React.useState("");

  const convert = () => {
    setConverted("button clicked: " + curlCommand);
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
