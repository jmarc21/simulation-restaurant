import React, { Component } from 'react';
import Details from './Details';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            details: true,
            itemName: '',
            itemPrice: 0,
            itemText: '',
        }
            //37C
        this.inputName = this.inputName.bind(this)
        this.inputPrice = this.inputPrice.bind(this)
        this.inputText = this.inputText.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    inputName(val){
        this.setState({
            itemName: val
        })
    }
    inputPrice(val){
        this.setState({
            itemPrice: val
        })
    }
    inputText(val){
        this.setState({
            itemText: val
        })
    }
    addItem(){
        console.log(this.state.itemName, this.state.itemPrice, this.state.itemText)

    }
    render() {
        return (
            <div className='menuBody'>
                <div className='blackOpac'>
                    <div className="menuContents">
                        {this.state.details === true ?
                        // 36H
                        <Details
                            inputName={this.inputName}
                            inputPrice={this.inputPrice}
                            inputText={this.inputText}
                            addItem={this.addItem}
                        />
                         :
                        <div className="menuList">

                        </div>
                    }
                    </div>
                </div>
            </div>
        )
    }
}