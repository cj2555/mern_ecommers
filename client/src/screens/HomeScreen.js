import React,{useEffect} from 'react'
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
 import Loader from '../components/Loader'
import { listProducts } from '../actions/productAction.js'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

const HomeScreen = () => {
    
  const productList = useSelector((state) => state.productList)
  const { loading, products,error } = productList

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(listProducts())
         
        },[dispatch])
        
       

     
    return (
    <>
            <h1>Latest products</h1>
            {loading ? (<Loader />
            ): error ? (<Message variant='danger'>{error}</Message>)
            : (
                 <Row>
                {products.map((product,idx) => (
                <Col key={idx}>
                    <Product product={product}/>
                </Col>
                ))}
               
      </Row>
            )  }
           
     </>   
    )
}

export default HomeScreen
