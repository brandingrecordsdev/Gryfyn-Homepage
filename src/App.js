import './fonts/NeueMetana-Bold.otf';
import './fonts/NeueMetana-Regular.otf';
import './fonts/Basier Circle Regular.otf';
import './fonts/Basier Circle Bold.otf';

import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Helmet } from 'react-helmet'

import Nav from './components/Nav';
import Hero from './components/Hero';
import SVG from './components/SVG'
import Carousel from './components/Carousel'
import VideoScroll from './components/VideoScroll'
import LoadingScreen from './components/LoadingScreen'
import PromoVidMobile from './videos/kvmobile.mp4';

import NFTvidMobile from './videos/nftmobile.mp4';
import NFTvid from './videos/NFTv1.mp4'
import vidGallery from './videos/game.mp4';
import vidGalleryMobile from './videos/gryfyn_gallery_mobile.mp4';
import SunVideo from './videos/sun.mp4';
import SunVideoMobile from './videos/sunmobilev2.mp4';
import EyeVideo from './videos/eye.mp4';
import EyeVideoMobile from './videos/gryfyn_eye_mobile.mp4';
import PromoVid from './videos/promoVideo.mp4';
import DiamondVideo from './videos/diamond.mp4';
import DiamondVideoMobile from './videos/diamondmobile.mp4';
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
import { useEffect, Script } from 'react';
import initGSAPVideo from './components/initGSAPVideo'
import $ from 'jquery';


gsap.registerPlugin(ScrollTrigger);

const initVideoScrollGsap = (id, pinnedSection, end) => {
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

  if(id === 'promo-vid-mobile'){
    console.log('match promo vid mobile')
    video.play();
  }

  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */
  let vidTL = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      start: "top",
      end: end,
      scrub: 3,
      toggleActions: "play reset none reset"
    }
  });
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
    }
  )
}

