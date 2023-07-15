import {useStore} from '@nanostores/react'

import {colors} from '../../../stores/colors.js'

import SyntaxHighligter from 'react-syntax-highlighter'

import {useState} from 'react'

function VariablesModal({
  isModalOpen,
  handleCloseModal
}) {
  const state = useStore(colors);
  const [isCopied, setIsCopied] = useState(false);

  const styles = {
    modalWrapper: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      minHeight: "50%",
      backgroundColor: "#333",
      padding: "2rem",
      borderRadius: "10px",
      color: "#f9f9f9",
      display: isModalOpen ? "flex" : "none",
    },
    content: {
      width: "100%"
    }
  }

  const code = `:root {
    /*Primary color*/
    --primary-color: ${state.primaryColor};

    /*Secondary color*/
    --secondary-color: ${state.secondaryColor};
    
    /*Background color*/
    --background-color: ${state.backgroundColor};
    
    /*Text color*/
    --text-color: ${state.textColor};

    /*Link color*/
    --link-color: ${state.linkColor};

    /*Button color*/
    --button-color: ${state.buttonBackgroundColor};

    /*Button text color*/
    --button-text-color: ${state.buttonTextColor};
  }`; 

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  }

  return (
    <div className="modal" role="dialog" style={styles.modalWrapper}>
      <div className="modal-inner">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Your design variables</h3>
          </div>
          <div className="modal-content" style={styles.content}>
              <p>Copy the design variables below</p>
              <SyntaxHighligter language="css">
                {code}
              </SyntaxHighligter>
          </div>
          <div className="modal-footer" style={{marginTop: "20px"}}>
            <button className="btn btn-primary" onClick={() => handleCopyCode()}>Copy</button>
            <span style={{paddingLeft: "10px"}}>
              {isCopied ? "Copied!" : ""}
            </span>
            <button className="btn btn-primary" onClick={() => handleCloseModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VariablesModal
