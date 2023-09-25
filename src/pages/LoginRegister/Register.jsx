import React from 'react';
import './loginRegister.css'
function Register(props) {
    return (
        <div>
            <div className="register">
                <div className="rg_box1">
                    <div className="container">
                        <div className="rg_box1_1">
                            <div className="rg_text">
                                <h1 className='rg_h1'>
                                    NEW
                                </h1>
                                <h1 className='rg_h2'>ACCOUNT</h1>
                                <h1 className='rg_h3'>+1 BOOK</h1>
                                <h1 className='rg_h4'>FREE</h1>
                            </div>
                            <div className="rg_img">
                                <img src="http://www.theme-oxygen.com/envato/evobook/preview/html/images/slide-book1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rg_box2">
                    <div className="rg_back">

                    </div>
                    <div className="rg_form">
                        <h1 className='rg_form_h1'>New Account</h1>
                        <p className='rg_form_p'>Not our registered customer yet?</p>
                        <div className="rg_form_name">
                            REGISTER
                        </div>
                        <form className='inps'>
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Username' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Password' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Email' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Firs Name' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Last Name' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Gender' />
                            <div className="form_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                                </svg>
                            </div>
                            <input type="text" className='inp' placeholder='Address' />
                            <div></div>
                            <button className='rg_btn'>REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;