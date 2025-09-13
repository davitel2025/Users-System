import React from "react";
import styles from './home.module.css';
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

export default function Home() {

    let [users, setUsers] = useState([]); //get the user's data
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const inputName = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    async function getUsers(){
        try{
            const usersFromApi = await api.get('/api/auth/users');
            setUsers(usersFromApi.data);
            console.log(usersFromApi);
        }catch(error){
            console.log(`An error occured: ${error}. Please try later`);
        }
    }

    async function createUsers(){
        try{
            
            await api.post('/api/auth/register', {
                username: inputName.current.value,
                email: inputEmail.current.value,
                password: inputPassword.current.value,
            });

            setModalMessage('Register updated with success!');
            setIsSuccess(true);
            setShowModal(true);

        }catch(error){
            console.log(`An error occured: ${error}. Please try later`);
            setModalMessage('Error in register a new user. Please try again.');
            setIsSuccess(false);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(()=>{ // make the function getUsers only after the page is updated
        getUsers();
        console.log(users);
    }, []);

    return(
        <div className={styles.siteBody}>
                    <div className={styles.mainCard} >
                        <div style={{ display: "flex", height:"20%" ,flexDirection: "column", gap: "10px" }}><p className={styles.registerTitle}>REGISTER</p>
                        <p className={styles.registerP} >Make here your account!</p>
                        </div>
                        <form className={styles.formCss} >
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" ref={inputName} required />
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" ref={inputEmail} required/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" ref={inputPassword} required/>
                        </form>
                        <button className={styles.submitButton} onClick={createUsers} >SUBMIT</button>
                        <Link className={styles.loginLink} to="/login" >Already have an account? Login here.</Link>
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