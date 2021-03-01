import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

// Animation
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, sliderAnim, sliderContainer} from '../animation';


const OurWork = () => {
    return (
        <StyledWork variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <motion.div variants={sliderContainer}>
            <StyledFrame1 variants={sliderAnim}></StyledFrame1>
            <StyledFrame2 variants={sliderAnim}></StyledFrame2>
            <StyledFrame3 variants={sliderAnim}></StyledFrame3>
            <StyledFrame4 variants={sliderAnim}></StyledFrame4>
            </motion.div>  
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyledHide>
                        <motion.img variants={photoAnim} src={athlete} alt='athlete'/>
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div  className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <StyledHide>
                        <motion.img variants={photoAnim} src={theracer} alt='racer'/>
                    </StyledHide>
                </Link>
            </StyledMovie><StyledMovie>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to='/work/good-times'>
                    <StyledHide>
                        <motion.img variants={photoAnim} src={goodtimes} alt='goodtimes'/>
                    </StyledHide>
                </Link>
            </StyledMovie>
            
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem; {/* Align container with navbar */}
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const StyledHide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const StyledFrame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const StyledFrame2 = styled(StyledFrame1)`
    background: #ff8ebf;
`
const StyledFrame3 = styled(StyledFrame1)`
    background: #8ed2ff;
`
const StyledFrame4 = styled(StyledFrame1)`
    background: #8effa0;
`

export default OurWork
