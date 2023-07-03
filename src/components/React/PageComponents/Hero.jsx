import { useStore } from "@nanostores/react";
import { 
  colors
} from "../../stores/colors";

import React from 'react'

function Hero() {
  const primaryColor = useStore(colors).primaryColor;
  return (
    <div className="Hero" backgorund={{backgroundColor: primaryColor}}>
      
    </div>
  )
}

export default Hero
