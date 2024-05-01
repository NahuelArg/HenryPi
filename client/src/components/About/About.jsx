import React from 'react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <h2 className={style.aboutTitle}>About Me</h2>
            <div className={style.aboutContainer}>
                <p>¡Hola! Soy Nahuel Argañaraz, un apasionado de la programación y la tecnología.</p>
                <p>¡No dudes en contactarme!</p>
                <div>
                    <a className= {style.contactlink} href="https://www.linkedin.com/in/nahuel-arga%C3%B1araz/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className= {style.linkedin}/> LinkedIn
                    </a>
                </div>
                <div>
                    <a className= {style.contactlink} href="https://wa.me/2616124150" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className= {style.whatsapp} /> WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;