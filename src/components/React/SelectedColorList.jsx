import { useStore } from "@nanostores/react";
import { colors } from "../../stores/colors";

function SelectedColorList() {
  const selectedColors = useStore(colors).selected;
  console.log(selectedColors)
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
