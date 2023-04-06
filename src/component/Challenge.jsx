import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function Challenge({challenge}) {
  const { title, description, tests, startingCode } = challenge;
  const [code, setCode] = useState(
    startingCode
  );
  const [result, setResult] = useState("");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    let result = "";
    try {
      const palindrome = eval(`(${code})`);
      tests.forEach((test) => {
        const { input, output } = test;
        const resultForTest = palindrome(input);
        if (resultForTest === output) {
          result += `Test passed for input "${input}"\n`;
        } else {
          result += `Test failed for input "${input}". Expected output: "${output}". Actual output: "${resultForTest}"\n`;
        }
      });
    } catch (error) {
      result = error.toString();
    }
    setResult(result);
  };

  return (
  <div>
    <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="font-bold">{title}</h2>
        <div className="description">{description}</div>
      </div>
      <div className="w-2/3 p-4">
        <AceEditor
          mode="javascript"
          theme=""
          value={code}
          onChange={handleCodeChange}
          name="code-editor"
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={runCode}>Run Code</button>
      </div>
      </div>
      <div className="mt-4 pb-4">
          {result && (
            <div className="text-sm">
              <pre>{result}</pre>
            </div>
          )}
        </div>
    </div>
  );
  
}
