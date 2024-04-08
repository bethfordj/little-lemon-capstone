import { createContext } from 'react';
import { useState } from 'react';

const defaultValue = {
    name: "",
    isLoggedIn: false,
    bookings: [],
    cart: []
 }
export const GlobalLoginContext = createContext({defaultValue});

export const ContextWrapper = (props) => {
 const [ name, setName ] = useState(props.name);
 const [ loginState, setLoginState ] = useState(props.isLoggedIn);
 const [ myReservations, setMyReservations ] = useState(props.bookings);
 const [ myCart, setMyCart ] = useState(props.cart);
 
 return (
  <GlobalLoginContext.Provider value={{ name, setName, loginState, setLoginState, myReservations, setMyReservations, myCart, setMyCart }}>
   {props.children}
  </GlobalLoginContext.Provider>
 );
}