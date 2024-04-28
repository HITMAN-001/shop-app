import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import { fetchProducts, setProducts } from '../redux/actions/productActions';

function ProductListing(props) {
    const data = useSelector(state => state.allProducts)
    const dispatch=useDispatch()

    // const loadProducts = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //      dispatch(setProducts(response.data))
    // }


    useEffect(() => {
        //loadProducts()
        dispatch(fetchProducts());
    }, [])
console.log(data);

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;