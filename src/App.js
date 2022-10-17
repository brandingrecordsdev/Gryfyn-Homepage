// import logo from './logo.svg';
import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Nav from './components/Nav';
import Hero from './components/Hero';
import SVG from './components/SVG'
import Carousel from './components/Carousel'
import VideoScroll from './components/VideoScroll'
import NFTvideo from './components/NFTvideo';
import vidGallery from './videos/out.mp4';
import SunVideo from './videos/gryfyn_sun_mobile.mp4';
import EyeVideo from './videos/gryfyn_eye_mobile.mp4';
import DiamondVideo from './videos/gryfyn_diamond_MOBILE.mp4';
import PhantomLogo from "./images/phantom_logo.png";
import DustLandLogo from "./images/dustland_logo.png";
import RevvRacingLogo from "./images/revv_racing_logo.png";
import SandboxLogo from "./images/the-sandbox-logo 2.png";

import Banner from './images/banner.png';
import Banner2 from './images/banner.png';
import MotoGPGraphic from './images/MotoGPBanner.png';
import { useEffect } from 'react';
import initGSAPVideo from './components/initGSAPVideo'


gsap.registerPlugin(ScrollTrigger);

const initVideoScrollGsap = (id, pinnedSection) => {
  const el = document.getElementById(id);
  let video = el;
  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }
  // once(document.documentElement, "touchstart", function (e) {
  //   video.play();
  //   video.pause();
  // });
  /* ---------------------------------- */
  /* Scroll Control! */
  let vidTL = gsap.timeline({
    // defaults: { duration: 2 },
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      start: "top top",
      end: "+=2000",
      scrub: 3,
      markers: {startColor: "white", endColor: "purple", fontSize: "14px"},
    }
  });
  console.log(vidTL)
  once(video, "loadedmetadata", () => {
    vidTL.fromTo(
      video,
      {
        currentTime: 0
      },
      {
        currentTime: video.duration || 1
      }
    );
  });  
}

const initHeroGsap = () => {
  const el = document.getElementById('mix-blend-overlay')
  let tl = gsap.timeline({    
      // defaults: { duration: 100, delay:  },
      scrollTrigger: {
        trigger: '.hero-section',
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        duration: 5,
        markers: true,
        toggleActions: "restart pause resume pause"
      }
    });

      tl.fromTo(el, 
      {
          y: 0,
          scale: 1,
      }, 
      { 
          y: '-100vh',
          scale: 2,
          // duration: 2
      }
      )  
}

const initMotoGPGsap = () => {
  const banner1 = document.getElementsByClassName('banner-1')
  const banner2 = document.getElementsByClassName('banner-2')
  let motoGPtl = gsap.timeline({    
      // defaults: { duration: 100, delay:  },
      scrollTrigger: {
        trigger: '.motoGp-section',
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 0.5,
        markers: true,
        toggleActions: "restart pause resume pause"
      }
    });

    motoGPtl.fromTo(banner1, 
      {
          x: '-100vw',
          scale: 1
      }, 
      { 
          x: '10vw',
          // duration: 2
      }, 0)  

      motoGPtl.fromTo(banner2, 
        {
            x: '100vw',
            scale: 1
        }, 
        { 
            x: '-10vw',
            // duration: 2
        }, '0.5') 
}


const initNFTVideo = () => {
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  const el = document.getElementById('nft-video');
  let video = el;
  /* ---------------------------------- */
  /* Scroll Control! */
  
  gsap.registerPlugin(ScrollTrigger);

  let NFTtl = gsap.timeline({
    // defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#nft-video-section",
      pin: true,
      anticipatePin: 1,
      start: "top top",
      end: "+=2000",
      scrub: 2,
    }
  });

  once(video, "loadedmetadata", () => {
    NFTtl.fromTo(
      video,
      {
        currentTime: 0
      },
      {
        currentTime: video.duration || 1
      }
    );
  });  

  // once(document.documentElement, "touchstart", function (e) {
  //   video.play();
  //   video.pause();
  // });
  
  
  // once(video, "loadedmetadata", () => {
  //   NFTtl.fromTo(
  //     video,
  //     {
  //       currentTime: 0
  //     },
  //     {
  //       currentTime: video.duration || 1
  //     }
  //   );
  // });
  
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  if (isTouchDevice()) {
    video.play();
    video.pause();
  }  
}

