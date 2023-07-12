import { useStore } from "@nanostores/react";
import { colors } from "../../stores/colors.js";

function SelectedColorList() {
  const selectedColors = useStore(colors).selected;
  return (
    <div>
      <h3>Selected colors</h3>
      {selectedColors.map((color) => (
        <div key={color}>
          <p>{color}</p>
        </div>
      ))}
    </div>
  )
}

export default SelectedColorList
