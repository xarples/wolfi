import React from 'react'

interface propTypes {
  text: string
}

const Button = (props: propTypes) => {
  return (
    <div>
      <style jsx>{`
        button {
          color: red;
        }
      `}</style>
      <button>{props.text}</button>
    </div>
  )
}

export default Button
