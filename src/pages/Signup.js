import React, { useState } from 'react';
import Navv from './Navv';
import { Col, Container, Row,  Form, Button } from 'react-bootstrap';
import BlackCol from './BlackCol';
import axios from 'axios'
import {Formik,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'

export default function Signup() {
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Confirm, setConfirmpassword] = useState('');
  const [agreed, setAgreed] = useState(false);


  const postValue=()=>{
    axios.post(
      'https://666fc1bd0900b5f87248202e.mockapi.io/SignUp',
  {
      email,
      password,
      Confirm
  });
  console.log(email);
  console.log(password);
  console.log(Confirm);
  alert(email);
  };
  const togglePop = () => {
      setShowPop(!showPop);
    };
  
    const closePop = () => {
      setShowPop(false);
    };
    const [showPop, setShowPop] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>
              

              <Form>
                

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                
                </Form.Group>

                {}
                <Row>
                  <br/>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        value={Confirm}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </Form.Group>
                    <br/>
                  </Col>
                </Row>

                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label={
                      <span style={{ color: 'grey' }}>
                        By creating an account, I agree to{' '}
                        <u >
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </span>
                    }
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className='w-100 signup-btn' 
                  disabled={!agreed}
                  onClick={postValue}
                  style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
                >
                  Next
                </Button>
                <br/>
                <br/>
                <p className='text-center dont-have-account'>
                                Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
                            </p>
                
              </Form>
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
