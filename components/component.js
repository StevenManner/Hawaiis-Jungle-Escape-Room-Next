import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <a
          href={props.link_button}
          target="_blank"
          rel="noreferrer noopener"
          className="link button"
        >
          {props.button}
        </a>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .link {
            color: #ffffff;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            border-width: 0px;
            text-decoration: none;
            background-color: #39b300;
          }
          .link:hover {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #227101;
          }
          .rootClassName {
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  button: 'Click Here to Book Your Escape!',
  link_button:
    'https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&u=84441f3f-1c27-44c8-9146-8ef90bd95998&from-ssl=yes&back=https://www.escapehilo.com/',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  link_button: PropTypes.string,
}

export default AppComponent