const initMotoGPGsap = (pinnedSection, start, end) => {
  const banner1 = document.querySelectorAll(`${pinnedSection} .banner-1`)
  const banner2 = document.querySelectorAll(`${pinnedSection} .banner-2`)
  let motoGPtl = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedSection,
      pin: true,
      start: start,
      end: end,
      scrub: 1,
      toggleActions: "play reset none reset"
    }
  });

  motoGPtl.fromTo(banner1,
    {
      x: '-100vw',
      scale: 1
    },
    {
      x: '10vw',
    }, 0)

  motoGPtl.fromTo(banner2,
    {
      x: '100vw',
      scale: 1
    },
    {
      x: '-10vw',
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
  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });
  /* ---------------------------------- */
  /* Scroll Control! */
  let promoTL = gsap.timeline({
    // defaults: { duration: 2 },
    scrollTrigger: {
      trigger: '.promo-hero-section',
      pin: true,
      start: "top top",
      end: "+=500",
      scrub: 2,
      toggleActions: "play reset none reset"
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

  useEffect(() => {

    var isColliding = function(el1, el2) {
      let $div1 = $(el1);
      let $div2 = $(el2);

      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    };

  
    const handleScroll = event => {
      if (isColliding('nav', '.hero-section') || isColliding('nav', '.video-nft-section') || isColliding('nav', '.video-sun-section') || isColliding('nav', '.video-2-section') || isColliding('nav', '.video-4-section') || isColliding('nav', '.rounded-section') || isColliding('nav', '.image-slider')  || isColliding('nav', '.icons-section') ) {
      $('.main-nav').css('background-color', 'black')
  } else {
    $('.main-nav').css('background-color', 'transparent')
  }


    };

    window.addEventListener('scroll', handleScroll);
    
    initVideoScrollGsap('promo-vid-mobile', '.promo-vid-mobile-section', "bottom+=100% bottom")
    initPromoVideo()
    initMotoGPGsap('.motoGp-promo-section', 'top top', '+=1500')
    initHeroGsap()
    initVideoScrollGsap('nft-video', '.video-nft-section', "bottom+=100% bottom")
    initVideoScrollGsap('nft-mobile-video', '.video-nft-mobile-section', "bottom+=100% bottom")
    initServiceSectionGsap()
    initGSAPVideo(gsap, {
      vidSelector: '#video-2', trigger: '.video-2-section', pin: true, end: '+=2000', scrub: 2,
      onLeave: () => {
        document.getElementById('diamond-desc').classList.remove('opacity-0')
      }, 
    })
    initGSAPVideo(gsap, {
      vidSelector: '#video-2-mobile', trigger: '.video-2-section-mobile', pin: true, end: '+=2000', scrub: 2,
      onLeave: () => {
        document.getElementById('diamond-desc-mobile').classList.remove('opacity-0')
      },   
    })

    initGSAPVideo(gsap, {
      vidSelector: '#video-sun', trigger: '.video-sun-section', pin: true, end: '+=3000', scrub: 2,
      onLeave: () => {
        document.getElementById('sun-desc').classList.remove('opacity-0')
      },      
    })
    initGSAPVideo(gsap, {
      vidSelector: '#video-sun-mobile', trigger: '.video-sun-mobile-section', pin: true, end: '+=3000', scrub: 2,
      onLeave: () => {
        document.getElementById('sun-desc-mobile').classList.remove('opacity-0')
      },        
    })
    initGSAPVideo(gsap, {
      vidSelector: '#video-4', trigger: '.video-4-section', pin: true, end: '+=2000', scrub: 2,
      onLeave: () => {
        document.getElementById('eye-desc').classList.remove('opacity-0')
      },       
    })
    initGSAPVideo(gsap, {
      vidSelector: '#video-4-mobile', trigger: '.video-4-section-mobile', pin: true, end: '+=2000', scrub: 2,
      onLeave: () => {
        document.getElementById('eye-desc-mobile').classList.remove('opacity-0')
      },    
    })
    initVideoScrollGsap('video-1', '.features', 'bottom bottom')
    initVideoScrollGsap('video-1-mobile', '.features-mobile', 'bottom bottom')
    initMotoGPGsap('.motoGp-section', 'top top', '+=2000')

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  })

  return (
    <>
    {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-D5110NJXS5`}/>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5110NJXS5')
      `}
    </Script>  */}
    <Helmet>
      <title>Gryfyn | Your key to the (un)known</title>
      <meta id="meta-description" name="description" content="An NFT wallet by Animoca Brands & Hex Trust - Find new ways to connect and interact through NFT's across a variety of Web3 experiences. Store your NFT's in one secure non custodian digital wallet." />
    </Helmet>
    <div className="overflow-x-hidden App">
      <LoadingScreen/>
      <Nav />
      <section className="promo-vid-mobile-section tablet-above:hidden tablet-above:h-[1px]">
      <img alt="" className="motoGPSticker stickerMobile" src={MotoGPSticker} />
      <video className='promo-vid-mobile' id="promo-vid-mobile" src={PromoVidMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
      </section>
      <section className="promo-hero-section">
      <video className='tablet-below:hidden tablet-below:h-[1px] promo-vid' id="promo-vid" src={PromoVid} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
        <img alt="" className="motoGPSticker stickerDesktop" src={MotoGPSticker} />
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
        </div>
      </section>
      <Hero />
      <div className='bg-[#E3DDD4]'>
        <section className='tablet-below-new:hidden tablet-below-new:h-[1px] flex flex-col items-center bg-[#E3DDD4] min-h-[100vh] h-full video-nft-section'>
          <video src={NFTvid} id="nft-video" className="nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>        
          <section className='flex flex-col items-center gap-10 pb-16 text-center bg-[#E3DDD4] text-body w-full nft-header-section nft-desc'>
            <h2 className=' text-4xl font-title tablet-below:text-[2rem] mobile-below:text-[5vw] nft-header'>
              All your favorite NFTs in one secure location.          
            </h2>
            <p className='font-body nft-text'>
            An intuitive, fully integrated and original solution to your Web3.0 experience.  <br></br>
          Gryfyn is the key to connecting curious minds to limitless virtual possibilities. <br></br>
          Experience the absolute freedom to spread your wings and  make your wildest dreams a reality.  
            </p>
            <p className="nft-text">
            A new world is at your fingertips. Open the door and seize the opportunity.          
            </p>
          </section>
        </section>
          <section className='tablet-below-new:hidden tablet-below-new:h-[1px] flex items-start justify-center w-full px-24 tablet-below:flex-col tablet-below:items-center icons-section'>
            <div className="icons-wrapper flex items-start justify-between">
              <div className='flex flex-col items-center icon-col'>
                <SVG name='star' classes='svg-mw star'/>
                <h2 className='font-title icon-header'>Create</h2>
                <p className='font-body max-w-[13rem] text-center'>
                The world of the future, and witness the boundless possibilities of your mind.
                </p>
              </div>
              <div className='flex flex-col items-center icon-col'>
                <SVG name='sun' classes='svg-mw sun' fill_1='#FFCC31' fill_2='#F16B37'/>
                <h2 className='font-title icon-header'>Play</h2>
                <p className='flex flex-col items-center font-body text-center'>
                Any roles of your desire, fulfill your fantasies and bring utility to its full potential.
                </p>
              </div>
              <div className='flex flex-col items-center icon-col social-col'>
                <div className='flex justify-center gap-2 py-12 squares-container'>
                  <div className='w-16 h-16 bg-[#0167A2] square-1'></div>
                  <div className='w-16 h-16 bg-[#FFCC31] square-2'></div>
                </div>
                <h2 className='font-title icon-header'>Socialise</h2>
                <p className='font-body max-w-[19rem] negative-marg text-center'>
                Communicate with those who inspire us to explore the boundaries of imagination.
                </p>
              </div>
              <div className='flex flex-col items-center icon-col'>
                <div className='relative'>
                  <SVG name='eye' classes='w-40 eyes' fill_1='#FFFFFF'/>
                  <SVG name='eye' classes='w-40 absolute top-0 eye-lid eyes' fill_1='#E3DDD4' fill_2='#E3DDD4'/>
                </div>
                <h2 className='font-title icon-header negative-marg'>Explore</h2>
                <p className='font-body max-w-[16rem] text-center'>
                Go on a journey that is unique to you, and watch Web 3 grow as you grow with it.
                </p>
              </div>  
            </div>
          </section>
        <section className='tablet-above-new:hidden tablet-above-new:h-[1px] flex flex-col items-center bg-[#E3DDD4] min-h-[200vh] h-full video-nft-mobile-section '>
          <video src={NFTvidMobile} id="nft-mobile-video" className="z-index nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted='muted'></video>        
          <section className='flex flex-col items-center gap-10 pb-16 text-center bg-[#E3DDD4] text-body w-full mobile-below:text-[3vw] nft-mobile-content'>
            <h2 className='max-w-xl text-4xl font-title tablet-below:text-[2rem] mobile-below:text-[6vw] mobile-nft-header'>
              All your favorite NFTs in one secure location.          
            </h2>
            <p className='max-w-3xl font-body mobile-below:text-[3vw] mobile-below:px-2 nft-text'>
              As an intuitive, integrated and open solution, Gryfyn is the key to connect the curious minds 
              to navigate across the virtual realms. You are promised with absolute freedom in where you are going, 
              and have total control in who you are becoming.        
            </p>
            <p className='font-body mobile-below:text-[3vw] mobile-below:px-2 nft-text'>
              The world is within your reach. Open the door, 
              and let the experiences come to you.             
            </p>
            <div className='flex items-start justify-center w-full px-20 gap-28 tablet-below:flex-col tablet-below:items-center mobile-below:px-2 mobile-below:gap-10'>
              <div className='flex flex-col items-center gap-7 icon-col-mobile'>
                <SVG name='star' classes='w-40 star'/>
                <h2 className='text-4xl font-title mobile-below:text-[6vw] icon-header'>Create</h2>
                <p className='font-body max-w-[13rem] mobile-icon-text'>
                  The world of the future, and witness the boundless possibilities of your mind.
                </p>
              </div>
              <div className='flex flex-col items-center gap-7 icon-col-mobile'>
                <SVG name='sun' classes='w-40 sun' fill_1='#FFCC31' fill_2='#F16B37'/>
                <h2 className='text-4xl font-title mobile-below:text-[6vw] icon-header'>Play</h2>
                <p className='flex flex-col items-center font-body mobile-icon-text'>
                  <span className='max-w-[12rem]'>Any roles of your desire, fulfill your fantasies. </span>
                  <span>Bring utility to its full potential.</span>
                </p>
              </div>
              <div className='flex flex-col items-center gap-7 icon-col-mobile'>
                <div className='flex justify-center gap-2 py-12'>
                  <div className='w-16 h-16 bg-[#0167A2] square-1'></div>
                  <div className='w-16 h-16 bg-[#FFCC31] square-2'></div>
                </div>
                <h2 className='text-4xl font-title mobile-below:text-[6vw] icon-header'>Socialise</h2>
                <p className='font-body max-w-[19rem] mobile-icon-text'>
                  Communicate with those who inspire us to explore the boundaries of imagination from a new perspective.
                </p>
              </div>
              <div className='flex flex-col items-center gap-7 icon-col-mobile'>
                <div className='relative'>
                  <SVG name='eye' classes='w-40' fill_1='#FFFFFF'/>
                  <SVG name='eye' classes='w-40 absolute top-0 eye-lid' fill_1='#E3DDD4' fill_2='#E3DDD4'/>
                </div>
                <h2 className='text-4xl font-title mobile-below:text-[6vw] icon-header'>Explore</h2>
                <p className='font-body max-w-[16rem] mobile-icon-text'>
                  Go on the journey that is unique to you, and watch Web 3 grow as you grow with it.
                </p>
              </div>  
            </div>
          </section>        
        </section>

        <section className='tablet-below-new:hidden tablet-below-new:h-[1px] flex flex-col items-center py-16 bg-[#E3DDD4] text-body video-2-section h-full'>
          <div className='flex flex-col w-full max-w-[1500px]'>
            <div className='flex justify-start w-full items-end'>
              <video className='w-full' id={'video-2'} src={DiamondVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
            </div>
            <div className='relative flex flex-col items-end w-full font-body top-[-48vw] desktop-2-above-new:top-[-50rem] desktop-2-above-new:pr-[16rem] diamond-wrapper'>
              <div className={`w-[44rem]`}>
                <h2 className='mb-8 text-4xl text-black font-title features-header'>Manage <br />your portfolio</h2>
                <p className="features-desc">
                With access to the Polygon and Ethereum blockchains,
                Gryfyn is the perfect platform to manage and view your
                portfolio of NFTs in one place, as well as your coin balances.
                <br></br>
                <br></br>
                Gryfyn removes the barriers between NFTs and utility.         
                </p>     
                <div className='flex flex-col'>
                  <span className='text-black supported-head'>Supported Networks</span>
                  <div className='flex gap-4 support-networks-wrapper'>
                    <img alt="" src={EthereumLogo} className='object-contain brand-logo'/>
                    <img alt="" src={PolygonLogo} className='object-contain brand-logo'/>

                  </div>
                </div>       
              </div>
            </div>
          </div>
        </section>

        <section className='tablet-above-new:hidden tablet-above-new:h-[1px] flex flex-col items-center py-16 bg-[#E3DDD4] text-body video-2-section-mobile mobile-below-new:min-h-[250vw] tablet-below-new:min-h-[186vw] text-center'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-center w-full '>
              <video className='w-full' id={'video-2-mobile'} src={DiamondVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
            </div>
            <div className='flex flex-col items-center w-full font-body'>
              <div className={`w-full mobile-below:text-[3vw] transition-opacity duration-300 opacity-0 mobile-feature-wrapper`} id='diamond-desc-mobile'>
              <h2 className='mb-8 text-4xl text-black font-title features-header'>Manage <br />your portfolio</h2>
                <p className="features-desc">
                With access to the Polygon and Ethereum blockchains,
                Gryfyn is the perfect platform to manage and view your
                portfolio of NFTs in one place, as well as your coin balances.
                <br></br>
                <br></br>
                Gryfyn removes the barriers between NFTs and utility.         
                </p>     
                <div className='flex flex-col'>
                  <span className='text-black supported-head'>Supported Networks</span>
                  <div className='flex justify-center gap-4'>
                    <img alt="" src={EthereumLogo} className='object-contain w-32 mobile-below:w-[26.2vw]'/>
                    <img alt="" src={PolygonLogo} className='object-contain w-32 mobile-below:w-[26.2vw]'/>

                  </div>
                </div>       
              </div>
            </div>
          </div>
        </section>       

        <section className='tablet-below-new:hidden tablet-below-new:h-[1px] flex flex-col items-center min-h-[70rem] py-16 bg-[#E3DDD4] text-black video-sun-section  h-full'>
          <div className='flex justify-end w-full max-w-[1500px]'>
            <video className='relative object-cover w-full' id={'video-sun'} src={SunVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div>
          <div className='relative top-[-40vw] w-full max-w-[1500px] pl-[6vw] desktop-2-above-new:pl-[3rem] desktop-2-above-new:top-[-52rem]'>
            <h2 className='mb-12 text-4xl text-black max-w-7xl font-title features-header'>
              Seamless <br /> access to your <br /> gaming experience
            </h2>
            <p className='max-w-7xl font-body features-desc sun-desc'>
              Execute in game transactions and NFT use directly in-game, without having to switch out of the platform. <br /><br />
              Verify your identity to unlock the full potential of Gryfyn, accessing, transferring and using your assets. <br /><br />
              With a fully integrated wallet, experience an unseen level of immersion.
            </p>
          </div>
        </section>

        <section className='tablet-above-new:hidden tablet-above-new:h-[1px] flex flex-col items-center tablet-below-new:h-[180vw] mobile-below-new:h-[180vh] py-16 bg-[#E3DDD4] text-black video-sun-mobile-section text-center h-screen'>
          <div className='flex justify-center'>
            <video className='object-cover w-full' id={'video-sun-mobile'} src={SunVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
          </div> 
          <div id='sun-desc-mobile' className='flex flex-col items-center p-6 mobile-below:text-[3vw] transition-opacity duration-300 opacity-0 mobile-feature-wrapper'>
              <h2 className='mobile-feature-header mb-12 text-4xl text-black font-title tablet-below-new:text-3xl mobile-below:text-[6.2vw]'>
                Seamless <br/> access to your <br/> gaming experience              
              </h2>
              <p className='font-body mobile-feature-desc'>
                Execute in game transactions and NFT use directly in-game, without having to switch out of the platform.
                Verify your identity to unlock the full potential of Gryfyn, accessing, transferring and using your assets.
                With a fully integrated wallet, experience an unseen level of immersion.              
              </p>
            </div>
        </section> 

        <section className='tablet-below-new:hidden tablet-below-new:h-[1px] flex flex-col items-center min-h-[90vw] py-16 overflow-hidden bg-[#E3DDD4] video-4-section text-black h-screen h-full'>
          <div className='flex flex-col w-full max-w-[1500px]'>
            <div className='flex justify-start w-full'>
              <video className='relative w-full px-2' id={'video-4'} src={EyeVideo} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
            </div>
            <div className='relative flex justify-end w-full top-[-40vw] desktop-2-above-new:top-[-40rem] eye-wrapper '>
              <div id='eye-desc' className=''>
                <h2 className='mb-12 text-4xl font-title features-header'>Access the<br /> Animoca Brands<br /> Ecosystem</h2>
                <p className='font-body features-desc'>
                  Gryfyn gives you unparalleled access to the <br/>Animoca Brands Ecosystem. <br/><br/>
                  With the ability to game without boundaries, and manage<br/> your assets with ease, Gryfyn lets you explore like never<br/> before. <br/><br/>
                  Experience the ever-growing ecosystem of Animoca Brands <br/>offline through our groundbreaking partnerships.            
                </p>     <br/>
                <div className='flex flex-col gap-2'>
                  <p className='text-black supported-head'>Powered By</p>
                  <div className='flex items-center support-networks-wrapper'>
                    <img alt="" src={AnimocaLogo} className='object-contain brand-logo animoca-logo'/>
                    <img alt="" src={HexLogo} className='object-contain brand-logo hex-logo'/>                  
                  </div>
                </div>  
              </div>          
            </div>
          </div>
        </section>

        <section className='tablet-above-new:hidden tablet-above-new:h-[1px] flex flex-col items-center tablet-below-new:min-h-[160vw] mobile-below-new:min-h-[200vw] py-16 bg-[#E3DDD4] text-black video-4-section-mobile text-center h-full'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex justify-center w-full'>
              <video className='w-full' id={'video-4-mobile'} src={EyeVideoMobile} webkit-playsinline="true" playsInline={true} preload="auto" muted="muted"></video>
            </div>
            <div className='flex justify-center w-full font-body relative top-[-26vw]'>
              <div id='eye-desc-mobile' className='mobile-below:text-[3vw] transition-opacity duration-300 opacity-0  mobile-feature-wrapper'>
                <h2 className='mobile-feature-header mb-12 text-4xl font-title mobile-below:text-[6.2vw]'>Access the<br/> Animoca Brands<br/> Ecosystem</h2>
                <p className="mobile-feature-desc">
                Gryfyn gives you unparalleled access to the <br/>Animoca Brands Ecosystem. <br/><br/>
                  With the ability to game without boundaries, and manage<br/> your assets with ease, Gryfyn lets you explore like never<br/> before. <br/><br/>
                  Experience the ever-growing ecosystem of Animoca Brands <br/>offline through our groundbreaking partnerships.               
                </p><br/>
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-black pb-4'>Powered By</span>
                  <div className='flex justify-center gap-4'>
                    <img alt="" src={AnimocaLogo} className='object-contain w-[20vw] animoca-logo-mobile'/>
                    <img alt="" src={HexLogo} className='object-contain w-[26vw] hex-logo-mobile'/>
                  </div>
                </div>  
              </div>          
            </div>
          </div>
        </section>     
      </div>  

      <div className='overflow-hidden h-[16rem] relative rotate-180 mt-[-1px] bg-transparent rounded-section'>
        <div className='rounded-full bg-[#E3DDD4] w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div>
      <section className='flex flex-col items-center h-screen py-16 text-center text-[#E3DDD4] gallery-section'>
        <div className='flex flex-col items-center'>
        <h2 className='text-4xl max-w-[30rem] gallery-header'>Gryfyn is everything you need to unlock <span className='text-[#FFCC31]'>endless possibilities</span>.</h2>
        <div className="flex flex-row items-center game-wrapper">
            <img alt="" src={PhantomLogo} className='object-cover game-logo' />
              <img alt="" src={SandboxLogo} className='object-cover game-logo' />
              <img alt="" src={DustLandLogo} className='object-cover game-logo' />
              <img alt="" src={RevvRacingLogo} className='object-cover game-logo' />
        </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 gallery-scroll-section'>
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
    </>
  );
}

export default App;