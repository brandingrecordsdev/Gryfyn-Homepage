import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef, useEffect } from "react";

const VideoScroll = ({ vid, pin }) => {
    let video = vid;
    let pinnedSection = pin;

    const videoRef = useRef(null);

useEffect(() => {
const el = videoRef.current;
let video = el;
console.log(video)
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

let vidTL = gsap.timeline({
  // defaults: { duration: 2 },
  scrollTrigger: {
    trigger: pinnedSection,
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: true,
    // toggleActions: "play pause resume pause"

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

 
    },[])

    return(
    <>
        <video src={video} className="scrolling-video"  webkit-playsinline="true" playsInline={true} preload="auto" muted="muted" ref={videoRef}></video>
    </>
    )
}

export default VideoScroll;