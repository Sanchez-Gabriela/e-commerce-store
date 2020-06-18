import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import cookies from 'js-cookie';

function formatPrice(price) {
  return `$${(price * 0.001).toFixed(3)}`;
}

// 1° Argument: array and 2° argument: default value
function productCounter(productCart) {
  return productCart.reduce(
    (acc, product) => acc + parseInt(product.quantity),
    0,
  );
}

function Summary(productCart) {
  return productCart.reduce((acc, product) => acc + product.price, 0);
}

function Cart(props) {
  const productCart = props.productCart;

  function increment(indexToIncrement) {
    const newCookies = productCart.map((product, index) =>
      index === indexToIncrement
        ? {
            ...product,
            quantity: parseInt(product.quantity) + 1,
            price: product.price + product.price / product.quantity,
          }
        : product,
    );

    cookies.set('productCart', newCookies);
    window.location.reload();
    console.log('newCOOKIES', newCookies);
  }

  function decrement(indexToDecrement) {
    const cookiesDecr = productCart.map((product, index) =>
      index === indexToDecrement
        ? {
            ...product,
            quantity: parseInt(product.quantity) - 1,
            price: product.price - product.price / product.quantity,
          }
        : product,
    );

    cookies.set('productCart', cookiesDecr);
    window.location.reload();
  }

  function removeProduct(indexToRemove) {
    const cookieRemove = productCart.filter(
      (product, index) => index !== indexToRemove,
    );

    cookies.set('productCart', cookieRemove);
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
      <div className="container">
        <Head>
          <title>cart</title>
        </Head>

        <Header />
        <br />
        <main>
          <br />
          <table>
            <thead>
              <h2>Your shopping cart</h2>

              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody className="itemSection">
              {productCart.map((product, index) => (
                <tr className="ItemSection">
                  <td>
                    <img
                      src={product.url}
                      alt={product.name}
                      style={{ width: '20px', height: '20px' }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td className="productQuantity">{product.quantity} </td>
                  <td>{formatPrice(product.price)}</td>
                  {/* <br />
                  <br /> */}
                  <td>
                    <button className="testButton" onClick={() => increment(index)}>&#10010;</button>
                  </td>
                  <td>
                    <button onClick={() => decrement(index)}>&#9866;</button>
                  </td>
                  <td>
                    <button onClick={() => removeProduct(index)}>
                      &#10008;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="order">
            <span className="shipping">free 2-days shipping + returns</span>
            <h2
              style={{
                textAlign: 'center',
                borderBottom: '2px black solid',
                paddingBottom: '10px',
              }}
            >
              Order Summary
              <img className="cartHeart" src="/buy.png" alt="shoppingCart" />
            </h2>

            <div>
              <span style={{ fontSize: '20px' }}>
                {' '}
                <strong>Items: {productCounter(productCart)} </strong>
              </span>
              <span style={{ float: 'right', fontSize: '20px' }}>
                <strong>total: {formatPrice(Summary(productCart))}</strong>
              </span>
              <br />
              <span style={{ fontSize: '10px', marginLeft: '130px' }}>
                * VAT included / excl Shipping cost
              </span>
            </div>
            <Link href={'/paymentForm'}>
              <a>
                <button className="checkout">CHECKOUT</button>
              </a>
            </Link>
            <img src="/CreditCardIcons.png" alt="creditCardIcons" />
          </div>
        </main>
        <Link href={'/products'}>
          <a className="linkContinue">Continue shopping &#187;</a>
        </Link>
        <Footer />
      </div>

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
          flex-direction: row;
          justify-content: left;
          padding-top: 20px;
          width: 80%;
        }

        .order {
          background: lightgrey;
          border-radius: 5px;
          padding: 20px;
          width: 30%;
          height: 350px;
          margin-left: 60px;
          margin-top: 100px;
        }

        h2 {
          font-family: 'Comfortaa', cursive;
          color: black;
          margin-top: 50px;
          text-align: left;
          border-bottom: 2px black solid;
          padding-bottom: 10px;
        }

        a {
          text-decoration: none;
        }

        td,
        th {
          padding-bottom: 40px;
        }

        h3 {
          font-family: 'Monoton', cursive;
        }

        p {
          font-family: 'Comfortaa', cursive;
          line-height: 1.6;
        }

        button {
          float: right;
          font-family: 'Comfortaa', cursive;
          margin-right: 20px;
          padding: 0;
          border: none;
          background: none;
          font-size: 18px;
          font-weight: bold;
        }

        img {
          width: 100%;
          margin-top: 10px;
        }

        .totalTag {
          text-align: right;
        }

        table {
          text-align: left;
          width: 60%;
        }

        .checkout {
          margin-top: 50px;
          float: right;
          font-family: 'Comfortaa', cursive;
          padding: 5px;
          margin-right: 90px;
          border-radius: 6px;
          background: #2eb82e;
          color: #fff;
        }

        .shipping {
          margin-left: 40px;
          font-size: 12px;
        }

        .linkContinue {
          margin-bottom: 200px;
          font-family: 'Comfortaa', cursive;
        }

        .cartHeart {
          width: 10%;
        }

        .itemSection {
          background-color: 'lightgrey';
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
export default Cart;

export function getServerSideProps(context) {
  const { productCart } = nextCookies(context);

  return {
    props: {
      productCart: productCart === undefined ? [] : productCart,
    },
  };
}
