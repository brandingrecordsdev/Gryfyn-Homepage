// import Logo from '../images/logo.svg'
// import Instagram from '../images/instagram.svg';
// import Twitter from '../images/twitter.svg';
// import LinkedIn from '../images/linkedin.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import NFTVid from '../videos/out.mp4'
import { useRef, useEffect } from "react";

const NFTVideo = () => {
    const NFTvid = NFTVid;

    const NFTvidRef = useRef(null);

useEffect(() => {
const el = NFTvidRef.current;
let video = el;
let src = video.currentSrc || video.src;
console.log(video, src);

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

gsap.registerPlugin(ScrollTrigger);

let NFTtl = gsap.timeline({
  defaults: { duration: 2 },
  scrollTrigger: {
    trigger: "#nft-video-section",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: true
  }
});

once(video, "loadedmetadata", () => {
  NFTtl.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime:  video.duration || 1
    }
  );
});

 
    },[])

    return(
    <>
            <video src={NFTvid} id="nft-video" className="nft-video video-background" playsInline="true" webkit-playsinline="true" preload="auto" muted="muted" ref={NFTvidRef}></video>
    </>
    )
}

export default NFTVideo;