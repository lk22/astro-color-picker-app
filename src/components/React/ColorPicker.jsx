import { useStore } from "@nanostores/react";
import { 
  colors, 
  getAvailableColors, 
  selectColor, 
  getCurrentColor,
  copyColor
} from "../../stores/colors";

function ColorPicker() {
  const availableColors = getAvailableColors()
  const selected = getCurrentColor()
  const colorStore = useStore(colors)

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
    // use clipboard API to copy color to clipboard
    navigator.clipboard.writeText(color)
      .then(() => {
        copyColor(color)
      }
    )
  }

  const renderColors = () => {
    return availableColors.map((color) => {
      return <div 
        className="col-3 color" 
        style={{ ...styles.color, backgroundColor: color.hex }} 
        key={color.color}
        onClick={() => handleSelectColor(color.hex)}
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
