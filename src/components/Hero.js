import LetterA from '../images/branded-letter-a.svg';
import LetterI from '../images/bouncing-i.svg';
import Sun from '../images/branded-sun.svg';
import AnimocaLogo from '../images/animoca-logo.svg';
import MotoGPLogo from '../images/moto-gp.svg';
import SandboxLogo from '../images/the-sandbox-logo.svg';
import Semicircle from '../images/GryfynSemiCircle.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const overlayRef = useRef(null);

    useEffect(() => {

    },[])

    return (
        <>
        <section className="hero-section">
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
                            <span className="branded-sun"><img className="rotating" alt="" src={Sun}/></span>
                            <span className="mix-blend">
                            u need to evolve 
                            </span>
                            <br></br>
                            <span className="branded-i"><img className="anim-world-beyond-o" alt="" src={LetterI}/>
                            <span className="mix-blend">i</span>
                            </span>
                            <span className="mix-blend">
                            n the d
                            </span>
                            
                            <span className="branded-i"><img className="anim-world-beyond-o" alt="" src={LetterI}/>
                            <span className="mix-blend">i</span>
                            </span>
                            <span className="mix-blend">
                            g
                            </span>
                            <span className="branded-i"><img className="anim-world-beyond-o" alt="" src={LetterI}/>
                            <span className="mix-blend">i</span>
                            </span>
                            <span className="mix-blend">
                            t
                            </span>
                            <span className="branded-a"><img alt="" src={LetterA}/></span>
                            <span className="mix-blend">
                            l world
                            </span>
                        </h1>
                        <p className="hero-subhead mix-blend">
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
                <div className="mix-blend-overlay" id='mix-blend-overlay' style={{ backgroundImage: `url(${Semicircle})`}} ref={overlayRef}></div>
            </div>
        </section>
        </>
    )
}

export default Hero;