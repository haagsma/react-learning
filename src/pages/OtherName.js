import React, {Component} from 'react';
import api from '../services/api';

import {Link} from 'react-router-dom';

class OtherName extends Component {

    state = {
        product: {}
    };

    async componentDidMount() {
        const response = await api.get(`/products/${this.props.match.params.id}`);
        this.setState({product: response.data});
    }

    render() {
        const {product} = this.state;

        return (
            <div>
                <h1>{product.title}</h1>
                <p><small>{product.createdAt}</small></p>
                <p>{product.description}</p>
                <p><a href={product.url} target="_blank">{product.url}</a></p>
                <Link to="/" >Go Back</Link>

            </div>
        );
    }
}

export default OtherName;
