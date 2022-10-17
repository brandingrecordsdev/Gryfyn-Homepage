// import Logo from '../images/logo.svg'
// import Instagram from '../images/instagram.svg';
// import Twitter from '../images/twitter.svg';
// import LinkedIn from '../images/linkedin.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import NFTVid from '../videos/GryfnNFT3.mp4'
import { useRef, useEffect } from "react";

const NFTVideo = () => {
    const NFTvid = NFTVid;

    const NFTvidRef = useRef(null);

useEffect(() => {
let el = NFTvidRef.current;
let video = el;
let src = video.currentSrc || video.src;
console.log(video, src);
/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
  trigger: video,
  pin: true,
  scrub: 2,
  start: "top",
  end: "+=650",
  pinSpacing: false,
  markers: true,
  refreshPriority: 1,
  onUpdate: function(self) { 
    if(NFTvidRef.current) {
      let scrollPos = self.progress;
      let videoDuration = NFTvidRef.current.duration;
      let videoCurrentTime = videoDuration * scrollPos;
      
      if(videoCurrentTime) {
        NFTvidRef.current.currentTime = videoCurrentTime;
      }
      
      // console.log(videoDuration, scrollPos, videoCurrentTime)
    }
  },
  onComplete: () => ScrollTrigger.refresh(),
  anticipatePin: 1
})
 
    },[])

    return(
    <>
        <video src={NFTvid} id="nft-video" className="nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted" ref={NFTvidRef}></video>
    </>
    )
}

export default NFTVideo;