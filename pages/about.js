import Head from 'next/head';
import Header from '../components/Header';

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

      <Header></Header>

      <main>
        <h1 className="title">About us</h1>
        <div className="content">
          <div className="story">
            <h3>Story</h3>
            <p>Bendfinger was founded in 2017!</p>
          </div>

          <div className="main-pic">
            <h3>working space</h3>
          </div>
        </div>
      </main>

      <footer>
        <logo>
          <img src="./Paypal.png" alt="payments" />
        </logo>
      </footer>

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
          border: 5px solid #db7093;
          width: 90%;
          height: 50%;
          font-family: 'Comfortaa', cursive;
        }

        .content {
          display: flex;
          justify-content: space-around;
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

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
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

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
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
