import { useStore } from "@nanostores/react";
import { colors } from "../../stores/colors";

function SelectedColor() {
  const selectedColor = useStore(colors).current;

  const styles = {
    currentColor: {
      height: "200px",
      width: "100%",
      borderRadius: "5px",
      backgroundColor: selectedColor
    }
  }

  return (
    <div>
      <h3>Selected color: {selectedColor}</h3>
      <div style={styles.currentColor}></div>
    </div>
  )
}

export default SelectedColor
