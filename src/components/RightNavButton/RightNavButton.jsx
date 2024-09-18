
import React from 'react'
import { ReactComponent as RighttSlideArrowIcon } from "../../assets/rightSlideBtn.svg";

const RighttNavButton = ({onClick}) => {
  return (
    <RighttSlideArrowIcon onClick={onClick}/>
  )
}

export default RighttNavButton