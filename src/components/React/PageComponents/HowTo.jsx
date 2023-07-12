import {
  useStore
} from "@nanostores/react";
import {
  colors
} from "../../../stores/colors.js"

function HowTo() {
  const selectedColor = useStore(colors).secondaryColor;
  
  const styles = {
    wrapper: {
      height: "300px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "3rem",
      borderRadius: "10px"
    }
  }

  return (
    <div style={{...styles.wrapper, backgroundColor: selectedColor}}>
      <div className="row">
        <h3>How does this works?</h3>
        <p>Use the toolbox to select a specific color picker for different elements to color more specifically</p>
      </div>
      <div className="row">
          
      </div>
    </div>
  )
}

export default HowTo
;