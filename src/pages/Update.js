import Navv from './Navv';
import { Stack, Col, Container, Row, Image, Figure } from 'react-bootstrap';
import Apple from '../assets/apple-logo.png';
import Google from '../assets/google.png';
import Telegram from '../assets/telegram.png';
import Wallet from '../assets/wallet.png';
import BlackCol from './BlackCol';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Update() {

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setEmail(localStorage.getItem('Email'));
        setPassword(localStorage.getItem('Password'));
        
}, []);
const updateAPIData = () => {
    axios.put(`https://666fc1bd0900b5f87248202e.mockapi.io/login/${id}`, {
        email,
        password,
         
	})
}
    
    return (
        <div className='login-bdy'>
            <Navv />
            <Container>
                <Row className='d-flex flex-wrap'>
                    <Col xs={12} md={6} className='blk-col'>
                        <BlackCol />
                    </Col>
                    <Col xs={12} md={6} className='white-col'>
                        <div className='login-container'>
                            <h2>Log In</h2>
                            <Stack direction='horizontal' gap={3} className='mb-3'>

                                <p
                                    className="p-2"     >
                                    Email/Sub-account
                                </p>

                            </Stack>


                            <input
                                className='form-control mb-3'
                                type="text"
                                value={email}
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='form-control mb-3'
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <button 
                                    className='btn btn-primary w-100 mb-3 nxt-btn' 
                                    type='submit' onClick={updateAPIData}
                                    >
                                        Log In
                                        </button>



                            <p className='text-center dont-have-account'>
                                Don't have an account? <span className='signup-link' onClick={() => window.location.href = '/signup'}>Sign Up</span>
                            </p>
                            <br />

                            <p className='text-center or-continue-with'>
                                <span className='line'></span> or continue with <span className='line'></span>
                            </p>
                            <Stack direction='horizontal' gap={2} className='justify-content-center'>
                                <button className='btn round-btn'><Image src={Google} alt='Google' roundedCircle width={20} height={20} /> <Figure.Caption>Google</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Apple} alt='Apple' roundedCircle width={20} height={20} /><Figure.Caption>Apple</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Telegram} alt='Telegram' roundedCircle width={20} height={20} /><Figure.Caption>Telegram</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Wallet} alt='Wallet' roundedCircle width={20} height={20} /><Figure.Caption>Wallet</Figure.Caption></button>
                            </Stack>
                        </div>
                        <center><p className='recap'>This site is protected by Google reCAPTCHA to ensure you're not a bot <span><b>Learn More</b></span></p></center>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}