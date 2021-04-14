import React from 'react'

const Footer = ({remaining, total}) => {
  return (
    <div data-testId = "footer">
        {remaining} / {total} left
    </div>
  )
}

export default Footer