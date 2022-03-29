import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const BookARoom = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Book A Room - Escape Hilo</title>
          <meta
            name="description"
            content="Book A Room for the Jungle Mystery, with over 100 Five Star Reviews on Google Maps, Escape Hilo continues to serve the best puzzle solving experience to all!"
          />
          <meta property="og:title" content="Book A Room - Escape Hilo" />
          <meta
            property="og:description"
            content="Book A Room for the Jungle Mystery, with over 100 Five Star Reviews on Google Maps, Escape Hilo continues to serve the best puzzle solving experience to all!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <Header rootClassName="rootClassName2"></Header>
        <div className="section1">
          <div className="container1">
            <div className="container2">
              <span className="text text2XL">MAKE A RESERVATION</span>
              <iframe
                src="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
                allowFullScreen="true"
                className="iframe"
              ></iframe>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="image"
          />
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="link button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .section1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-pimary-900);
          }
          .container1 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: column;
          }
          .container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text {
            color: #000000;
          }
          .iframe {
            width: 100%;
            height: 1200px;
          }
          .image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .link {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #39b300;
          }
          .link:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default BookARoom
