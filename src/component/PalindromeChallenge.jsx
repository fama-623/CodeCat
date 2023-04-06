import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function Challenge() {
  const challenge = {
    title: "Palindrome Checker",
    description:
      "Write a function that takes a string and returns true if the string is a palindrome and false otherwise.",
    tests: [
      { input: "racecar", output: true },
      { input: "hello", output: false },
      { input: "A man a plan a canal Panama", output: true },
    ],
  };
  const [code, setCode] = useState(
    "function palindrome(str) {\n    // write code here\n}"
  );
  const [result, setResult] = useState("");
  const { title, description, tests } = challenge;

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