const initServiceSectionGsap = () => {
  gsap.to('.star', {
    rotation: 90, repeat: -1, repeatDelay: 0.7
  })
  gsap.to('.sun', {
    rotation: 359, repeat: -1, repeatDelay: 0, duration: 2,
    ease: 'linear'
  })  
  let squaresTl1 = gsap.timeline({
    repeat: -1, repeatDelay: 0,
  });  
  squaresTl1.fromTo('.square-1', {x: '56%'}, {x: '-56%'})
  squaresTl1.to('.square-1', {x: '56%'})

  let squaresTl2 = gsap.timeline({
    repeat: -1, repeatDelay: 0,
  });  
  squaresTl2.fromTo('.square-2', {x: '-56%'}, {x: '56%'})
  squaresTl2.to('.square-2', {x: '-56%'})  

  let eyelidTl = gsap.timeline({
    repeat: -1, repeatDelay: 0.7
  });  
  eyelidTl.to('.eye-lid', {transformOrigin: 'center top', rotationX: 90})
  eyelidTl.to('.eye-lid', {rotationX: 0}) 
}

function App() {
  useEffect(() => {
    initHeroGsap()
    initNFTVideo()
    initServiceSectionGsap()
    initGSAPVideo(gsap, {vidSelector: '#video-2', trigger: '.video-2-section', pin: true, end: 'bottom+=200% bottom'})
    initGSAPVideo(gsap, {vidSelector: '#video-3', trigger: '.video-3-section', pin: true, end: 'bottom+=200% bottom'})
    initGSAPVideo(gsap, {vidSelector: '#video-4', trigger: '.video-4-section', pin: true, end: 'bottom+=200% bottom'})
    initVideoScrollGsap('video-1', '.features')
    initMotoGPGsap()
  })
  return (
    <div className="App">
      <Nav />
      <Hero />
      {/* <div className='overflow-hidden h-[16rem] rounded-border relative'>
        <div className='rounded-full bg-black w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div> */}
      <section id="nft-video-section" className='flex flex-col items-center gap-10 py-16 text-center bg-beige text-body'>
        <NFTvideo />
        <h2 className='max-w-xl text-4xl font-title nft-title'>
          All your favorite NFTs in one secure location.          
        </h2>
        <p className='max-w-3xl font-body'>
          As an intuitive, integrated and open solution, Gryfyn is the key to connect the curious minds 
          to navigate across the virtual realms. You are promised with absolute freedom in where you are going, 
          and have total control in who you are becoming.        
        </p>
        <p>
          The world is within your reach. Open the door, 
          and let the experiences come to you.             
        </p>
      <div className='flex items-start justify-center w-full gap-28 tablet-below:flex-col tablet-below:items-center'>
          <div className='flex flex-col items-center gap-7'>
            <SVG name='star' classes='w-40 star'/>
            <h2 className='text-4xl font-title'>Create</h2>
            <p className='font-body max-w-[13rem]'>
              The world of the future, and witness the boundless possibilities of your mind.
            </p>
          </div>
          <div className='flex flex-col items-center gap-7'>
            <SVG name='sun' classes='w-40 sun' fill_1='#FFCC31' fill_2='#F16B37'/>
            <h2 className='text-4xl font-title'>Play</h2>
            <p className='flex flex-col items-center font-body'>
              <span className='max-w-[12rem]'>Any roles of your desire, fulfill your fantasies. </span>
              <span>Bring utility to its full potential.</span>
            </p>
          </div>
          <div className='flex flex-col items-center gap-7'>
            <div className='flex justify-center gap-2 py-12'>
              <div className='w-16 h-16 bg-[#0167A2] square-1'></div>
              <div className='w-16 h-16 bg-[#FFCC31] square-2'></div>
            </div>
            <h2 className='text-4xl font-title'>Socialise</h2>
            <p className='font-body max-w-[19rem]'>
              Communicate with those who inspire us to explore the boundaries of imagination from a new perspective.
            </p>
          </div>
          <div className='flex flex-col items-center gap-7'>
            <div className='relative'>
              <SVG name='eye' classes='w-40' fill_1='#FFFFFF'/>
              <SVG name='eye' classes='w-40 absolute top-0 eye-lid' fill_1='#E3DDD4' fill_2='#E3DDD4'/>
            </div>
            <h2 className='text-4xl font-title'>Explore</h2>
            <p className='font-body max-w-[16rem]'>
              Go on the journey that is unique to you, and watch Web 3 grow as you grow with it.
            </p>
          </div>  
        </div>
        </section>
      <section className='flex flex-col items-stretch min-h-screen p-16 px-24 overflow-hidden tablet-below:px-0 tablet-below:py-16 bg-beige text-body video-2-section tablet-below:items-center'>
        <div className='w-full tablet-below:flex tablet-below:justify-center'>
          <video className='w-[50rem] relative' id={'video-2'} src={DiamondVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        </div>
        <div className='relative flex justify-end w-full left-[-30rem] tablet-below:justify-center tablet-below:left-0 tablet-below:text-center'>
          <div className='mt-[-16rem]'>
            <h2 className='mb-12 text-4xl text-black'>Manage <br/>your portfolio</h2>
            <p>
            With access to the Polygon and Ethereum blockchains, Gryfyn is the perfect platform to manage and view your portfolio of NFTs in one place, as well as your coin balances. Gryfyn removes the barriers between NFTs and utility.            
            </p>     
            <div>
              <span className='text-black'>Powered By</span>
            </div>       
          </div>
        </div>
      </section>        
      <section className='flex flex-col items-center min-h-screen gap-10 py-16 overflow-hidden bg-beige text-body video-3-section'>
        <div className='flex flex-col items-start w-[50rem] gap-10'>
          <video className='w-[30rem] relative object-cover right-[-20rem]' id={'video-3'} src={SunVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          <div className='relative mt-[-16rem]'>
            <h2 className='mb-12 text-4xl text-black'>
              Seamless <br/> access to your <br/> gaming experience              
            </h2>
            <p className='max-w-xl'>
              Execute in game transactions and NFT use directly in-game, without having to switch out of the platform. <br/><br/>
              Verify your identity to unlock the full potential of Gryfyn, accessing, transferring and using your assets. <br/><br/>
              With a fully integrated wallet, experience an unseen level of immersion.              
            </p>
          </div>
        </div>
      </section>     
      <section className='flex flex-col items-stretch min-h-screen p-16 px-24 overflow-hidden tablet-below:px-0 tablet-below:py-16 bg-beige text-body video-4-section tablet-below:items-center'>
        <div className='w-full tablet-below:flex tablet-below:justify-center'>
          <video className='w-[50rem] relative' id={'video-4'} src={EyeVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        </div>
        <div className='relative flex justify-end w-full left-[-30rem] tablet-below:justify-center tablet-below:left-0 tablet-below:text-center'>
          <div className='mt-[-16rem]'>
            <h2 className='mb-12 text-4xl text-black'>Access the<br/> Animoca Brands<br/> Ecosystem</h2>
            <p>
              Gryfyn gives you unparalleled access to the <br/>Animoca Brands Ecosystem. <br/><br/>
              With the ability to game without boundaries, and manage<br/> your assets with ease, Gryfyn lets you explore like never<br/> before. <br/><br/>
              xperience the ever-growing ecosystem of Animoca Brands <br/>offline through our groundbreaking partnerships.            
            </p>     
            <div>
              <span className='text-black'>Powered By</span>
            </div>       
          </div>
        </div>
      </section>   
      <div className='overflow-hidden h-[16rem] relative bg-black rotate-180'>
        <div className='rounded-full bg-beige w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div>
      <section className='flex flex-col items-center h-screen py-16 text-center text-[#E3DDD4] gap-12'>
        <h2 className='text-4xl max-w-[30rem]'>Gryfyn is everything you need to unlock <span className='text-[#FFCC31]'>endless possibilities</span>.</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <img src={PhantomLogo} className='object-cover w-32'/>
          <img src={SandboxLogo} className='object-cover w-32'/>
          <img src={DustLandLogo} className='object-cover w-32'/>
          <img src={RevvRacingLogo} className='object-cover w-32'/>
        <div className='features'>
        <VideoScroll id='video-1' vid={vidGallery} pin={'.features'}/>
        </div>
        </div>
      </section>
      <section>
        <div className='features-1'>
        </div>
      </section>
      <section className="motoGp-section">
        <div className="motoGpBanner-wrapper">
          <h1 className="motoGp-header">
          The 
          <span className="motoGp-highlight px-4">
           Gryfyn x MotoGP  
          </span>
          VIP Experience
          </h1>
          <div className="motoGp-Banner">
            <div className="banner-left-wrapper">
            <img className="banner-1 motoGp-scroll" alt="" src={Banner}/>
            </div>
            <div className="banner-right-wrapper">
            <img className="banner-2 motoGp-scroll" alt="" src={Banner2}/>
            </div>
          </div>
          <img className="motoGp-star" alt="" src={MotoGPGraphic}/>
        </div>
      </section>
      <section className="motoGp-desc">
        <div className="motoGp-desc-wrapper">
            <p>
            We are proud to announce that Gryfyn is the official title sponsor of MotoGP 2022 & 2023 and a key partner of Dorna Sports, with the goal of propelling MotoGP into the vast potential of Web3 & the metaverse.
            <br/><br/>
            Get a chance to win a MotoGP race package that includes an all expenses paid trip to actual MotoGP races. 
            </p>
        </div>
        </section>
      <section className="image-slider">
        <Carousel />
      </section>
    </div>
  );
}

export default App;
