import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import nextCookies from 'next-cookies';
import Link from 'next/link';

function formatPrice(price) {
  return `$${(price * 0.001).toFixed(3)}`;
}
function productCounter(productCart) {
  return productCart.reduce(
    (acc, product) => acc + parseInt(product.quantity),
    0,
  );
}

function Summary(productCart) {
  return productCart.reduce((acc, product) => acc + product.price, 0);
}
function PaymentForm(props) {
  const productCart = props.productCart;
  return (
    <>
      <Head>
        <title>Payment</title>
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
      <div className="content">
        <div className="wrapper">
          <div className="container">
            <form>
              <h1>
                <i className="fas fa-shipping-fast"></i>
                Shipping Details
              </h1>
              <div className="name">
                <div>
                  <label for="f-name">First Name</label>
                  <input type="text" name="f-name" />
                </div>
                <div>
                  <label for="l-name">Last Name</label>
                  <input type="text" name="l-name" />
                </div>
              </div>
              <div className="street">
                <label for="name">Street</label>
                <input type="text" name="address" />
              </div>
              <div className="address-info">
                <div>
                  <label for="city">City</label>
                  <input type="text" name="city" />
                </div>
                <div>
                  <label for="state">Country</label>
                  <input type="text" name="state" />
                </div>
                <div>
                  <label for="zip">Postal Code</label>
                  <input type="text" name="zip" />
                </div>
              </div>
              <h1>
                <i className="far fa-credit-card"></i> Payment Information
              </h1>
              <div className="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input type="text" name="card-num" />
              </div>
              <div className="cc-info">
                <div>
                  <label for="card-num">Exp</label>
                  <input type="text" name="expire" />
                </div>
                <div>
                  <label for="card-num">CCV</label>
                  <input type="text" name="security" />
                </div>
                <span style={{ fontSize: '20px' }}>
                  {' '}
                  Items: <strong>{productCounter(productCart)} </strong>
                </span>
                <br />
                <span style={{ float: 'right', fontSize: '20px' }}>
                  Total: <strong>{formatPrice(Summary(productCart))}</strong>
                </span>
                <br />
              </div>
              <div className="buttons">
                <Link href={'/thanks'}>
                  <a>
                    <button>Purchase</button>
                  </a>
                </Link>
                <Link href={'/cart'}>
                  <a>
                    <button>Back to cart</button>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>

      <style jsx>{`
        body {
          display: flex;
          justify-content: center;
        }

        .wrapper {
          margin-top: 5%;
          width: 50%;
          display: flex;
          justify-content: center;
          font-family: 'Arimo';
          background-color: $coral;
          -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
          -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
          box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
          animation: slideUp 2000ms ease;
          margin-bottom: 20px;
        }

        .content {
          padding-bottom: 10px;
        }
        .container {
          width: 65%;
          padding: 5% 10%;
        }

        h1 {
          align-self: center;
          font-family: 'Comfortaa', cursive;
        }

        form {
          width: 100%;
        }
        > * {
          margin-top: 20px;
        }

        input {
          width: 100%;
          min-height: 25px;
          border: 1px grey solid;
          font-size: 1rem;
          letter-spacing: 0.15rem;
          font-family: 'Arimo';
          margin-top: 5px;
          color: $maroon;
          border-radius: 4px;
          font-family: 'Comfortaa', cursive;
        }

        label {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 2px;
          color: $maroon;
          font-family: 'Comfortaa', cursive;
        }

        h1 {
          font-size: 24px;
          line-height: 10px;
          color: $title;
          letter-spacing: 1px;
          font-family: 'Comfortaa', cursive;
        }

        h1:nth-of-type(2) {
          margin-top: 10%;
        }

        .name {
          justify-content: space-between;
          display: flex;
          width: 100%;
        }

        .address-info {
          display: flex;
          justify-content: space-between;
        }

        .cc-info {
          display: flex;
          justify-content: space-between;
        }

        button {
          margin: 3px 0;
          height: 30px;
          width: 100%;
          color: #9A9A9;
          background-color: #f7cac9;
          text-transform: uppercase;
          border: 0;
          border-radius: 0.3rem;
          letter-spacing: 2px;
        }

        input:focus,
        button:focus {
          outline: none;
        }

        form h1 {
          text-align: center;
        }

        .name,
        .address-info,
        .cc-info {
          flex-direction: column;
          width: 100%;
          justify-content: space-between;
        }
        div {
          align-items: center;
          flex-direction: column;
          width: 100%;
          display: flex;
        }

        .street,
        .cc-num {
          text-align: left;
        }

        input {
          margin: 5px 0;
          min-height: 30px;
        }

        .buttons {
          display: flex;
          flex-direction: column;
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

export default PaymentForm;

export function getServerSideProps(context) {
  const { productCart } = nextCookies(context);

  return {
    props: {
      productCart,
    },
  };
}
