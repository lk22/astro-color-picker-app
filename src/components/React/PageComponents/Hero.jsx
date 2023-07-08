import { useStore } from "@nanostores/react";
import { 
  colors
} from "../../../stores/colors";

function Hero({ height, width }) {
  const store = useStore(colors);
  const textColor = useStore(colors).tertiaryColor

  const heroStyles = {
    wrapper: {
      height: height,
      padding: "3rem",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "10px",
      width: width,
      marginBottom: "2rem"
    }
  }

  return (
    <div className="Hero container" style={{...heroStyles.wrapper}}>
      <h2 style={{color: textColor}}>
        Real time color visualisation<br/>
      </h2>
      <p style={{color: textColor}}>Release your inner design fanatic with this realtime color designer tool</p>
      <a className="btn" href="#features" style={{color: store.buttonTextColor, backgroundColor: store.buttonBackgroundColor}}>See more</a>
    </div>
  )
}

export default Hero
