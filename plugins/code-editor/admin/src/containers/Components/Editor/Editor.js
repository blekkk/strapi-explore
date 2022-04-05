import React, { useRef, useEffect } from 'react';
import './Editor.css';

const Editor = (props) => {
  const lineCounterRef = useRef(null);
  const codeEditorRef = useRef(null);
  let lineCountCache;

  useEffect(() => {
    handleLineCount()
  }, []);

  const handleScroll = () => {
    const lineCounter = lineCounterRef.current;
    const codeEditor = codeEditorRef.current;

    lineCounter.scrollTop = codeEditor.scrollTop;
    lineCounter.scrollLeft = codeEditor.scrollLeft;
  }

  const handleLineCount = () => {
    const lineCounter = lineCounterRef.current;
    const codeEditor = codeEditorRef.current;

    let lineCount = codeEditor.value.split('\n').length;
    let outarr = [];
    if (lineCountCache != lineCount) {
      for (let x = 0; x < lineCount; x++) {
        outarr[x] = (x + 1) + '.';
      }
      lineCounter.value = outarr.join('\n');
    }
    lineCountCache = lineCount;
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <textarea
        id='line-counter'
        wrap='off'
        readonly='true'
        ref={lineCounterRef}
      >
      </textarea>
      <textarea
        id='code-editor'
        value={props.value}
        placeholder='Enter Source code here'
        ref={codeEditorRef}
        wrap='off'
        onChange={props.onChangeHandler}
        onScroll={handleScroll}
        onInput={handleLineCount}
      >
      </textarea>
    </div>
  );
}

export default Editor;