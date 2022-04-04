/*
 *
 * HomePage
 *
 */
import './HomePage.css';
import React, { memo, useState } from 'react';
import InnerHTML from 'dangerously-set-html-content'

const HomePage = () => {
  const [code, setCode] = useState(`// Enter source code here
  <h1>
    Hello, world!
  </h1>
  `)

  return (
    <div className='homepage-wrapper'>
      <InnerHTML html={code} style={{width: '60%', height: 'calc(100vh - 6rem)', overflowY: 'scroll'}}/>
      <div style={{width: '40%'}}>
        <div className='side-editor'>
          <div className='side-editor-content'>
            <h1>Source Code:</h1>
            <textarea
              value={code}
              placeholder='Enter Source code here'
              onChange={(ev) => {setCode(ev.target.value)}}
            >           
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
