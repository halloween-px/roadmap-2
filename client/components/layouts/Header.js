import Link from "next/link";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from "../modals/autoarization/Login";
import Reg from "../modals/autoarization/Reg";
import Forgot from "../modals/autoarization/Forgot";

const Header = ({ darkHeader }) => {
    const [modalForm, setModalForm] = useState('login');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nav = [
        { id: 1, nav: 'О нас', link: '/about' },
        { id: 2, nav: 'Пользователи', link: '/users' },
        { id: 3, nav: 'Услуги', link: '/services' },
        { id: 4, nav: 'Каталог', link: '/catalog' },
        { id: 5, nav: 'Контакты', link: '/contacts' }
    ]
    return (
        <div className={`vg-header ${darkHeader ? 'page-header' : ''}`}>
            <div className='vg-header-wrapper'>
                <div className="vg-header-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-auto">
                                <h4 className="logo-area">
                                    <Link href={'/'}><a>Альянс <span>групп</span></a></Link>
                                </h4>
                            </div>
                            <div className="col-auto order-xl-2 order-3">
                                <nav className="vg-nav">
                                    <ul className="vg-nav-main-container d-flex justify-content-center">
                                        {nav.map(item => (
                                            <li className="" key={item.id}>
                                                <Link href={item.link}><a>{item.nav}</a></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-auto ms-xl-0 ms-auto order-xl-3 order-2">
                                <Button href="#" className="link-authorization" onClick={handleShow}><i className="fa-solid fa-user"></i></Button>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <div className="modal-dialog modal-dialog-centered modal-xl" id="modal-user">
                                    <div className="modal-content">
                                        <div className="modal-close-block" />
                                        <div className="account-auth">
                                            <div className="row">
                                                <div className="col-lg-5 image-area">
                                                    <img src="img/kartinki/image1.jpg" alt="auth" className="img-fluid" />
                                                </div>
                                                <div className="col-lg-7 auth-area">
                                                    {modalForm === 'reg' && <Reg />}
                                                    {modalForm === 'login' && <Login
                                                        openReg={() => { setModalForm('reg') }}
                                                        openForgot={() => { setModalForm('forgot') }} />
                                                    }
                                                    {modalForm === 'forgot' && <Forgot />}

                                                    <p className="text-center">
                                                        <small>Авторизуясь на сайте, вы даете <br /> <a href="#">согласие на обработку своих персональных данных.</a></small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;