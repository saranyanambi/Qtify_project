import React from 'react'
import { ReactComponent as Arrowup } from "../../assets/Arrowup.svg";

export const ArrowUp = ({ onClick}) => {
  return (
    <Arrowup onClick={onClick}/>
  )
}

export default ArrowUp