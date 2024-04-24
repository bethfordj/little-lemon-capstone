import React, { forwardRef, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



const Modal = ({isOpen,setIsOpen,content,lastFocus}) => {
    const location = useLocation();
    // const path = location.pathname;
    // console.log("path -> ",path);
    console.log("location -> ",location);

    const key = content.section + "-" + (content.name).replaceAll(' ', '-') + "-modal";

    const goTo = useNavigate();
    const modalRef = useRef();

    function toggleModal() {
        if(isOpen) {
            setIsOpen(false);
            // did you want to finish this up? I thought using a reference in the caller seemed a little weird. you usually only need those when interacting with non-react components/frameworks.
            // you might expose something more like an "onClose()" in the properties instead that would pass control back to the caller
            /* the ref did not pass to the child component successfully - since not a req, explore later */
            //lastFocus.focus();
        }
        else {
            setIsOpen(true);
            modalRef.focus();
        }
    }

    let modalContent = (<></>);

    // As implemented this is very much an "ItemAddedModal" not a general reusable "Modal"
    function defineContent() {
        if(isOpen) {
            modalContent = (
                <dialog ref={modalRef} key={key} className="modal">
                    <div className="modal__background-box">
                        <h3 className="modal__title">Added to cart!</h3>
                        <p className="modal__message">You added {content.name} to your cart. What would you like to do next?</p>
                        <div className="modal__button-row">
                            <button onClick={() => {goTo("/order-online/my-cart", { replace: true })}} className={`modal__go-to-cart button`}>Go to Cart</button>
                            { (location.pathname == "/" ) && <button onClick={() => {goTo("/order-online", { replace: true })}} className={`modal__go-to-online-store button`}>Go to the Full Online Menu</button>}
                            <button onClick={() => {toggleModal()}} aria-label="Close dialog" className={`modal__close button`}>Go Back to Page</button>
                        </div>
                    </div>
                </dialog>
            );
    
        }
    }
    defineContent();

    return <>{modalContent}</>;
};

export default Modal;