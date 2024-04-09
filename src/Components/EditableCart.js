import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalLoginContext } from './GlobalStateContext';
import { Link } from 'react-router-dom';
import EditableCartRow from './EditableCartRow';


const EditableCart = () => {
	const [total, setTotal] = useState(0);
    const [itemObj, setItemObj] = useState({});
    const [itemTotals, setItemTotals] = useState({});
    const context = useContext(GlobalLoginContext);

    function assembleOrder() {
        var object = {};
        let current = context.myCart;
        console.log("current in assemble -> ",current);
        for (let i=0; i < current.length; i++) {
            let id = (current[i].name).replaceAll(' ', '-');
            if(object[id]) {
                let item = object[(id)];
                console.log("item - > ",item);
                console.log("item.name -> ",item.name);
                item.number = item.number + 1;
                object[id] = item;
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
        let currentTotals = itemTotals;
        let runningTotal = 0;
        Object.keys(currentTotals).map((key) => { runningTotal = runningTotal + currentTotals[key] });
        console.log("running total -> ",runningTotal);
        setTotal(runningTotal);
    }
    useEffect(() => {
        assembleOrder();
        updateTotal();
      }, [itemTotals]);

    

    return <>{(Object.keys(itemObj).length > 0) ? (<>
    <table className="cart-table">
            <thead>
                <tr className="cart-table__header-row">
                    <th className="cart-table__column-title" scope="col">Dish</th>
                    <th className="cart-table__column-title" scope="col">Price for One</th>
                    <th className="cart-table__column-title" scope="col">Number Added</th>
                    <th className="cart-table__column-title" scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(itemObj).map( (key) => {return <EditableCartRow itemTotals={itemTotals} setItemTotals={setItemTotals} item={itemObj[key]} />})}
            </tbody>
            
        </table>
        { (total != 0) ? <p className="cart__total">Total: ${total}</p> : <p className="cart__total">Calculating total...</p> }
        </>)
        : <p className="no-results">Your cart is empty. Go to <Link to={"/order-online"}>Order Online</Link> to add something tasty!</p>
        }
        </>
};

export default EditableCart;