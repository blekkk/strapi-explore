import './HomePage.css';
import React, { memo, useState } from 'react';
import Editor from '../../Components/Editor/Editor';

const HomePage = () => {
  const [code, setCode] = useState(
`<! -- Enter source code here -->
<h1>
  Hello, world!
</h1>
`)

  const handleChange = (ev) => {
    setCode(ev.target.value);
  }

  return (
    <div className='homepage-wrapper'>
      <iframe srcDoc={code} style={{ width: '60%', height: 'calc(100vh - 6rem)', overflowY: 'scroll' }}></iframe>
      <div style={{ width: '40%' }}>
        <div className='side-editor'>
          <div className='side-editor-content'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
              <h1>Source Code:</h1>
              <button>Save</button>
            </div>
            <Editor 
              value={code}
              onChangeHandler={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
