import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalLoginContext } from './GlobalStateContext';
import { Link } from 'react-router-dom';
import EditableCartRow from './EditableCartRow';


const EditableCart = () => {
	const [total, setTotal] = useState(0);

  // Sorry, some of the comments got written in reverse order.
    // any time you have multiple collections of objects that are connected to each other by keys, it's kind of a code smell
    // I would refactor this to have an order, which has a list of Items which each have their properties (maybe another object)
    // and a count. Then you would just iterate over the items in the order for each row and pass the relevant Item only
    // to the editable cart row, along with callback methods for when the row was updated.
    // Then you could use useMemo to recalculte the total order value.

    const [itemObj, setItemObj] = useState({});
    const [itemTotals, setItemTotals] = useState({});
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const context = useContext(GlobalLoginContext);

    useEffect(() => {
		const handleResize = () => {
		  setScreenWidth(window.innerWidth);
		}
	
		window.addEventListener('resize', handleResize);;
		return () => { window.removeEventListener('resize', handleResize); };
	}, [])

    function assembleOrder() {
        var object = {};
        let current = context.myCart;
        console.log("current in assemble -> ",current);
        for (let i=0; i < current.length; i++) {
            let id = (current[i].name).replaceAll(' ', '-');
            // object is a really generic name here... what is object?
            // it sounds as though it is an order?
            if(object[id]) {
                let item = object[(id)];
                console.log("item - > ",item);
                console.log("item.name -> ",item.name);
                item.number = item.number + 1;
                object[id] = item; // unnecessary, you were already modifying the underlying object
            }
            else {
                current[i].number = 1;
                object[id] = current[i];
            }
        }
        console.log("Obj -> ",JSON.stringify(object))
        setItemObj(object);
    }
    function updateTotal() {
        // look into useMemo instead of keeping separate state for the running total https://react.dev/reference/react/useMemo
        let currentTotals = itemTotals; // this local redefinition is unnecessary
        let runningTotal = 0;
        Object.keys(currentTotals).map((key) => { runningTotal = runningTotal + currentTotals[key] });
        console.log("running total -> ",runningTotal);
        setTotal(runningTotal);
    }
    useEffect(() => {
        // actually, you might use useMemo for assembleOrder as well.
        assembleOrder();
        updateTotal();
      }, [itemTotals]);

    

    return <>{(Object.keys(itemObj).length > 0) ? (<>
    <table className="cart-table">
            <thead>
                <tr className="cart-table__header-row">
                    <th className="cart-table__column-title" scope="col">Dish</th>
                    { screenWidth > 800 && <th className="cart-table__column-title" scope="col">Price for One</th> }
                    <th className="cart-table__column-title" scope="col">Number Added</th>
                    <th className="cart-table__column-title" scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(itemObj).map( (key) => {return <EditableCartRow itemTotals={itemTotals} setItemTotals={setItemTotals} screenWidth={screenWidth} item={itemObj[key]} />})}
            </tbody>
            
        </table>
        { (total != 0) ? <p className="cart__total">Total: ${total}</p> : <p className="cart__total">Calculating total...</p> }
        </>)
        : <p className="no-results">Your cart is empty. Go to <Link to={"/order-online"}>Order Online</Link> to add something tasty!</p>
        }
        </>
};

export default EditableCart;