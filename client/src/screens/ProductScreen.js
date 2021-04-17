import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card,Form ,Button } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { listproductDetails } from '../actions/productAction';
 import Loader from '../components/Loader'
 
const ProductScreen = ({match,history}) => {

    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);
    
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product}=productDetails
    useEffect(() => {
        dispatch(listproductDetails(match.params.id))
        
    }, [match, dispatch]);
    
    const handleChange=() => {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    
    return (
        <>
           
            
            <Link className="'btn btn-light my-3" to='/'>
                Go back</Link>    
             
            {loading ? <Loader />
                : (
                      <Row>
                 
                    <Col md={6}>
                   <Col>
      <Image src={product.image} rounded fluid />
    </Col>
                </Col> 
              
                

                <Col className="" md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            {product.name}
                        </ListGroup.Item>
                         <ListGroup.Item>
                            {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup >
                            <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        < Col>
                                            <strong>{product.price}</strong>
                                        </Col>
                                    </Row>
                            </ListGroup.Item>
                                    
                            <ListGroup.Item>
                                <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock>0? 'in stock':'out of stock' }
                                </Col>
                                </Row>
                            </ListGroup.Item>
                                        
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                                <Form.Control
                                                    as='select'
                                                    onChange={e => setQty(e.target.value)}
                                                    value={qty}
                                                >
                                            
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x => 
                                                            
                                                            (<option value={x + 1} key={x + 1}>{x + 1}</option>)
                                                        )
                                                    }

                                        </Form.Control>
                                    </Col>
                                                        
                                </Row>
                                    </ListGroup.Item>
                                    


                                    <ListGroup.Item>
                                        <Button
                                        onClick={handleChange}
                                        className='btn-block'
                                        type='button'
                                        disabled={product.countInStock==0}    
                                        >
                                    Add to Cart
                                </Button>
                           </ListGroup.Item>
                                </ListGroup>
                                

                    </Card>
                            
                </Col>


            </Row>
                )
            
            
            }
          
        </>
    )
}

export default ProductScreen
