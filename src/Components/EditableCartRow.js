import React from 'react';


// this is named EditableCartRow but it is not in fact editable? Also it recalculates the totals that you already
// calculated in the calling class, and updates parents' state every time it is rendered...
const EditableCartRow = ({itemTotals, setItemTotals, item, screenWidth}) => {
    let total;

    // generally bad to have a `get` method that changes things
    function getTotal() {
        let price = (item.price).substring(1);
        Number(price);
        const itemMap = itemTotals;
        total = price * item.number;
        total = Math.round((total + Number.EPSILON) * 100) / 100;
        updateTotals(price);
    }

    function updateTotals(number) {
        let tempTotal = itemTotals;
        tempTotal[(item.name).replaceAll(' ', '-')] = total;
        setItemTotals(tempTotal);
    }
    getTotal();

    return <tr className="cart-item-container">
        <th className="cart-item__name"scope="row">
            {
                // I think the screen size handling can be better done in css than in code?
            }
       { screenWidth > 800 && <img className="card__image" alt="" src={require(`../assets/${item.img.src}`)}></img> }
            <span>{item.name}</span>
        </th>
        { screenWidth > 800 && <td className="cart-item__price">{item.price} each</td> }
        <td className="cart-item__number">{item.number}</td>
        { (total) ? <td className="cart-item__total">{total}</td> : <td className="cart-item__total">Calculating...</td> }
    </tr>
};

export default EditableCartRow;