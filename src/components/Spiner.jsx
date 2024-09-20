import React from 'react'
import { ClipLoader } from 'react-spinners'

const override  = {
    display: 'block',
    margin: '100px auto'
}

const Spiner = ({loading}) => {
  return (
    <ClipLoader
        color= '#5466ca'
        loading={loading}
        cssOverride={override}
        size= {150}
    />
  )
}

export default Spiner