import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
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
        <h1 className="title">About us</h1>
        <div className="content">
          <div className="story">
            <p>
              Getting our customers the best products for the best price is one
              of our key strengths, and service is no less important. We want
              you to get the most for your money while shopping with us, and
              therefore we have devised our own credo: Added Value. For
              instance, we've been offering a general 30-Day Money-Back
              Guarantee since 2014 – long before the EU came up with the
              directive on mail order purchases. On top of that, in 2015 we
              decided to offer an extended warranty period of three years – out
              of our own pocket! Happy customers make us happy in turn, and we
              appreciate the family atmosphere that prevails in our shop.
            </p>
          </div>

          <div className="main-pic">
            <img src="/store.jpg" alt="store" />
          </div>
        </div>
      </main>

      <Footer />

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
          justify-content: center;
          align-items: center;
          width: 90%;
          height: 50%;
          font-family: 'Comfortaa', cursive;
        }

        .content {
          display: flex;
          flex: 1;
          height: 100%;
        }

        .story {
          font-size: 18px;
          align: left;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        img {
          width: 500px;
          margin-top: 50px;
          border-radius: 4px;
          margin-left: -500px;
        }

        p {
          width: 40%;
          margin-top: 50px;
          line-height: 1.5;
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
