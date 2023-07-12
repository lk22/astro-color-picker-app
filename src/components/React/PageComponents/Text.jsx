import { useStore } from "@nanostores/react";
import { 
  colors
} from "../../../stores/colors.js";
function Text({ align }) {
  const store = useStore(colors);
  console.log(store.textColor)

  return (
    <div>
      <h3 style={{color: store.tertiaryColor, textAlign: align, marginBottom: "2rem"}}>
        Want to design this page with your free fantasy of colors?
      </h3>
    </div>
  )
}

export default Text
