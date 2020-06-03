import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
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
    <div className="navbar">
      <div className="logo-div">
        <a href="#" className="logo">
          Bendfinger
        </a>
      </div>

      <div className="navbar-links">
        {linkList.map((link) => {
          return (
            <Link key={link.url} href={link.url}>
              <a style={{ margin: '0 10px' }}>{link.name}</a>
            </Link>
          );
        })}
      </div>
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

        .navbar-links a {
          float: left;
          text-decoration: none;
          color: black;
          padding-left: 30px;
          padding-right: 30px;
          font-family: 'Monoton', cursive;
        }
      `}</style>
    </div>
  );
}
