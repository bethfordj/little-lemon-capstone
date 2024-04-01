import { createContext } from 'react';
import { useState } from 'react';

const defaultValue = {
    name: "",
    isLoggedIn: false
 }
export const GlobalLoginContext = createContext({defaultValue});

export const ContextWrapper = (props) => {
 const [ name, setName ] = useState(props.name);
 const [ loginState, setLoginState ] = useState(props.isLoggedIn);
 
 return (
  <GlobalLoginContext.Provider value={{ name, setName, loginState, setLoginState }}>
   {props.children}
  </GlobalLoginContext.Provider>
 );
}