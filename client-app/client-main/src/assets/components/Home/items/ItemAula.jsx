import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import "./items.css";

const ItemAula = () => {
    return (
        <>
            <div className="item-container">
                <div className="icon"><FontAwesomeIcon icon={faBook} /></div>
            </div>
        </>
    )
}

export default ItemAula
