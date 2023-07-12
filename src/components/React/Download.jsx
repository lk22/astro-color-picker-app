import React from 'react'
import {useStore} from "@nanostores/react";
import {colors, downloadColors} from "../../stores/colors";

function Download() {
  return (
    <div>
      <button className="btn btn-primary download-button">Download</button>
    </div>
  )
}

export default Download
