import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function SumChallenge() {
  const challenge = {
    title: "Sum of Two Numbers",
    description:
      "Write a function that takes two numbers as arguments and returns their sum.",
    tests: [
      { input: [1, 2], output: 3 },
      { input: [10, -5], output: 5 },
      { input: [0, 0], output: 0 },
    ],
  };
  const [code, setCode] = useState(
    "function sum(a, b) {\n    // write code here\n}"
  );
  const [result, setResult] = useState("");
  const { title, description, tests } = challenge;

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    let result = "";
    try {
      const sum = eval(`(${code})`);
      tests.forEach((test) => {
        const { input, output } = test;
        const resultForTest = sum(...input);
        if (resultForTest === output) {
          result += `Test passed for input "${input}".\n`;
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
    <div className="challenge">
      <h2>{title}</h2>
      <div className="description">{description}</div>
      <div className="code-editor">
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
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <button onClick={runCode}>Run Code</button>
      {result && <div className="result">{result}</div>}
    </div>
  );
}
