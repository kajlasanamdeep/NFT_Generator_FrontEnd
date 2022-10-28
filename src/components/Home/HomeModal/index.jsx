import React from 'react';
import style from './HomeModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Modal } from 'react-bootstrap';
import { openLogin, openSignup, closeModal } from '../../../redux/slices/modalSlice';
import LoginForm from './Login';
import SignupForm from './Signup';
function HomeModal() {
    const { show, showLogin, showSignup } = useSelector((state) => state.Modal);
    const dispatch = useDispatch();
    const loginClickHandler = () => {
        dispatch(openLogin());
    }
    const signupClickHandler = () => {
        dispatch(openSignup());
    }
    return (
        <Modal size='xl' centered show={show} onHide={() => dispatch(closeModal())}>
            <Modal.Body>
                <Row className={`${style.Content}`}>
                    <Col lg='6' className={`${style.leftContent}`}>
                        {
                            showLogin ? <LoginForm /> : <SignupForm />
                        }
                    </Col>
                    <Col lg='6' className={`${style.rightContent}`}>
                        <h3 className={style.rightContentHeading}>Glad to see you</h3>
                        {
                            showSignup ?
                                <React.Fragment>
                                    <h4 className={style.rightContentText}>
                                        Already have an account ? Login your account , it takes less
                                        than a minute
                                    </h4>
                                    <button onClick={loginClickHandler} className={style.button}>
                                        Login
                                    </button>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <h4 className={style.rightContentText}>
                                        Don't have an account ? Create your account , it takes less
                                        than a minute
                                    </h4>
                                    <button onClick={signupClickHandler} className={style.button}>
                                        Sign up
                                    </button>
                                </React.Fragment>
                        }
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default HomeModal