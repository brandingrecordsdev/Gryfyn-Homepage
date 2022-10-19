import './fonts/NeueMetana-Bold.otf';
import './fonts/NeueMetana-Regular.otf';
import './fonts/Basier Circle Regular.otf';
import './fonts/Basier Circle Bold.otf';

// import logo from './logo.svg';
import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Nav from './components/Nav';
import Hero from './components/Hero';
import SVG from './components/SVG'
import Carousel from './components/Carousel'
import VideoScroll from './components/VideoScroll'

import NFTvidMobile from './videos/nftmobile.mp4';
import NFTvid from './videos/NFTv1.mp4'
import vidGallery from './videos/game.mp4';
import vidGalleryMobile from './videos/gryfyn_gallery_mobile.mp4';
import SunVideo from './videos/sun.mp4';
import SunVideoMobile from './videos/gryfyn_sun_mobile.mp4';
import EyeVideo from './videos/eye.mp4';
import EyeVideoMobile from './videos/gryfyn_eye_mobile.mp4';
import PromoVid from './videos/promoVideo.mp4';
import DiamondVideo from './videos/diamond.mp4';
import DiamondVideoMobile from './videos/gryfyn_diamond_mobile.mp4';
import PhantomLogo from "./images/phantom_logo.png";
import DustLandLogo from "./images/dustland_logo.png";
import RevvRacingLogo from "./images/revv_racing_logo.png";
import SandboxLogo from "./images/the-sandbox-logo 2.png";
import Sun from './images/branded-sun.svg';
import GreenDiamond from './images/GreenDiamond.svg';
import YellowDiamond from './images/YellowDiamond.svg';
import BrandedALower from './images/branded-a-lower.svg';
import Logo from './images/logo.svg'
import Instagram from './images/instagram.svg';
import Twitter from './images/twitter.svg';
import LinkedIn from './images/linkedin.svg';

import AnimocaLogo from './images/animoca-logo.png';
import HexLogo from './images/hex-trust-logo.png';
import EthereumLogo from './images/ethereum-logo-landscape-black 2.png';
import PolygonLogo from './images/Polygon_blockchain_logo 2.png';
import Banner from './images/banner.png';
import Banner2 from './images/banner.png';
import MotoGPSticker from './images/MotoGPSticker.png';
import MotoGPTitle1 from './images/MotoGPTitle1.png';
import MotoGPTitle2 from './images/MotoGPTitle2.png';
import MotoGPGraphic from './images/MotoGPBanner.png';
import { useState, useEffect } from 'react';
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
      end: "+=1000",
      scrub: 3,
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
      end: "+=2000",
      scrub: 1,
      duration: 5,
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

