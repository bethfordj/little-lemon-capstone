import React, { useContext, useRef, useState } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import Modal from './Modal';


const AddToCart = (props) => {
    const content = {
        section: props.section,
        name: props.name
    }
    const key = content.section + "-" + (content.name).replaceAll(' ', '-') + "-btn";

    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef();
    const context = useContext(GlobalLoginContext);
    let componentContent;

    function handleClick() {
        let current = context.myCart;
        current.push(props.item);
        context.setMyCart(current);
        setIsOpen(true);
    }

    function defineComponentContent(){
        if(!isOpen) {
            componentContent = (
                <button onClick={() => {handleClick()}} ref={btnRef} className={`button link-button add-to-cart`}>{props.linkText}</button>
            );
        }
        else {
            componentContent = (
                <>
                    <button key={key} ref={btnRef}  className={`button link-button add-to-cart`}>{props.linkText}</button>
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen} content={content} lastFocus={btnRef} />
                </>
            );

        }
    }
    defineComponentContent();

    return <>{componentContent}</>
};

export default AddToCart;