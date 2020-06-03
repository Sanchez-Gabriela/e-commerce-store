import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { getProducts } from '../db.js';
import products from './products.js';

const productList = getProducts();

function formatPrice(price) {
  return `$${(price * 0.001).toFixed(3)}`;
}

// 1° Argument: array and 2° argument: default value
function productCounter(productList) {
  return productList.reduce((acc, product) => acc + product.quantity, 0);
}

function Summary(productList) {
  return product.List((acc, price) => acc + product.price, 0);
}

function Cart() {
  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
      </div>
      <div className="container">
        <Head>
          <title>cart</title>
        </Head>

        <Header />

        <main>
          <h1>Your shopping cart</h1>
          <span> {productCounter} items in the cart</span>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {productList.map((product, id) => (
                <tr key={id}>
                  <td> {product.name}</td>
                  <td>
                    <img src={product.url} alt={product.name} />
                  </td>
                  <td>{product.quantity}</td>
                  <td>{formatPrice(product.price)}</td>
                </tr>
              ))}
              <tr>
                <td className="totalTag" colspan={3}>
                  Total:
                </td>
                <td>{formatPrice(Summary(productList))}</td>
              </tr>
            </tbody>
          </table>
        </main>
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
          width: 60%;
        }

        h1 {
          font-family: 'Comfortaa', cursive;
          color: black;
        }
        shop {
          width: 70%;
        }

        a {
          text-decoration: none;
        }

        h3 {
          font-family: 'Monoton', cursive;
        }

        p {
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
        }

        .description {
          background: #f7cac9;
          border-radius: 5px;
          width: 80%;
          padding: 20px;
          margin-bottom: 70px;
          margin: auto;
        }

        button {
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 10px;
          margin-right: 20px;
          margin-top: 20px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
        }

        img {
          width: 20%;
        }

        .totalTag {
          text-align: right;
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
export default Cart;
