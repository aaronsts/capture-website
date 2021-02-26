import React from 'react'

import styled from 'styled-components';
import {StyledSection, StyledDescription, StyledImage, StyledHide} from '../styles'

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I Start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, officia.
                    </p>
                    <div className="faq-line"></div>
                </div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, officia.
                    </p>
                    <div className="faq-line"></div>
                </div>
            </div>
            <div className="question">
                <h4>Payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, officia.
                    </p>
                    <div className="faq-line"></div>
                </div>
            </div><div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, officia.
                    </p>
                    <div className="faq-line"></div>
                </div>
            </div>
        </StyledFaq>
    )
};

const StyledFaq = styled(StyledSection)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection
