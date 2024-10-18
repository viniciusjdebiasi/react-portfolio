import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './Contact.module.css';
import enviar from '../../../public/assets/enviar.png';

export default function ContactPage({ language }) {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const [name, setName] = useState('')
    const [messageD, setMessageD] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const iconError = <> <svg width="28" height="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="m17.25 6.75-10.5 10.5"></path> <path d="m6.75 6.75 10.5 10.5"></path> </svg> </>
    const iconRight = <> <svg width="28" height="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="m5.75 12.867 2.59 3.547a2 2 0 0 0 3.26-.043l6.65-9.621"></path> </svg> </>

    const [state, handleSubmit] = useForm("xwpejbak");
    const [formDisabled, setFormDisabled] = useState(false);

    const ReceiveName = (name) => { setName(name) }
    const ReceiveMessageD = (messageD) => { setMessageD(messageD) }
    const ReceiveEmail = (email) => { setEmail(email) }
    const ReceivePhone = (phone) => { setPhone(phone) }

    const CheckValues = (event) => {

        event.preventDefault();

        if (!name) { setMessage( <>{language('messageName')} {iconError} </> ) }
        else if (!email) { setMessage( <> {language('messageEmail')} {iconError} </> ) }
        else if (!phone) { setMessage( <> {language('messagePhone')} {iconError} </> ) }
        else if (!messageD) { setMessage( <> {language('messageDescription')} {iconError} </> ) }
        else {
            setMessage( <> {language('messageAllRight')} {iconRight} </> )
            handleSubmit(event)
            setFormDisabled(true);
        }
    }


    return (
        <div className={styles.main} id='contact'data-aos='fade-right'>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.page_title}> {language('titleContact')} </h2>
                    </div>
                    <form className={styles.inputs_form} onSubmit={CheckValues} >
                        <p> {language('contactPhrase')} </p>
                        <br />
                        <p> {language('fullName')} </p>
                        <input className={styles.inputs} id="name" type="text" name="name" placeholder={language('typeName')} onChange={(event) => ReceiveName(event.target.value)} disabled={formDisabled} />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />

                        <label htmlFor="email"> {language('typeEmail')} </label>
                        <input className={styles.inputs} id="email" type="email" name="email" placeholder={language('typeEmail')} onChange={(event) => ReceiveEmail(event.target.value)} disabled={formDisabled} />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <label htmlFor="tel"> {language('phoneContact')} </label>
                        <input className={styles.inputs} id="tel" type="phone" name="tel" placeholder='(__)__________' onChange={(event) => ReceivePhone(event.target.value)} disabled={formDisabled} />
                        <ValidationError prefix="Tel" field="tel" errors={state.errors} />

                        <p> {language('descriptionContact')} </p>
                        <textarea id="message" name="message" className={styles.text_form} onChange={(event) => ReceiveMessageD(event.target.value)} disabled={formDisabled} /> <br />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button className={styles.button_page} type="submit" > {language('sendButton')} &nbsp;&nbsp;&nbsp; <Image src={enviar} /></button>

                        <h3 className={styles.message} > {message} </h3>
                    </form>
                </div>
            </div>
        </div>
    )
}