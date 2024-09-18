
import React from 'react'
import { ReactComponent as LeftSlideArrowIcon } from "../../assets/leftSlideBtn.svg";

const LeftNavButton = ({ onClick}) => {
  return (
    <LeftSlideArrowIcon onClick={onClick}/>
  )
}

export default LeftNavButton