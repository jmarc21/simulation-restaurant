import React, { Component } from 'react';

                            //36E
export default function Details(props) {
    return (
        //38C 38D when you click edit it fills in the inputs to the previous values
        <div className='menuList'>
            <div className="name">
                <div className="detailName">Name</div>
                <input type="text" value={props.name} onChange={ e => props.inputName(e.target.value)} />
            </div>
            <div className="price">
                <div className="detailName">Price</div>
                <input type="text" value={props.price} onChange={ e => props.inputPrice(e.target.value)} />
            </div>
            <div className="text">
                <div className="detailName">Text</div>
                <textarea name="" id="" cols="30" rows="10" value={props.text} onChange={ e => props.inputText(e.target.value)} ></textarea>
            </div>
            <button className='addItemButton' onClick={() => props.addItem()} >Add Item</button>
        </div>
    )
}