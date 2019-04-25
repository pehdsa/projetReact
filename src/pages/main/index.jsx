import React, { Component } from 'react'
import './styles.css'
import api from '../../services/api'

export default class Main extends Component {

    state = {
        products: []
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        
        this.setState({
            products: response.data.docs
        })
    }

    componentDidMount(){
        this.loadProducts()
    }

    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{ product.title }</h2>
                ))}
            </div>
        )
    }

}
