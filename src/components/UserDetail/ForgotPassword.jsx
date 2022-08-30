import React from 'react';
import forgot from '../../assets/images/inner-page/forgot.png';

const ForgotPassword = () => {
  return (
    <>
    {/* <!-- log in section start --> */}
    <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
            <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div className="image-contain">
                        <img src={forgot} className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>Welcome To ShopSpecify</h3>
                                <h4>Forgot your password</h4>
                            </div>

                            <div className="input-box">
                                <form className="row g-4">
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Email Address"/>
                                            <label for="email">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-animation w-100" type="submit">Forgot
                                            Password</button>
                                    </div>
                                </form>
                            </div>
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

export default ForgotPassword