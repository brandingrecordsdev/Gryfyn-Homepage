import { useRef} from "react";

const VideoScroll = ({ vid, pin, id }) => {
  let video = vid;
  const videoRef = useRef(null);
  return(
  <>
      <video id={id} src={video} className="scrolling-video"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted" ref={videoRef}></video>
  </>
  )
}

export default VideoScroll;