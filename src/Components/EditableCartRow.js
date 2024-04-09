import React from 'react';



const EditableCartRow = ({itemTotals, setItemTotals, item}) => {
    let total;

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
        <img className="card__image" alt="" src={require(`../assets/${item.img.src}`)}></img>
            <span>{item.name}</span>
        </th>
        <td className="cart-item__price">{item.price} each</td>
        <td className="cart-item__number">{item.number}</td>
        { (total) ? <td className="cart-item__total">{total}</td> : <td className="cart-item__total">Calculating...</td> }
    </tr>
};

export default EditableCartRow;