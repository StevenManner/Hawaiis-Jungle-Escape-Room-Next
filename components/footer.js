import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <div className="container01">
          <div className="container02">
            <div className="container03">
              <span className="text">
                <span className="text01">
                  Find us on these platforms! Or click the telephone icon to
                  call us.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="text03"></span>
                <span className="text04">Click on the GPS icon for direc</span>
                <span className="text05">tions!</span>
              </span>
              <div className="container04">
                <div className="container05">
                  <a
                    href="https://goo.gl/maps/iHxK17FhxFr4WQYq8"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    <div className="container06">
                      <img
                        src="/playground_assets/gmapspin-200h.png"
                        className="image"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/escapehilo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link1"
                  >
                    <div className="container07">
                      <img
                        src="/playground_assets/ig-200h.webp"
                        className="image1"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/EscapeHiloHawaii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link2"
                  >
                    <div className="container08">
                      <svg viewBox="0 0 1024 1024" className="icon">
                        <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="tel:+18089699696" className="link3">
                    <div className="container09">
                      <img
                        alt={props.image_alt1}
                        src={props.image_src1}
                        className="image2"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container10"></div>
        <div className="container11">
          <div className="container12">
            <span className="text06 textSM">
              <span className="text07">Hours of Operation</span>
              <br></br>
              <span>M</span>
              <span>onday - Sunday</span>
              <br></br>
              <span>11:00 AM - 7:00 PM Every Day</span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="container13">
          <div className="container14">
            <span className="text15 textXS">OTHER RESOURCES</span>
            <span className="text16 textSM">Terms &amp; Conditions</span>
            <span className="text17 textSM">Privacy Policy</span>
          </div>
        </div>
        <div className="container15">
          <div className="container16">
            <div className="container17"></div>
          </div>
        </div>
        <span className="text18 textSM">
          <span>
            Copyright 2022 Hilo Experience LLC dba Escape Hilo |
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://MannerMedia.biz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="text20">Design by Manner Media LLC</span>
          </a>
        </span>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 450px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text {
            color: #000000;
            width: 100%;
            align-self: center;
            text-align: center;
            font-weight: 700;
          }
          .text01 {
            text-align: center;
            font-weight: 700;
          }
          .text03 {
            text-align: center;
          }
          .text04 {
            text-align: center;
            font-weight: 700;
          }
          .text05 {
            font-weight: 700;
          }
          .container04 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container05 {
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            display: contents;
          }
          .container06 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .link1 {
            display: contents;
          }
          .container07 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image1 {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .link2 {
            display: contents;
          }
          .container08 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .icon {
            fill: #4267B2;
            width: 25px;
            height: 25px;
          }
          .link3 {
            display: contents;
          }
          .container09 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image2 {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .container10 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .container12 {
            flex: 0 0 auto;
            width: 33%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text06 {
            color: #000000;
            font-style: normal;
            text-align: center;
          }
          .text07 {
            font-style: normal;
            font-weight: 700;
          }
          .container13 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .text15 {
            color: var(--dl-color-secondary-400);
            text-align: center;
            font-weight: 600;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text16 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text17 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .container17 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .text18 {
            color: #000000;
            align-self: center;
            padding-top: var(--dl-space-space-twoandhalf);
          }
          .text20 {
            text-decoration: underline;
          }
          .rootClassName {
            height: 100%;
          }
          @media (max-width: 991px) {
            .text {
              font-size: small;
            }
            .container04 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container14 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .container {
              height: 475px;
            }
            .text {
              text-align: center;
            }
            .container04 {
              width: 597px;
            }
            .container11 {
              width: 100%;
              align-items: stretch;
            }
            .container12 {
              width: 33%;
            }
            .text06 {
              align-self: flex-start;
              margin-right: var(--dl-space-space-unit);
            }
            .container14 {
              width: 33%;
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .container {
              height: 100%;
            }
            .container03 {
              width: 100%;
            }
            .text {
              width: 100%;
              height: auto;
            }
            .container04 {
              width: auto;
            }
            .container11 {
              width: 100%;
            }
            .container12 {
              width: auto;
              height: auto;
            }
            .text06 {
              width: auto;
              text-align: center;
            }
            .container13 {
              align-items: center;
              justify-content: center;
            }
            .text15 {
              text-align: center;
            }
            .text16 {
              text-align: center;
            }
            .text17 {
              text-align: center;
            }
            .text18 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              text-align: center;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: '308 Kamehameha Avenue, Suite 200',
  image_alt21: 'image',
  image_src1: '/playground_assets/phone%20icon1-200h.png',
  image_src2: 'd1a66251-1259-4713-8dca-e6d13de2b7ce',
  text21: 'Hours of Operation',
  rootClassName: '',
  image_src21: 'd1a66251-1259-4713-8dca-e6d13de2b7ce',
  image_alt2: 'image',
  image_alt1: 'image',
}

Footer.propTypes = {
  text1: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src21: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Footer
