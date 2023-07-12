import { useStore } from "@nanostores/react";
import { 
  colors, 
  setNewPrimaryColor,
  setNewSecondaryColor,
  setNewTextColor,
  setNewLinkColor,
  setNewTertiaryColor,
  setNewBackgroundColor,
  setNewButtonTextColor,
  setNewButtonColor
} from "../../stores/colors";

import { useState } from "react";

import Download from './Download'
import VariablesModal from "./PageComponents/VariablesModal";

function ColorPicker() {
  const colorsState = useStore(colors)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isToggled = isOpen ? "flex" : "none"
  
  const styles = {
    wrapper: {
      position: "fixed",
      bottom: "20px",
      maxWidth: "1180px",
      minHeight: "100px",
      paddingInline: "2rem",
      backgroundColor: "#f9f9f9",
      width: "1180px",
      border: "2px solid",
      padding: "1rem",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
    },
    pickerOptions: {
      width: "100%"
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      transition: "all 0.5s ease-in-out"
    },
    columnPicker: {
      width: "16%",
      flex: "0 0 16%"
    },
    input: {
      height: "40px",
      width: "50%",
      border: "none",
    }
  }
  
  
  const handlePrimaryColor = (e) => {
    setNewPrimaryColor(e.target.value)
  }

  const handleSecondaryColor = (e) => {
    setNewSecondaryColor(e.target.value)
  }

  const handleTextColor = (e) => {
    setNewTextColor(e.target.value)
  }

  const handleTertiaryColor = (e) => {
    setNewTertiaryColor(e.target.value)
  }

  const handleBackgrounColor = (e) => {
    setNewBackgroundColor(e.target.value)
    document.querySelector('html').style.background = e.target.value
  }

  const handleButtonTextColor = (e) => {
    setNewButtonTextColor(e.target.value)
  }

  const handleButtonColor = (e) => {
    setNewButtonColor(e.target.value)
  }

  const handleToggleColorPicker = () => {
    setIsOpen(!isOpen)
  }

  // toggle modal
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="design-downloader" style={{position: "fixed", left: "30px", bottom: "75px"}}>
        <button className="btn btn-primary download-button" onClick={() => handleToggleModal()}>Download</button>
      </div>
      <div className="toggle-picker" style={{position: "fixed", left: "30px;", bottom: "30px;"}}>
        <button className="btn btn-primary" onClick={() => handleToggleColorPicker()}>Toggle picker</button>
      </div>
      <div className="color-picker-wrapper" style={{...styles.wrapper, display: isToggled}}>
        <div className="picker-options container" style={styles.pickerOptions}>
          <div className="row" style={styles.row}>
            <div className="col-2 d-flex flex-column" style={styles.columnPicker}>
              <p>Background Color</p>
              <input style={styles.input} type="color" value={colorsState.backgroundColor} name="" id="" onChange={(e) => handleBackgrounColor(e)} />
            </div>
            <div className="col-2" style={styles.columnPicker}>
              <p>Primary color</p>
              <input style={styles.input} type="color" value={colorsState.primaryColor} name="" id="" onChange={(e) => handlePrimaryColor(e)} />
            </div>
            <div className="col-2" style={styles.columnPicker}>
              <p>Secondary color</p>
              <input style={styles.input} type="color" value={colorsState.secondaryColor} name="" id="" onChange={(e) => handleSecondaryColor(e)} />
            </div>
            <div className="col-2" style={styles.columnPicker}>
              <p>Text color</p>
              <input style={styles.input} type="color" value={colorsState.tertiaryColor} name="" id="" onChange={(e) => handleTertiaryColor(e)} />
            </div>
            <div className="col-2" style={styles.columnPicker}>
              <p>Button  color</p>
              <input style={styles.input} type="color" value={colorsState.buttonBackgroundColor} name="" id="" onChange={(e) => handleButtonColor(e)} />
            </div>
            <div className="col-2" style={styles.columnPicker}>
              <p>Button Text color</p>
              <input style={styles.input} type="color" value={colorsState.buttonTextColor} name="" id="" onChange={(e) => handleButtonTextColor(e)} />
            </div>
          </div>
        </div>
      </div>
      <VariablesModal isModalOpen={isModalOpen} handleCloseModal={closeModal}/>
    </div>
  )
}

export default ColorPicker
