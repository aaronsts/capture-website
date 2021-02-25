import React from 'react'
import home1 from '../img/home1.png'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    {/* Seperate title into smaller chunks so you can animate them */}
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                        your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photography related ideas! We would love to hear it.
                </p>
                <button>Contact us</button>
                <div className="image">
                    <img src={home1} alt='guy with camera'></img>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
