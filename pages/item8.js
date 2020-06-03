import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import { getProducts } from '../db.js';
import Counter from './counter.js';
import Footer from '../components/Footer';
import ShopCart from './shopCart.js';

function Item8() {
  const productList = getProducts();

  const product = productList[7];

  const numberPrice = parseFloat(product.price);

  const [quantity, setQuantity] = useState(1);

  function formatPrice(price) {
    return `$${(price * 0.001).toFixed(3)}`;
  }

  function updatePrice(e) {
    setQuantity(e.target.value);
  }

  function handleSubmit() {
    setQuantity(quantity * numberPrice);
  }

  const addToCart = () => {
    //later
  };

  useEffect(() => {
    const saveValue = Number(localStorage.getItem('quantity'));
    if (saveValue) {
      setQuantity(saveValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quantity', quantity.toString());
  }, [quantity]);

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
      <Header />
      <br />
      <ShopCart />
      <main>
        <div className="catalog">
          <ul>
            <li className="mainLi" key={product.id}>
              <img src={product.url} />
              <br />
              <div className="description">
                <h3>{product.name}</h3>
                <Link href={'/cart'}>
                  <a>
                    <button
                      className="btns"
                      onClick={() => setQuantity(quantity + numberPrice)}
                    >
                      Add to Cart
                    </button>
                  </a>
                </Link>
                <div className="btnItems">
                  <form onSubmit={handleSubmit}>
                    <label for="product">Items: </label>
                    <input
                      onChange={updatePrice}
                      type="number"
                      key={product.id}
                      name="product"
                      min="0"
                      max="10"
                    />
                  </form>
                </div>
                <br />
                <p className="totalProduct">
                  total: $ {quantity * numberPrice}
                </p>

                <strong className="price">{formatPrice(product.price)}</strong>
                <br />

                <p>{product.description}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="features">
          <h2>Digitaler Synthesizer</h2>
          <div>
            <ul className="ulFeatures">
              <li>From classic analog to vintage digital — and beyond</li>
              <li>Premium 61-note Roland keyboard with aftertouch</li>
              <li>
                Cutting-edge ZEN-Core sound engine with various Model sound
                generators
              </li>
              <li>Polyphony: up to 256 notes (depending on tone structure)</li>
              <li>I-Arpeggio for instant inspiration</li>
              <li>Extensive hands-on controls</li>
              <li>Pitchbend and Mod wheels</li>
              <li>Onboard FX engine</li>
              <li>XLR-1/4" Combo Mic input</li>
              <li>3.5mm AUX input</li>
              <li>1/4" TS and balanced XLR Outputs</li>
              <li>MIDI 5/pin DIN I/O</li>
              <li>USB-to-Host; USB-to-Device</li>
              <li>1/4" and 3.5mm Headphone outputs</li>
              <li>2 Pedal jacks</li>
            </ul>
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
        }

        h1 {
          font-family: 'Comfortaa', cursive;
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

        .mainLi {
          list-style: none;
          align-text: center;
          font-family: 'Comfortaa', cursive;
          margin-bottom: 60px;
          border-bottom: 5px solid #e6e6e6;
          padding-bottom: 20px;
        }

        img {
          width: 60%;
          padding: 20px;
          margin-left: 280px;
        }

        p {
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
        }

        .description {
          background: #f7cac9;
          border-radius: 5px;
          width: 50%;
          padding: 20px;
          padding-top: 5px;
          margin-bottom: 70px;
          margin: auto;
        }

        button {
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 10px;
          margin-right: 20px;
          margin-top: -50px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
        }

        .price {
          letter-spacing: 0.1em;
        }

        h2 {
          text-align: center;
          margin-top: -30px;
        }

        li {
          float: center;
          font-family: 'Comfortaa', sans;
          line-height: 2.5;
        }

        .ulFeatures {
          float: center;
        }

        form {
          float: right;
          margin-right: 20px;
        }

        input {
          boder: 2px solid #fff;
          border-radius: 4px;
          text-align: center;
        }

        input:focus {
          outline: none;
        }

        .totalProduct {
          float: right;
          font-weight: 900;
          margin-top: 8px;
          letter-spacing: 0.1em;
          margin-right: 20px;
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

export default Item8;
