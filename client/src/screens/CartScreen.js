  
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartAction'




const CartScreen = ({match,location,history}) => {
    
    const dispatch = useDispatch()
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split("=")[1]) : 1

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(typeof cartItems);
    
    
  
    
    useEffect(() => {
        
        if (productId) {
            dispatch(addToCart( productId,qty))
            }
        

    }, [dispatch,qty,productId]);


    return (
        <Row>
            <Col md={8}>
                <h1>shopping cart</h1>
                {cartItems.length === 0 ?
                    (<Message>
                        your cart is empty <Link to='./'>go back</Link>
                    </Message>) :
                    (
                        <ListGroup valiant='flush'>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>

                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>

                                        </Col>
                                        <Col> ${item.price}</Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )
            }
            </Col>
        </Row>
    )
}

export default CartScreen
