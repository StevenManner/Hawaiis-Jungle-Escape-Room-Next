import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="link">{props.text}</a>
        </Link>
        <Link href="/about">
          <a className="link1">{props.text1}</a>
        </Link>
        <Link href="/faq">
          <a className="link2">{props.text2}</a>
        </Link>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;flow=6078"
          target="_blank"
          rel="noreferrer noopener"
          className="link3"
        >
          {props.text21}
        </a>
        <span className="text"></span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .link {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
          }
          .link1 {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .link2 {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .link3 {
            color: #000000;
            visibility: hidden;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .text {
            color: #000000;
            margin-left: 32px;
          }

          .rootClassName8 {
            margin-right: var(--dl-space-space-doubleunit);
          }

          .rootClassName12 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .link3 {
              visibility: hidden;
            }
          }
          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .link3 {
              visibility: hidden;
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .nav {
              z-index: 999;
            }
            .link3 {
              visibility: visible;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text21: 'BOOK NOW',
  text: 'HOME',
  text1: 'ABOUT',
  text2: 'FAQ',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text21: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
