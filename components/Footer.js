import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Footer() {
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

  const linkList = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Products', url: '/products' },
    { name: 'Cart', url: '/cart' },
  ];

  return (
    <div className="footer">
      <div className="bottomLogo">
        <img src="/pinky.png" alt="keyboard-logo" />
      </div>
      {/* <div className="network">
        <img src="/social_media.png" alt="network" />
      </div> */}

      <style jsx>{`
        .navbar {
          width: 100%;
          height: 70px;
          padding: 30px 30px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .logo-div a {
          width: 60px;
          float: left;
          text-decoration: none;
          color: black;
          font-weight: bold;
          font-size: 25px;
          margin-left: 40px;
          font-family: 'Comfortaa', cursive;
        }

        .footer {
          font-family: 'Monoton', cursive;
          bottom: 0;
          width: 100%;
          padding: 6px;
          text-align: center;
          background: #fef6f5;
        }

        img {
          width: 50px;
          height: 40px;
        }

        .payIcon {
          width: 100px;
          height: 40px;
        }

        .network {
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
    </div>
  );
}
