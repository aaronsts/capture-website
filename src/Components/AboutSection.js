import React from 'react';
import {motion} from 'framer-motion';

// Images
import home1 from '../img/home1.png';

// Style
import {StyledSection, StyledDescription, StyledImage, StyledHide} from '../styles' // import styled components

const AboutSection = () => {

    return (
        <StyledSection>
            <StyledDescription>
                <motion.div>
                    {/* Seperate title into smaller chunks so you can animate them */}
                    <StyledHide>
                        <motion.h2 >
                            We work to make
                        </motion.h2>  {/* replace h2 tag with motion.h2 for framer-motion*/}
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 >
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 >
                            true.
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <p>
                    Contact us for any photography related ideas! We would love to hear it.
                </p>
                <button>Contact us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt='guy with camera'></img>
            </StyledImage>
        </StyledSection>
    );
};

export default AboutSection
