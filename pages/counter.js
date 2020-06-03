import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Products from './products';
import { getProducts } from '../db.js';

const productList = getProducts();
const product = productList[0];
const numberPrice = parseFloat(product.price);

function Counter() {
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap"
      rel="stylesheet"
    ></link>
  </div>;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const saveValue = Number(localStorage.getItem('count'));
    if (saveValue) {
      setCount(saveValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <>
      <div className="numberOfItems">
        <div className="square">
          <button
            className="btns"
            onClick={() => setCount(count + numberPrice)}
          >
            +
          </button>
          <p>{count}</p>
          <button
            className="btns"
            onClick={() => setCount(count - numberPrice)}
          >
            -
          </button>
        </div>
        <button className="btnReset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <style jsx>{`
        .numberOfItems {
          float: right;
          border: 2px solid #fff;
          border-radius: 4px;
          width: 200px;
          margin-right: 20px;
        }

        p {
          font-family: 'Comfortaa', cursive;
          color: black;
          font-weight: bold;
          float: right;
          margin-top: 10px;
        }

        .btns {
          background: white;
          font-family: 'Comfortaa', cursive;
          float: right;
          margin: 10px;
        }

        .btnReset {
          margin-top: -10px;
          float: right;
          margin-right: 25px;
          margin-left: 70px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default Counter;
