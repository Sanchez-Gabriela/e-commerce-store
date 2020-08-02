import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Howl, Howler } from 'howler';

function formatPrice(price) {
  return `$${(price * 0.001).toFixed(3)}`;
}

const Products = (props) => {
  function playPause(audio) {
    const sound = new Howl({
      src: [audio],
    });

    //Play the sound.
    sound.play();

    //Change global volume.
    Howler.volume(0.5);
  }

  return (
    <div className="container">
      <Head>
        <title>Catalog</title>
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
        <h1>Catalog</h1>
        <div className="catalog">
          <ul>
            {props.products.map((product) => {
              return (
                <li key={product.id}>
                  <button
                    className="sampleButton"
                    onClick={() => playPause(product.audio)}
                  >
                    play me
                  </button>
                  <img src={product.url} alt="product" />
                  <div className="description">
                    <h3>{product.name}</h3>
                    <Link href={'/products/' + product.id}>
                      <a>
                        <button>Go to item</button>
                      </a>
                    </Link>
                    <strong>{formatPrice(product.price)}</strong>
                    <br />
                    <p>{product.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
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

        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        li {
          list-style: none;
          align-text: left;
          font-family: 'Comfortaa', cursive;
          margin-bottom: 60px;
          border-bottom: 5px solid #e6e6e6;
          padding-bottom: 20px;
        }

        img {
          width: 60%;
          padding: 20px;
          margin: auto;
        }

        p {
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
          overflow: scroll;
          height: 60px;
        }

        p::-webkit-scrollbar {
          width: 0.2em;
        }

        p::-webkit-scrollbar-thumb {
          background-color: darkgrey;
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

        .sampleButton {
          float: left;
          background: none;
          color: black;
          margin-top: 140px;
          margin-left: 80px;
          border-style: none;
          font-family: 'Monoton', cursive;
          font-size: 20px;
          padding: 1px;
          letter-spacing: 2px;
        }
        .sampleButton:hover {
          font-size: 25px;
        }

        .sampleButton:focus {
          outline: none;
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
};

export default Products;

export async function getServerSideProps(context) {
  const { getProducts } = await import('../db.js');

  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
