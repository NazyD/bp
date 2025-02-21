import React from 'react';
import styled from "@emotion/styled";
import { FaInstagram, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s ease, color 0.5s ease;
    h2{
        font-size: 32px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.textColor}; 
    }
`;

const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    background-color: ${({ theme }) => theme.shortArticleBg};
    padding: 15px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.shortArticleBgHover};
    }
`;

const ContactIcon = styled.div`
    font-size: 24px;
    color: ${({ theme }) => theme.textColor};
`;

const ContactLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
    transition: color 0.3s ease;
    &:hover{
        color: ${({ theme }) => theme.textColor};
    }
`;

const Contact = () => {

    return (
        <ContactContainer>
            <h2>Kontakty</h2>
            <ContactList>
                <ContactItem>
                    <ContactIcon><FaInstagram/></ContactIcon>
                    <ContactLink href="https://www.instagram.com/nazar_dovzanin/?hl=cs"
                                 target="_blank"
                                 rel="noopener">
                        instagram
                    </ContactLink>
                </ContactItem>

                <ContactItem>
                    <FaEnvelope className="contact-icon"/>
                    <ContactLink href="mailto:dovzanynn@gmail.com"
                                 target="_blank"
                                 rel="noopener">
                        dovzanynn@gmail.com
                    </ContactLink>
                </ContactItem>

                <ContactItem>
                    <FaLinkedin className="contact-icon"/>
                    <ContactLink href=""
                                 target="_blank"
                                 rel="noopener noreferrer">
                        N/A
                    </ContactLink>
                </ContactItem>

                <ContactItem>
                    <FaMapMarkerAlt className="contact-icon"/>
                    <ContactLink>Hradec Králové, Česká republika</ContactLink>
                </ContactItem>
            </ContactList>
        </ContactContainer>
    );

};

export default Contact;