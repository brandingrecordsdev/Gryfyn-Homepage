import NFTVid from '../videos/NFTv1.mp4'
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
