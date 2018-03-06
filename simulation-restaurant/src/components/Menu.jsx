import React, { Component } from 'react';
import Details from './Details';
import axios from 'axios';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            details: false,
            itemName: '',
            itemPrice: 0,
            itemText: '',
            food: [],
        }
            //37C
        this.inputName = this.inputName.bind(this)
        this.inputPrice = this.inputPrice.bind(this)
        this.inputText = this.inputText.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    componentDidMount(){
        axios.get('/api/get-food').then(res => {
            console.log(res)
            this.setState({
                food: res.data
            })
        })
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
        let food = {
            name: this.state.itemName,
            price: this.state.itemPrice,
            text: this.state.itemText
        }
        axios.put('/api/add-food', food).then(res => {
            if(res.data === 'Item Added'){
                this.setState({
                    details: false
                })
            }
        })
    }  
    goToDetails(){
        this.setState({
            details: true
        })
    }

    render() {
        let food = this.state.food.map((e,i) => {
            return(
                <div key={i}>
                    <h1>{e.foodname}</h1>
                    <div>${e.foodprice}</div>
                    <div>{e.foodtext}</div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        })
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
                            {food}
                            <button onClick={() => this.goToDetails()}>Add Item</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
    }
}