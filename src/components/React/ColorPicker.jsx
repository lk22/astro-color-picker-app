import { useStore } from "@nanostores/react";
import { 
  colors, 
  getAvailableColors, 
  selectColor, 
  copyColor,
  resetCopyColor,
  setNewAvailableColors
} from "../../stores/colors";

function ColorPicker() {
  const availableColors = getAvailableColors()
  const colorsState = useStore(colors)
  console.log(colorsState)

  const styles = {
    pickerOptions: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "300px",
      height: "100px",
    },
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

  const handleNewColorSelect = (e) => {
    const newColorValue = e.target.value;
    const newColorObj = {
      key: newColorValue,
      value: newColorValue,
      variants: [
        newColorValue + "90",
        newColorValue + "80",
        newColorValue + "70",
        newColorValue + "60",
        newColorValue + "50",
        newColorValue + "40",
        newColorValue + "30",
        newColorValue + "20",
        newColorValue + "10",
      ]
    }
    setNewAvailableColors(newColorObj)
  }

  const renderColors = () => {
    return availableColors.map((color) => {
      return (
        <>
          <div 
            className="col-3 color"
            key={color.key}
            style={{...styles.color, backgroundColor: color.value}}
            onClick={() => handleSelectColor(color.value)}
            onMouseEnter={() => handleHoverColor(color.value)}
            onMouseLeave={() => handleHoverColor("#fff")}
          >

          </div>
          {color.variants.map((variant) => {
            console.log(variant)
            return <div 
            className="col-3 color-variant"
            key={variant}
            style={{...styles.color, backgroundColor: variant}}
            onClick={() => handleSelectColor(variant)}
            onMouseEnter={() => handleHoverColor(variant)}
            onMouseLeave={() => handleHoverColor("#fff")}
          >

          </div>
          })}
        </>
      )
    })
  }

  return (
    <div>
      <div className="color-picker-wrapper">
        <div className="picker-options" style={{...styles.pickerOptions}}>
          <div className="row">
            <div className="col-12">
              <h3>Color picker</h3>
              <input type="color" name="" id="" onChange={(e) => handleNewColorSelect(e)} />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styles.row}>
        {renderColors()}
      </div>
    </div>
  )
}

export default ColorPicker
