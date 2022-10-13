import LetterA from '../images/branded-letter-a.svg';
import Sun from '../images/branded-sun.svg';
import AnimocaLogo from '../images/animoca-logo.svg';
import MotoGPLogo from '../images/moto-gp.svg';
import SandboxLogo from '../images/the-sandbox-logo.svg';
import Semicircle from '../images/semicricle.png';
import gsap from 'gsap';
import $ from 'jquery';
import { useRef, useEffect } from "react";


const Hero = () => {
    const overlayRef = useRef(null);

    useEffect(() => {
    const el = overlayRef.current;
    gsap.fromTo(el, 
        {

        }, 
        { 

        }
        )
    },[])

    return (
        <section>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <div className="hero-text-wrapper">
                        <h1 className="hero-header">
                            <span className="mix-blend">
                            The only NFT w
                            </span>
                            <span className="branded-a"><img alt="" src={LetterA}/></span>
                            <span className="mix-blend">
                            llet y
                            </span>
                            <span className="branded-sun"><img alt="" src={Sun}/></span>
                            <span className="mix-blend">
                            u need to evolve in the digit
                            </span>
                            <span className="branded-a"><img alt="" src={LetterA}/></span>
                            <span className="mix-blend">
                            l world
                            </span>
                        </h1>
                        <p className="hero-subhead">
                        An NFT-centric wallet for the curious ones. 
                        Experience the digital world like never before.
                        </p>
                    </div>
                    <div className="hero-logo-wrapper">
                        <img alt="" src={SandboxLogo} />
                        <img alt="" src={AnimocaLogo} />
                        <img alt="" src={MotoGPLogo} />
                    </div>
                </div>
                <div className="mix-blend-overlay" style={{ backgroundImage: `url(${Semicircle})`}}></div>
            </div>
        </section>
    )
}

export default Hero;