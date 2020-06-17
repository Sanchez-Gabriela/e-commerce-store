import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <Header />

    <main>
      <div className="first-block">
        <h1 className="title">
          Get <br />
          your <br />
          keyboard!
        </h1>

        <div className="grid">
          <img src="/lotOf.png" alt="keyboard" />
        </div>
      </div>
      <div className="socialMedia">
        <img className="icon" src="/instagram.png" alt="instagram" />
        <img className="icon" src="/facebook.png" alt="instagram" />
        <img className="icon" src="/twitter.png" alt="instagram" />
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 50px;
      }

      .title {
        margin-top: 100px;
        color: #fff;
        font-family: 'Monoton', cursive;
        font-size: 50px;
        line-height: 2;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #db7093;
        width: 90%;
        height: 50%;
      }

      .first-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      img {
        transform: rotate(5deg);
      }

      .buttons {
        display: flex;
        justify-content: left;
        margin-top: -80px;
        margin-left: 212px;
      }

      .button {
        background-color: #e857c3;
        border: 5px solid white;
        color: white;
        padding: 16px 32px;
        text-align: center;
        font-size: 16px;
        margin: 10px;
        opacity: 0.6;
        transition: 0.3s;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Comfortaa', cursive;
      }

      .button:hover {
        opacity: 1;
      }

      .icon {
        width: 3%;
        transform: rotate(0deg);
        padding: 5px;
        margin-left: 50px;
      }

      .socialMedia {
        margin-left: 160px;
        margin-bottom: -10px;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
