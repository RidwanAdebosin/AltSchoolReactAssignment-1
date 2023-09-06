import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import chevronUpURL from './assets/chevron-up.svg';
import chevronsUpURL from './assets/chevrons-up.svg';
import rotateURL from './assets/rotate-ccw.svg';
import hashURL from './assets/hash.svg';
import chevronDownURL from './assets/chevron-down.svg';
import chevronsDownURL from './assets/chevrons-down.svg';

function RandomNumbers() {
  return Math.floor(Math.random() * 100) + 1;
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Your latest count is ${count}`;
  });

  return (
    <>
      <div className="container">
        <h4> Current value: </h4>

        <div className="count">{count}</div>

        <div className="operation-keys">
          <div>
            <p onClick={() => setCount(count + 1)}>
              <img className="button" alt="" src={chevronUpURL} />
            </p>
          </div>

          <div>
            <p onClick={() => setCount(count + 10)}>
              <img className="button" alt="" src={chevronsUpURL} />
            </p>
          </div>

          <div>
            <p onClick={() => setCount(0)}>
              <img className="button" alt="" src={rotateURL} />
            </p>
          </div>

          <div>
            <p onClick={() => setCount(RandomNumbers())}>
              <img className="button" alt="" src={hashURL} />
            </p>
          </div>

          <div>
            <p onClick={() => setCount(count - 1)}>
              <img className="button" alt="" src={chevronDownURL} />
            </p>
          </div>

          <div>
            <p onClick={() => setCount(count - 10)}>
              <img className="button" alt="" src={chevronsDownURL} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
