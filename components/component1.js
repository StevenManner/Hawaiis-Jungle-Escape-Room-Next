import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="container">
        <a href={props.link_text} target="_blank" rel="noreferrer noopener">
          {props.text}
        </a>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  link_text: 'https://example.com',
  text: 'Link',
}

Component1.propTypes = {
  link_text: PropTypes.string,
  text: PropTypes.string,
}

export default Component1
