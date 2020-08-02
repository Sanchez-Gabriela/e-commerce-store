import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import cookies from 'js-cookie';

const Product = (props) => {
  const numberPrice = parseFloat(props.item.price);

  const [quantity, setQuantity] = useState(1);

  function formatPrice(price) {
    return `$${(price * 0.001).toFixed(3)}`;
  }
  function updatePrice(e) {
    e.preventDefault();
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuantity(quantity * numberPrice);
  }

  if (!props.item) return <div>Product not found!</div>;

  function setCookies() {
    const newQuantity = quantity;
    const totalPrice = quantity * numberPrice;

    let getCookies = ('productCart', cookies.getJSON('productCart'));

    // If empty cookie, creates a new array
    if (!getCookies) {
      getCookies = [];
    }

    const { name } = props.item;

    // Checks if product already exists on cart
    const cartProduct = getCookies.find((product) => product.name === name);

    // Product already existed on cart
    if (cartProduct) {
      cartProduct.quantity =
        parseInt(cartProduct.quantity) + parseInt(newQuantity);
      cartProduct.price = cartProduct.quantity * numberPrice;
    }

    // Product didn't exist on cart
    else {
      getCookies.push({
        name: name,
        image: props.item.url,
        quantity: newQuantity,
        price: totalPrice,
      });
    }
    cookies.set('productCart', getCookies);
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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </div>
      <Header />
      <br />
      <main>
        <div className="catalog">
          <ul>
            <li className="mainLi" key={props.item.id}>
              <img src={props.item.url} alt="product" />
              <br />
              <div className="description">
                <h3>{props.item.name}</h3>
                <Link href={'/cart'}>
                  <a>
                    <button
                      className="btns"
                      onClick={() => setQuantity(quantity + numberPrice)}
                    >
                      {' '}
                      <i className="material-icons">shopping_cart</i>
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
                <button
                  className="setCookies"
                  onClick={() => {
                    setCookies();
                    // inCart();
                  }}
                >
                  Add to Cart
                </button>
                <strong className="price">
                  {formatPrice(props.item.price)}
                </strong>
                <br />
                <p>{props.item.description}</p>
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
          font-size: 22px;
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
          width: 50%;
          padding: 20px;
          margin-left: 350px;
        }

        .buy {
          width: 10%;
        }

        p {
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
        }

        .description {
          background: #f7cac9;
          border-radius: 5px;
          width: 40%;
          padding: 20px;
          padding-top: 5px;
          margin-bottom: 70px;
          margin: auto;
        }

        button {
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 5px;
          margin-right: 20px;
          margin-top: -60px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
        }

        button:focus {
          outline: none;
        }

        .setCookies {
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 5px;
          margin-top: -5px;
          margin-right: 20px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
        }

        .price {
          letter-spacing: 0.1em;
          font-size: 20px;
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
          outline: 1px solid lightgrey;
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
};

export default Product;

// getServerSideProps will ONLY be run on the server, so
// you can write code here that is "secret" - eg. passwords,
// database connection information, etc.
export async function getServerSideProps(context) {
  const { getProductsById } = await import('../../db.js');
  const item = await getProductsById(context.query.id);

  // const { getProducts } = await import('../db.js')

  if (item === undefined) {
    return { props: {} };
  }

  return {
    // will be passed to the page component as props
    props: {
      item: item[0],
    },
  };
}
