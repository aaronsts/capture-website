import React from 'react';
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnim} from '../animation'


// Images
import home1 from '../img/home1.png';
import Wave from './Wave';

// Style
import {StyledSection, StyledDescription, StyledImage, StyledHide} from '../styles' // import styled components

const AboutSection = () => {

    return (
        <StyledSection>
            <StyledDescription>
                <motion.div>
                    {/* Seperate title into smaller chunks so you can animate them */}
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>  {/* replace h2 tag with motion.h2 for framer-motion*/}
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            true.
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography related ideas! We would love to hear it.
                </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnim} src={home1} alt='guy with camera'></motion.img>
            </StyledImage>
            <Wave />
        </StyledSection>
    );
};


export default AboutSection