const initMotoGPGsap = (pinnedSection) => {
  const banner1 = document.querySelectorAll(`${pinnedSection} .banner-1`)
  const banner2 = document.querySelectorAll(`${pinnedSection} .banner-2`)
  let motoGPtl = gsap.timeline({
    // defaults: { duration: 100, delay:  },
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      start: "top top",
      end: "+=500",
      scrub: 1,
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

const initPromoVideo = () => {
  const el = document.getElementById('promo-vid');
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
  let promoTL = gsap.timeline({
    // defaults: { duration: 2 },
    scrollTrigger: {
      trigger: '.promo-hero-section',
      pin: true,
      start: "top top",
      end: "+=1000",
      scrub: 2,
    }
  });

  once(video, "loadedmetadata", () => {
    promoTL.fromTo(
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

const initScrollDetection = (element1, element2) => {

  let a = element1;
  let b = element2;
  var ac = a.getBoundingClientRect(); // coordinates for element 'a'
  var bc = b.getBoundingClientRect(); // and 'b'

  // assuming both boxes are same size...
  // if not, use your existing collision code.

  if (Math.abs(ac.top - bc.top) < ac.height && Math.abs(ac.left - bc.left) < ac.width) {
    // collision here...

    if (Math.abs(ac.top - bc.top) < Math.abs(ac.left - bc.left)) {
      // vartical offset is smaller, so snap 'y's

      if (ac.top < bc.top) { // a is above b, so snap a's bottom to b's top
        a.style.top = bc.top - ac.height - 1 + 'px';
      }
      else {
        a.style.top = bc.top + bc.height + 1 + 'px';
      }

    }
    else { // here, horizontal offset is smaller, so snap 'x's

      if (ac.left < bc.left) { // a is to the left of b, so snap a's right to b's left
        a.style.left = bc.left - ac.width - 1 + 'px';
      }
      else {
        a.style.left = bc.left + bc.width + 1 + 'px';
      }

    }

  }
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
}
//   const el = document.getElementById('nft-video');
//   let video = el;
//   /* ---------------------------------- */
//   /* Scroll Control! */

//   gsap.registerPlugin(ScrollTrigger);

//   let NFTtl = gsap.timeline({
//     // defaults: { duration: 1 },
//     scrollTrigger: {
//       trigger: "#nft-video-section",
//       pin: true,
//       anticipatePin: 1,
//       start: "top top",
//       end: "+=2000",
//       scrub: 2,
//     }
//   });

//   once(video, "loadedmetadata", () => {
//     NFTtl.fromTo(
//       video,
//       {
//         currentTime: 0
//       },
//       {
//         currentTime: video.duration || 1
//       }
//     );
//   });  

//   function isTouchDevice() {
//     return (
//       "ontouchstart" in window ||
//       navigator.maxTouchPoints > 0 ||
//       navigator.msMaxTouchPoints > 0
//     );
//   }
//   if (isTouchDevice()) {
//     video.play();
//     video.pause();
//   }  
// }

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
  squaresTl1.fromTo('.square-1', { x: '56%' }, { x: '-56%' })
  squaresTl1.to('.square-1', { x: '56%' })

  let squaresTl2 = gsap.timeline({
    repeat: -1, repeatDelay: 0,
  });
  squaresTl2.fromTo('.square-2', { x: '-56%' }, { x: '56%' })
  squaresTl2.to('.square-2', { x: '-56%' })

  let eyelidTl = gsap.timeline({
    repeat: -1, repeatDelay: 0.7
  });
  eyelidTl.to('.eye-lid', { transformOrigin: 'center top', rotationX: 90 })
  eyelidTl.to('.eye-lid', { rotationX: 0 })
}

function App() {
  // const [windowDimenion, detectHW] = useState({
  //   winWidth: window.innerWidth,
  //   winHeight: window.innerHeight,
  // })

  // const detectSize = () => {
  //   detectHW({
  //     winWidth: window.innerWidth,
  //     winHeight: window.innerHeight,
  //   })
  // }  

  useEffect(() => {
    // initScrollDetection()
    initPromoVideo()
    initMotoGPGsap('.motoGp-promo-section')
    initHeroGsap()
    // initNFTVideo()
    initVideoScrollGsap('nft-video', '.video-nft-section')
    initVideoScrollGsap('nft-mobile-video', '.video-nft-mobile-section')
    // initGSAPVideo(gsap, {vidSelector: '#nft-video', trigger: '.video-nft-section', pin: true, end: 'bottom bottom', scrub: 2})
    // initGSAPVideo(gsap, {vidSelector: '#nft-mobile-video', trigger: '.video-nft-mobile-section', pin: true, end: 'bottom bottom', scrub: 2})
    initServiceSectionGsap()
    initGSAPVideo(gsap, {vidSelector: '#video-2', trigger: '.video-2-section', pin: true, end: 'bottom+=150% bottom', scrub: 2})
    initGSAPVideo(gsap, {vidSelector: '#video-2-mobile', trigger: '.video-2-section-mobile', pin: true, end: 'bottom+=150% bottom', scrub: 2})

    initGSAPVideo(gsap, {vidSelector: '#video-sun', trigger: '.video-sun-section', pin: true, end: 'bottom+=150% bottom', scrub: 3})
    initGSAPVideo(gsap, {vidSelector: '#video-sun-mobile', trigger: '.video-sun-mobile-section', pin: true, end: 'bottom+=150% bottom', scrub: 3})
    initGSAPVideo(gsap, {vidSelector: '#video-4', trigger: '.video-4-section', pin: true, end: 'bottom+=150% bottom', scrub: 3})
    initGSAPVideo(gsap, {vidSelector: '#video-4-mobile', trigger: '.video-4-section-mobile', pin: true, end: 'bottom+=150% bottom', scrub: 3})
    initVideoScrollGsap('video-1', '.features')
    initVideoScrollGsap('video-1-mobile', '.features-mobile')
    initMotoGPGsap('.motoGp-section')
  })

  // useEffect(()=>{
  //   window.addEventListener('resize', detectSize)
  //   ScrollTrigger.refresh(true)
  //   return () => {
  //   window.removeEventListener('resize', detectSize)
  //   }
  // },[windowDimenion])

  return (
    <div className="overflow-x-hidden App">
        <Nav />
      <section className="promo-hero-section">
        <video className='promo-vid' id="promo-vid" src={PromoVid} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        {/* <img alt="" className="motoGPBike" src={MotoGPBike}/> */}
        <img alt="" className="motoGPSticker" src={MotoGPSticker} />
        <div className="promo-hero-wrapper">
          <img alt="" className="motoGP-title-1" src={MotoGPTitle1} />
          <img alt="" className="motoGP-title-2" src={MotoGPTitle2} />
          <p className="promo-desc">
            Join the Gryfyn community and win endless experiences both online & offline.
          </p>
          <button className="motogp-cta-btn connect-btn">Enter The Raffle</button>
        </div>
      </section>
      <section className="motoGp-promo-section">
        <div className="motoGpBanner-promo">
          <div className="motoGp-Banner">
            <div className="banner-left-wrapper">
              <img className="banner-1 motoGp-scroll" alt="" src={Banner} />
            </div>
            <div className="banner-right-wrapper">
              <img className="banner-2 motoGp-scroll" alt="" src={Banner2} />
            </div>
          </div>
          {/* <img className="motoGp-star" alt="" src={MotoGPGraphic}/> */}
        </div>
      </section>
      <Hero />
      {/* <div className='overflow-hidden h-[16rem] rounded-border relative'>
        <div className='rounded-full bg-black w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div> */}
      <section className='tablet-below:hidden tablet-below:h-[1px] flex flex-col items-center bg-[#E3DDD4] min-h-[140vh] video-nft-section'>
        <video src={NFTvid} id="nft-video" className="nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>        
        <section className='flex flex-col items-center gap-10 py-16 text-center bg-[#E3DDD4] text-body w-full'>
          <h2 className='max-w-xl text-4xl font-title tablet-below:text-[2rem] mobile-below:text-[5vw]'>
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
          <div className='flex items-start justify-center w-full px-24 tablet-below:flex-col tablet-below:items-center '>
            <div className='flex flex-col items-center px-14'>
              <SVG name='star' classes='svg-mw star'/>
              <h2 className='text-4xl font-title'>Create</h2>
              <p className='font-body max-w-[13rem]'>
                The world of the future, and witness the boundless possibilities of your mind.
              </p>
            </div>
            <div className='flex flex-col items-center px-14'>
              <SVG name='sun' classes='svg-mw sun' fill_1='#FFCC31' fill_2='#F16B37'/>
              <h2 className='text-4xl font-title'>Play</h2>
              <p className='flex flex-col items-center font-body'>
                <span className='max-w-[12rem]'>Any roles of your desire, fulfill your fantasies. </span>
                <span>Bring utility to its full potential.</span>
              </p>
            </div>
            <div className='flex flex-col items-center px-14'>
              <div className='flex justify-center gap-2 py-12'>
                <div className='w-16 h-16 bg-[#0167A2] square-1'></div>
                <div className='w-16 h-16 bg-[#FFCC31] square-2'></div>
              </div>
              <h2 className='text-4xl font-title'>Socialise</h2>
              <p className='font-body max-w-[19rem]'>
                Communicate with those who inspire us to explore the boundaries of imagination from a new perspective.
              </p>
            </div>
            <div className='flex flex-col items-center px-14'>
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
      </section>
      <section className='tablet-above:hidden tablet-above:h-[1px] flex flex-col items-center bg-[#E3DDD4] min-h-[140vh] video-nft-mobile-section'>
        <video src={NFTvidMobile} id="nft-mobile-video" className="nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>        
        <section className='flex flex-col items-center gap-10 py-16 text-center bg-[#E3DDD4] text-body w-full tablet-below:mt-[-22vw] mobile-below:text-[3vw]'>
          <h2 className='max-w-xl text-4xl font-title tablet-below:text-[2rem] mobile-below:text-[6vw]'>
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
          <div className='flex items-start justify-center w-full px-20 gap-28 tablet-below:flex-col tablet-below:items-center '>
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
      </section>

      <section className='tablet-below:hidden tablet-below:h-[1px] flex flex-col items-center py-16 overflow-hidden bg-[#E3DDD4] text-body video-2-section'>
        <div className='w-[60rem] flex flex-col tablet-below:w-[55rem] mobile-below:w-full'>
          <div className='flex justify-start w-full mobile-below:justify-center'>
            <video className='w-full tablet-below:w-[46rem] mobile-below:w-full mobile-below:relative mobile-below:left-[16%]' id={'video-2'} src={DiamondVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div>
          <div className='flex flex-col items-end mt-[-26rem] max-w-7xl tablet-below:mt-[-23rem] w-full font-body mobile-below:mt-[-8rem] mobile-below:items-center mobile-below:text-center mobile-below:relative'>
            <div className='w-[35rem] mobile-below:w-full'>
              <h2 className='mb-8 text-4xl text-black font-title'>Manage <br />your portfolio</h2>
              <p>
              With access to the Polygon and Ethereum blockchains,<br/>
              Gryfyn is the perfect platform to manage and view your <br/>
              portfolio of NFTs in one place, as well as your coin balances. <br/><br/>
              Gryfyn removes the barriers between NFTs and utility.<br/> <br/>           
              </p>     
              <div className='flex flex-col'>
                <span className='text-black'>Supported Netwroks</span>
                <div className='flex gap-4'>
                  <img alt="" src={EthereumLogo} className='object-contain w-32'/>
                  <img alt="" src={PolygonLogo} className='object-contain w-32'/>

                </div>
              </div>       
            </div>
          </div>
        </div>
      </section>

      <section className='tablet-above:hidden tablet-above:h-[1px] flex flex-col items-center py-16 overflow-hidden bg-[#E3DDD4] text-body video-2-section-mobile mobile-below:min-h-[250vw] tablet-below:min-h-[186vw] text-center'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-center w-full '>
            <video className='w-full' id={'video-2-mobile'} src={DiamondVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div>
          <div className='flex flex-col items-center w-full font-body'>
            <div className='w-full mobile-below:text-[3vw]'>
              <h2 className='mb-8 text-4xl text-black font-title mobile-below:text-[6.2vw]'>Manage <br/>your portfolio</h2>
              <p>
              With access to the Polygon and Ethereum blockchains,<br/>
              Gryfyn is the perfect platform to manage and view your <br/>
              portfolio of NFTs in one place, as well as your coin balances. <br/><br/>
              Gryfyn removes the barriers between NFTs and utility.<br/> <br/>           
              </p>     
              <div className='flex flex-col items-center'>
                <span className='text-black'>Supported Netwroks</span>
                <div className='flex gap-4'>
                  <img alt="" src={EthereumLogo} className='object-contain w-32 mobile-below:w-[26.2vw]'/>
                  <img alt="" src={PolygonLogo} className='object-contain w-32 mobile-below:w-[26.2vw]'/>

                </div>
              </div>       
            </div>
          </div>
        </div>
      </section>       

      <section className='tablet-below:hidden tablet-below:h-[1px] flex flex-col items-center h-screen py-16 overflow-hidden bg-[#E3DDD4] text-black video-sun-section'>
        <div className='flex justify-end'>
          <video className='relative object-cover w-full tablet-below:w-[46rem] mobile-below:w-full' id={'video-sun'} src={SunVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        </div>
        <div className='relative top-[-30rem] max-w-7xl	mobile-below:top-[-10rem] p-6 mobile-below:text-center mobile-below:flex mobile-below:flex-col mobile-below:items-center'>
          <h2 className='mb-12 text-4xl text-black max-w-7xl font-title tablet-below:text-3xl'>
            Seamless <br /> access to your <br /> gaming experience
          </h2>
          <p className='max-w-7xl	font-body'>
            Execute in game transactions and NFT use directly in-game, without having to switch out of the platform. <br /><br />
            Verify your identity to unlock the full potential of Gryfyn, accessing, transferring and using your assets. <br /><br />
            With a fully integrated wallet, experience an unseen level of immersion.
          </p>
        </div>
      </section>

      <section className='tablet-above:hidden tablet-above:h-[1px] flex flex-col items-center tablet-below:h-[120vh] mobile-below:h-[180vh] py-16 overflow-hidden bg-[#E3DDD4] text-black video-sun-mobile-section text-center h-screen'>
      <div className='flex justify-center'>
          <video className='object-cover w-full max-w-lg' id={'video-sun-mobile'} src={SunVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        </div> 
        <div className='flex flex-col items-center p-6 mobile-below:text-[3vw]'>
            <h2 className='mb-12 text-4xl text-black font-title tablet-below:text-3xl mobile-below:text-[6.2vw]'>
              Seamless <br/> access to your <br/> gaming experience              
            </h2>
            <p className='font-body'>
              Execute in game transactions and NFT use directly in-game, without having to switch out of the platform. <br/><br/>
              Verify your identity to unlock the full potential of Gryfyn, accessing, transferring and using your assets. <br/><br/>
              With a fully integrated wallet, experience an unseen level of immersion.              
            </p>
          </div>
      </section> 

      <section className='tablet-below:hidden tablet-below:h-[1px] flex flex-col items-center min-h-screen py-16 overflow-hidden bg-[#E3DDD4] text-black video-4-section h-screen'>
        <div className='w-[56rem] flex flex-col tablet-below:w-[44rem] mobile-below:w-full'>
          <div className='flex justify-start w-full mobile-below:justify-center'>
            <video className='relative px-2 w-full tablet-below:w-[25rem] mobile-below:w-full' id={'video-4'} src={EyeVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div>
          <div className='flex justify-end w-full mt-[-24rem] relative mobile-below:justify-center mobile-below:text-center mobile-below:mt-[-7rem]'>
            <div>
              <h2 className='mb-12 text-4xl font-title'>Access the<br /> Animoca Brands<br /> Ecosystem</h2>
              <p className='font-body'>
                Gryfyn gives you unparalleled access to the <br/>Animoca Brands Ecosystem. <br/><br/>
                With the ability to game without boundaries, and manage<br/> your assets with ease, Gryfyn lets you explore like never<br/> before. <br/><br/>
                xperience the ever-growing ecosystem of Animoca Brands <br/>offline through our groundbreaking partnerships.            
              </p>     <br/>
              <div className='flex flex-col gap-2'>
                <span className='text-black'>Powered By</span>
                <div className='flex items-center gap-4'>
                  <img alt="" src={AnimocaLogo} className='object-contain w-[6.2rem]'/>
                  <img alt="" src={HexLogo} className='object-contain w-[7.2rem]'/>                  
                </div>
              </div>  
            </div>          
          </div>
        </div>
      </section>

      <section className='tablet-above:hidden tablet-above:h-[1px] flex flex-col items-center tablet-below:min-h-[160vw] mobile-below:min-h-[200vw] py-16 overflow-hidden bg-[#E3DDD4] text-black video-4-section-mobile text-center'>
        <div className='flex flex-col items-center w-full'>
          <div className='flex justify-center w-full'>
            <video className='w-full' id={'video-4-mobile'} src={EyeVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div>
          <div className='flex justify-center w-full font-body relative top-[-26vw]'>
            <div className='mobile-below:text-[3vw]'>
              <h2 className='mb-12 text-4xl font-title mobile-below:text-[6.2vw]'>Access the<br/> Animoca Brands<br/> Ecosystem</h2>
              <p>
                Gryfyn gives you unparalleled access to the <br/>Animoca Brands Ecosystem. <br/><br/>
                With the ability to game without boundaries, and manage<br/> your assets with ease, Gryfyn lets you explore like never<br/> before. <br/><br/>
                xperience the ever-growing ecosystem of Animoca Brands <br/>offline through our groundbreaking partnerships.            
              </p><br/>
              <div className='flex flex-col items-center gap-2'>
                <span className='text-black'>Powered By</span>
                <div className='flex justify-center gap-4'>
                  <img alt="" src={AnimocaLogo} className='object-contain w-[20vw]'/>
                  <img alt="" src={HexLogo} className='object-contain w-[26vw]'/>
                </div>
              </div>  
            </div>          
          </div>
        </div>
      </section>       

      <div className='overflow-hidden h-[16rem] relative rotate-180 mt-[-1px] bg-transparent'>
        <div className='rounded-full bg-[#E3DDD4] w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div>
      <section className='flex flex-col items-center h-screen py-16 text-center text-[#E3DDD4] gap-12'>
        <h2 className='text-4xl max-w-[30rem]'>Gryfyn is everything you need to unlock <span className='text-[#FFCC31]'>endless possibilities</span>.</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <img alt="" src={PhantomLogo} className='object-cover w-32' />
          <img alt="" src={SandboxLogo} className='object-cover w-32' />
          <img alt="" src={DustLandLogo} className='object-cover w-32' />
          <img alt="" src={RevvRacingLogo} className='object-cover w-32' />
          <div className='tablet-below:hidden tablet-below:h-[1px] features'>
            <VideoScroll id='video-1' vid={vidGallery} pin={'.features'} />
          </div>
          <div className='tablet-above:hidden tablet-above:h-[1px] features-mobile'>
            <VideoScroll id='video-1-mobile' vid={vidGalleryMobile} pin={'.features-mobile'} />
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
            <span className="px-4 motoGp-highlight">
              Gryfyn x MotoGP
            </span>
            <br></br>
            <span>
              VIP Experience
            </span>
          </h1>
          <div className="motoGp-Banner">
            <div className="banner-left-wrapper">
              <img className="banner-1 motoGp-scroll" alt="" src={Banner} />
            </div>
            <div className="banner-right-wrapper">
              <img className="banner-2 motoGp-scroll" alt="" src={Banner2} />
            </div>
          </div>
          <img className="motoGp-star" alt="" src={MotoGPGraphic} />
        </div>
      </section>
      <section className="motoGp-desc">
        <div className="motoGp-desc-wrapper">
          <p>
            <span>We are proud to announce that Gryfyn is the </span>
            <span className="header-bold">
              official title sponsor of MotoGP 2022 & 2023
            </span> and a key partner of Dorna Sports, with the goal of propelling MotoGP into the vast potential of Web3 & the metaverse.
            <br /><br />
            <span>Get a chance to win </span>
            <span className="header-highlight">
              2x VIP all inclusive tickets
            </span>
            <span> to the Spain MotoGP event.</span>
          </p>
        </div>
      </section>
      <section className="image-slider">
        <Carousel />
      </section>
      <section className="enter-raffles-section">
        <div className="raffles-wrapper">
          <h1>How to enter?</h1>
          <p>From now to March 2023, connect to our non custodian wallet and follow our verification process to enter the raffle.</p>
          <button className="motogp-cta-btn connect-btn">Connect Wallet</button>
        </div>
      </section>
      <section className="bottom-banner">
        <h1 className="bottom-header">
          A w
          <span className="branded-sun"><img className="rotating" alt="" src={Sun} /></span>
          rld
          <br />
          beyond yo
          <span className="branded-u"><img className="anim-world-beyond-u" alt="" src={GreenDiamond} />u</span>
          r
          <br />
          <span className="branded-i-sm"><img className="anim-world-beyond-o" alt="" src={YellowDiamond} />i</span>
          <span>magination </span>
          <span className="branded-a-lower"><img alt="" src={BrandedALower} /></span>
          waits
        </h1>
      </section>
      <footer className="site-footer">
        <div className="footer-wrapper">
          <img alt="" className="logo footer-logo" src={Logo} />
          <div className="social-media-wrapper">
            <a href="/" className="social-icon">
              <img alt="" src={Instagram} />
            </a>
            <a href="/" className="social-icon">
              <img alt="" src={Twitter} />
            </a>
            <a href="/" className="social-icon">
              <img alt="" src={LinkedIn} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;