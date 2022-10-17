// import logo from './logo.svg';
import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Nav from './components/Nav';
import Hero from './components/Hero';
import SVG from './components/SVG'
import Carousel from './components/Carousel'
import VideoScroll from './components/VideoScroll'
import PhoneHero from "./images/phone-hero.png";
import NFTvideo from './components/NFTvideo';
import vidGallery from './videos/out.mp4';
import Diamond from './videos/GryfynDiamond.mp4';
import Banner from './images/banner.png';
import Banner2 from './images/banner.png';
import MotoGPGraphic from './images/MotoGPBanner.png';
import { useEffect } from 'react';

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

function App() {
  useEffect(() => {
    initHeroGsap()
    initNFTVideo()
    initVideoScrollGsap('video-1', '.features')
    initVideoScrollGsap('video-2', '.diamond')
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
      </section>    
      <section className='flex items-start justify-center py-16 text-center bg-beige gap-28 text-body'>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='star' classes='w-40'/>
          <h2 className='text-4xl font-title'>Create</h2>
          <p className='font-body max-w-[13rem]'>
            The world of the future, and witness the boundless possibilities of your mind.
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='sun' classes='w-40' fill_1='#FFCC31' fill_2='#F16B37'/>
          <h2 className='text-4xl font-title'>Play</h2>
          <p className='flex flex-col items-center font-body'>
            <span className='max-w-[12rem]'>Any roles of your desire, fulfill your fantasies. </span>
            <span>Bring utility to its full potential.</span>
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <div className='flex justify-center gap-2 py-12'>
            <div className='w-16 h-16 bg-[#0167A2]'></div>
            <div className='w-16 h-16 bg-[#FFCC31]'></div>
          </div>
          <h2 className='text-4xl font-title'>Socialise</h2>
          <p className='font-body max-w-[19rem]'>
            Communicate with those who inspire us to explore the boundaries of imagination from a new perspective.
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='eye' classes='w-40'/>
          <h2 className='text-4xl font-title'>Explore</h2>
          <p className='font-body max-w-[16rem]'>
            Go on the journey that is unique to you, and watch Web 3 grow as you grow with it.
          </p>
        </div>                        
      </section>   
      <section className="features">
        <VideoScroll id='video-1' vid={vidGallery} pin={'.features'}/>
      </section>    
      <section className="features diamond">
        <VideoScroll id='video-2' vid={Diamond} pin={'.diamond'}/>
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
