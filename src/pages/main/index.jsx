import React, { Component } from 'react'
import './styles.css'
import api from '../../services/api'

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        
        const { docs, ...productInfo } = response.data

        this.setState({
            products: docs,
            productInfo
        })
    }

    prevPage = () => {
        const { page } = this.state
        if(page === 1) return
        const pageNumber = page - 1
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state
        if(page === productInfo.pages) return
        const pageNumber = page + 1;
        this.loadProducts(pageNumber)
    }

    componentDidMount(){
        this.loadProducts()
    }

    render(){

        const { products } = this.state

        return (
            <div className="product-list">
                
                {products.map(product => (
                    <article key={product._id}>
                        <h3>{ product.title }</h3>
                        <p>{ product.description }</p>
                        <a href="aa">Acessar</a>
                    </article>                    
                ))}

                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </div>
                
            </div>
        )
    }

}
