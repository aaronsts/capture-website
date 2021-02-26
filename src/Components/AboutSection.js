import React from 'react';

// Images
import home1 from '../img/home1.png';

// Style
import {StyledSection, StyledDescription, StyledImage, StyledHide} from '../styles' // import styled components

const AboutSection = () => {
    return (
        <StyledSection>
            <StyledDescription>
                <div className="title">
                    {/* Seperate title into smaller chunks so you can animate them */}
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                        your <span>dreams</span> come
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
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
