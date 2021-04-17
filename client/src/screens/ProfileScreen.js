import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userAction'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstant'


const ProfileScreen = ({ location, history }) => {
    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    
    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name) {

                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch,history,userInfo,user]);

    return (
      
        <Row>
            <Col md={3}> name: <h2>{user.name}</h2> </Col>
            <Col> email<h2>{user.email }</h2></Col>
        </Row>
 
      
   
  )
    
}

export default ProfileScreen
