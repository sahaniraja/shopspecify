import React from 'react';
import { Container,Row,Col,Image, Card, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import signin from '../../assets/images/inner-page/signin.png';
import google from '../../assets/images/inner-page/google.png';
import facebook from '../../assets/images/inner-page/facebook.png';

const SignIn = () => {
  return (
    <>
        {/* <!-- log in section start --> */}
        <section class="log-in-section background-image-2 section-b-space">
            <div class="container-fluid-lg w-100">
                <div class="row">
                    <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div class="image-contain">
                            <img src={signin} class="img-fluid" alt="" />
                        </div>
                    </div>

                    <div class="col-xxl-4 col-xl-5 col-lg-6 me-auto">
                        <div class="log-in-box">
                            <div class="log-in-title">
                                <h3>Welcome To ShopSpecify</h3>
                                <h4>Sign In Your Account</h4>
                            </div>

                            <div class="input-box">
                                <form class="row g-4">
                                    <div class="col-12">
                                        <div class="form-floating theme-form-floating log-in-form">
                                            <input type="email" class="form-control" id="email" placeholder="Email Address" />
                                            <label for="email">Email Address</label>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-floating theme-form-floating log-in-form">
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Password" />
                                            <label for="password">Password</label>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="forgot-box">
                                            <div class="form-check ps-0 m-0 remember-box">
                                                <input class="checkbox_animated check-box" type="checkbox"
                                                    id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                                            </div>
                                            <a href="/forgot-pswd" class="forgot-password">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <button class="btn btn-animation w-100 justify-content-center" type="submit">Log
                                            In</button>
                                    </div>
                                </form>
                            </div>

                            <div class="other-log-in">
                                <h6>or</h6>
                            </div>

                            <div class="log-in-button">
                                <ul>
                                    <li>
                                        <a href="https://www.google.com/" class="btn google-button w-100">
                                            <img src={google} 
                                                alt="" /> Log In with Google
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" class="btn google-button w-100">
                                            <img src={facebook}
                                                alt="" /> Log In with Facebook
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="other-log-in">
                                <h6></h6>
                            </div>

                            <div class="sign-up-box">
                                <h4>Don't have an account?</h4>
                                <a href="/">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- log in section end --> */}
    </>
  )
}

export default SignIn