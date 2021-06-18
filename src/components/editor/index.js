import React from 'react'
import styled, { css } from 'styled-components'
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
          </div>
        );
      }
      return this.props.children;
    }  
  }
  

  
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
const TextEditorContainer =styled.textarea`
    outline: none;
    flex-basis: 50%;


background: #333;
box-shadow: inset 5px 5px 10px #5a5a5a,
            inset 0px 0px 10px #ffffff;
        color: white;
        padding: 10px 20px;
    `
const TextConsoleContainer =styled.div`
outline: none;
flex-basis: 50%;
background: #333;
box-shadow: inset 5px 5px 10px #5a5a5a,
        inset 0px 0px 10px #ffffff;
    color: white;
`
// function startEditing(text) {
    
    
// }
const RenderEditText = ({text})=> {
    const f = (state)=> {
        if (state) {
            try {
               const t= (()=> {
                    return eval(state)
                })()
                console.log("hire", t)
            }
            catch(e) {
                return e.toString()
            }
       
        }
        return "waiting...."
    }
    return <p>{JSON.stringify(f(text), null, 2)}</p>
}
function Editor() {
   const [state, setState]=React.useState("")
   const t=console.log("w")
    return (
        <div style={{display:"flex", height:"100vh", width:"100vw"}}>
            <TextEditorContainer onChange={(e)=>setState(e.target.value)} value={state}/>
            <TextConsoleContainer>
                    <RenderEditText text={state}/>
            </TextConsoleContainer>
        </div>
    )
}

export default Editor