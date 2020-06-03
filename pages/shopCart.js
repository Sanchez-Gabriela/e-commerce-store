import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getProducts } from '../db.js';

function ShopCart() {
  function totalPrice([...totalPrice]) {
    return productList.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0.0,
    );
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <span>items in cart : 0</span>
        <span>total price : {totalPrice}</span>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
        }

        h1 {
          font-family: 'Comfortaa', cursive;
        }
        .catalog {
          width: 70%;
        }

        h3 {
          font-family: 'Monoton', cursive;
        }

        span {
          margin-left: 20px;
        }

        .description {
          background: #f7cac9;
          border-radius: 5px;
          width: 50%;
          padding: 20px;
          margin-bottom: 70px;
          margin: auto;
        }

        button {
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 10px;
          margin-right: 5px;
          margin-top: -50px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
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

export default ShopCart;
