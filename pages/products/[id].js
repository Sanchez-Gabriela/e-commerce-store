import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import { getProductsById } from '../../db';
import Link from 'next/link';
import cookies from 'js-cookie';

const Product = (props) => {
  const numberPrice = parseFloat(props.item.price);

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

  if (!props.item) return <div>Product not found!</div>;

  function setCookies() {
    const newQuantity = quantity;
    cookies.getJSON('productCart');
    cookies.set('productCart', newQuantity);
    window.location.reload();
  }

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
      <main>
        <div className="catalog">
          <ul>
            <li className="mainLi" key={props.item.id}>
              <img src={props.item.url} />
              <br />
              <div className="description">
                <h3>{props.item.name}</h3>
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
                    <label>Items: </label>
                    <input
                      onChange={updatePrice}
                      type="number"
                      key={props.item.id}
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

                <strong className="price">
                  {formatPrice(props.item.price)}
                </strong>
                <br />

                <p>{props.item.description}</p>
                <button onClick={setCookies}>Add Items</button>
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
};

export default Product;

// getServerSideProps will ONLY be run on the server, so
// you can write code here that is "secret" - eg. passwords,
// database connection information, etc.
export function getServerSideProps(context) {
  const item = getProductsById(context.params.id);

  if (item === undefined) {
    return { props: {} };
  }

  return {
    // will be passed to the page component as props
    props: {
      item,
    },
  };
}
