import React, { type ReactHTMLElement, type ReactNode } from 'react';

export  const Modal = ({
    children,
    // onClick,
    onClose
}:{
    children:ReactNode,
    // onClick:()=>void|undefined,
    onClose:()=>void
}) => {



    return (
        <div className='modal'  >
            <div className="modal_cnt">
                <div className="modal_head">
                    <button onClick={onClose} className="modal_btn">X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

