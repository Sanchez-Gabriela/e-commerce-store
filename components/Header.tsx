import React from 'react';
import Link from 'next/link';
import cookies from 'js-cookie';

type ItemInCart = {
  acc: String;
  product: Number;
  quantity: Number;
};

export default function Header() {
  const linkList = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Products', url: '/products' },
    { name: 'Shop', url: '/cart' },
  ];

  const itemsInCart = cookies.getJSON('productCart') || [];

  return (
    <div>
      <div>
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
          <img className="cartShop" src="/cart-simple.png" alt="cartShopping" />
          <span>
            {itemsInCart
              ? `${itemsInCart.reduce(
                  (acc: string, product: ItemInCart) =>
                    acc + Number(product.quantity),
                  0,
                )}`
              : '0'}
          </span>
        </div>
        <style jsx>{`
          .navbar {
            width: 100%;
            height: 70px;
            // padding: 30px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            align-items: center;
            margin-top: 10px;
          }
          span {
            margin-left: -70px;
          }

          .logo-div a {
            width: 60px;
            // float: left;
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: 25px;
            // margin-left: 40px;
            font-family: 'Comfortaa', cursive;
            margin-right: 430px;
          }

          .logo-div {
            float: right;
          }

          .navbar-links a {
            // float: right;
            text-decoration: none;
            color: black;
            padding-left: 30px;
            padding-right: 30px;
            font-family: 'Monoton', cursive;
          }

          .cartShop {
            width: 3%;
          }

          .navbar-links {
            margin-right: -80px;
          }
        `}</style>
      </div>
    </div>
  );
}
