import { useStore } from "@nanostores/react";
import { 
  colors
} from "../../../stores/colors.js";

function Card({ title, description }) {
  const state = useStore(colors);
  console.log(state.backgroundColor)

  const styles = {
    padding: "2rem",
    minHeight: "200px",
    height: "250px",
    borderRadius: "15px",
  }

  return (
    <>
      <div className="card-inner" style={{...styles, backgroundColor: state.primaryColor}}>
        <h3 style={{color: state.backgroundColor}}>{title}</h3>
        <p style={{color: state.backgroundColor}}>{description}</p> 
      </div>
    </>
  )
}

export default Card
