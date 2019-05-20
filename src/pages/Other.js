import React, {Component} from 'react';
import api from '../services/api';
import {Link} from "react-router-dom";

class Other extends Component {

    state = {
      products: [],
      productsInfo: {},
      page: 1
    };


    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) =>{
      const response = await api.get(`/products?page=${page}`);

      const { docs, ...productsInfo } = response.data;

      this.setState({products: docs, productsInfo, page});
    };

    prevPage = () => {

        const {page} = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);


    };

    nextPage = () => {

        const { page, productsInfo } = this.state;

        if ( page === productsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    };

    render() {
        const { products, page, productsInfo } = this.state;

        return (
            <div>
                <h1>Other Component</h1>
                <Link to="/">Go App</Link>
                <div>
                    <h3>Total de produtos: {products.length}</h3>
                    <ul>
                        {this.state.products.map(product =>(
                            //o react pede para após o map o primeiro elemento<tag> deve conter
                            // uma key com valor único
                            <li key={product._id}><Link to={`/other/${product._id}`}>{product.title}</Link></li>
                        ))}
                    </ul>
                    <button disabled={page === 1} onClick={this.prevPage} >Back</button>
                    <button disabled={page === productsInfo.pages} onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    }
}

export default Other;
