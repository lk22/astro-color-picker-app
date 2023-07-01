import { useStore } from "@nanostores/react";
import { 
  colors, 
  getAvailableColors, 
  selectColor, 
  copyColor,
  resetCopyColor
} from "../../stores/colors";

function ColorPicker() {
  const availableColors = getAvailableColors()

  const styles = {
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    color: {
      height: "100px",
      width: "18%",
      flex: "0 0 18%",
      cursor: "pointer",
      borderRadius: "5px",
    }
  }

  const handleSelectColor = (color) => {
    selectColor(color)
    copyColor(color);

    // use clipboard API to copy color to clipboard
    navigator.clipboard.writeText(color)
      .then(() => {
        copyColor(color)
      }
    )

    setTimeout(() => {
      resetCopyColor()
    }, 2000)
  }

  const handleHoverColor = (color) => {
    const html = document.querySelector('html');
    html.style.background = color;
  }

  const renderColors = () => {
    return availableColors.map((color) => {
      return <div 
        className="col-3 color" 
        style={{ ...styles.color, backgroundColor: color.value }} 
        key={color.key}
        onClick={() => handleSelectColor(color.value)}
        onMouseEnter={() => handleHoverColor(color.value)}
        ></div>
    })
  }

  return (
    <div>
      <div className="row" style={styles.row}>
        {renderColors()}
      </div>
    </div>
  )
}

export default ColorPicker
