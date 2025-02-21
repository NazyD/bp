import React from 'react';
import '../styles/styles.scss';
import { FaInstagram, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Kontakty</h2>
            <div className="contact-list">
                <div className="contact-item">
                    <FaInstagram className="contact-icon"/>
                    <a href="https://www.instagram.com/nazar_dovzanin/?hl=cs" target="_blank"
                       className="contact-link">
                        instagram
                    </a>
                </div>

                <div className="contact-item">
                    <FaEnvelope className="contact-icon"/>
                    <a href="mailto:dovzanynn@gmail.com" className="contact-link" target="_blank" rel="noopener">
                        dovzanynn@gmail.com
                    </a>
                </div>

                <div className="contact-item">
                    <FaLinkedin className="contact-icon"/>
                    <a href="" target="_blank" rel="noopener noreferrer"
                       className="contact-link">
                        N/A
                    </a>
                </div>

                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon"/>
                    <span className="contact-link">Hradec Králové, Česká republika</span>
                </div>
            </div>
        </div>
    );

};

export default Contact;