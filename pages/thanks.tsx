import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Thanks() {
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

  return (
    <>
      <div>
        <img src="/tick.png" alt="checked" />
        <h1>Thank you for your purchase!</h1>
        <Link href={'/products'}>
          <a className="linkContinue">Continue shopping &#187;</a>
        </Link>
      </div>

      <style jsx>{`
        div {
          width: 70%;
          margin: 200px;
        }
        img {
          width: 10%;
        }

        h1 {
          width: 60%;
          float: center;
          color: black;
          font-family: Sans;
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
