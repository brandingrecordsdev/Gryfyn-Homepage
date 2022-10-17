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
  useEffect(() => {},[])

  return(
    <>
      <video src={NFTvid} id="nft-video" className="nft-video video-background"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted" ref={NFTvidRef}></video>
    </>
  )
}

export default NFTVideo;
