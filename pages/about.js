import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Counter from '../components/counter'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>About - Escape Hilo</title>
          <meta
            name="description"
            content="Ryan Neal has been running Escape Hilo since 2017 delivering escape room experiences to hundreds of families cooperatively solving puzzles before time runs out"
          />
          <meta property="og:title" content="About - Escape Hilo" />
          <meta
            property="og:description"
            content="Ryan Neal has been running Escape Hilo since 2017 delivering escape room experiences to hundreds of families cooperatively solving puzzles before time runs out"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <div className="image">
          <Header></Header>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="image1"
          />
          <div className="bg"></div>
        </div>
        <div className="container1">
          <div className="container2">
            <div className="container3">
              <Counter></Counter>
              <Counter type="Satisfied Escapee's" number="1000+"></Counter>
            </div>
            <img
              alt="image"
              src="/playground_assets/ryanselfie-200w.jpg"
              className="image2"
            />
            <div className="container4">
              <div className="container5">
                <PrimaryButton button="connect"></PrimaryButton>
              </div>
              <a
                href="https://www.facebook.com/EscapeHiloHawaii"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <SecondaryButton
                  button="message"
                  className="component4"
                ></SecondaryButton>
              </a>
            </div>
          </div>
          <div className="container6">
            <h3 className="text text2XL">Ryan Neal</h3>
            <div className="container7">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="text1 textSM">Hilo, Hawai&apos;i</span>
            </div>
            <div className="container8">
              <svg viewBox="0 0 1024 1024" className="icon2">
                <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="text2 textSM">
                Owner of Hilo Experience, LLC dBA Escape Hilo
              </span>
            </div>
            <span className="text3">
              <span className="text4">
                Hey everyone my name is Ryan, I am the owner of Escape Hilo and
                also your host! I&apos;ve been doing escape rooms for a little
                over 6 years now and the proud owner of Hawaii Island&apos;s
                first escape room company! I&apos;ve been in operation since
                2017 and I truly want to deliver a great escape attempt for
                first time players and expert players. Heck I&apos;d say if you
                done over 50 escape rooms I DARE YOU to beat our record. DO IT,
                YOU WON&apos;T!!!
              </span>
            </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f2f5f9ff;
          }
          .image {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/door-1500w.jpg');
            background-repeat: space;
            background-position: center;
          }
          .image1 {
            left: auto;
            right: auto;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            z-index: 2;
            max-width: 1320px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: -12rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-around;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .image2 {
            top: -60%;
            left: 0px;
            right: 0px;
            width: 150px;
            bottom: var(--dl-space-space-fiveunits);
            height: 169px;
            margin: auto;
            position: absolute;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container5 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .link {
            display: contents;
          }
          .component4 {
            text-decoration: none;
          }
          .container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-300);
          }
          .container7 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .icon {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .text1 {
            color: var(--dl-color-secondary-500);
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .container8 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .icon2 {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .text2 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-space-space-halfunit);
          }
          .text3 {
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: 300;
            line-height: 1.625;
            padding-top: var(--dl-space-space-unit);
          }
          .text4 {
            color: var(--dl-color-secondary-300);
          }
          @media (max-width: 991px) {
            .container2 {
              flex-direction: column;
            }
            .container3 {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
