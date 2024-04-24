import { createContext } from 'react';
import { useState } from 'react';

const defaultValue = {
    name: "",
    isLoggedIn: false,
    bookings: [],
    cart: []
 }
export const GlobalLoginContext = createContext({defaultValue});

// interesting, was this your design or theirs to push state *all* the way up to globals?
// The login state here makes perfect sense, but the reservations & cart seem more local?
// for the scale of the project it's not a big deal but it doesn't scale this directly -- when you
// add a reservation, for example, I'm pretty sure everything dependent on this context is going to re-render

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