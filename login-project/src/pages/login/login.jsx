import React from "react";
import styles from './login.module.css';
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

export default function Login(){

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const inputName = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    async function loginUser(){
        try{
            
            await api.post('/api/auth/login', {
                email: inputEmail.current.value,
                password: inputPassword.current.value,
            });

            setModalMessage('Login made with success!');
            setIsSuccess(true);
            setShowModal(true);

        }catch(error){
            console.log(`An error occured: ${error}. Please try later`);
            setModalMessage('Error in login a user. Please try again.');
            setIsSuccess(false);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return(
        <div className={styles.siteBody}>
                    <div className={styles.mainCard} >
                        <div style={{ display: "flex", height:"20%" ,flexDirection: "column", gap: "10px" }}><p className={styles.registerTitle}>LOGIN</p>
                        <p className={styles.registerP} >Log in your account!</p>
                        </div>
                        <form className={styles.formCss} >
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" ref={inputEmail} required/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" ref={inputPassword} required/>
                        </form>
                        <button className={styles.submitButton} onClick={loginUser} >SUBMIT</button>
                        <Link className={styles.loginLink} to="/" >Don't have an account? Make one here.</Link>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modal}>
                                <div className={`${styles.modalHeader} ${isSuccess ? styles.success : styles.error}`}>
                                    <h3>{isSuccess ? 'Success' : 'Error'}</h3>
                                </div>
                                <div className={styles.modalBody}>
                                    <p>{modalMessage}</p>
                                </div>
                                <div className={styles.modalFooter}>
                                    <button className={styles.modalButton} onClick={closeModal}>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            
        </div>

     
    );
};