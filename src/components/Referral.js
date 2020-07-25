import React from "react"

const Referral = ({ handleName }) => {
  return (
    <>
      <a
        href={`https://www.pexels.com/${handleName}`}
        target="_blank"
        rel="noreferrer"
        alt=""
      >
        {handleName}
      </a>{" "}
    </>
  )
}

export default Referral
