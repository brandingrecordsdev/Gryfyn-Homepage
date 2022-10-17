export default function initGSAPVideo(gsap, settings){
    console.log(gsap)
    console.log(settings)
    /* The encoding is super important here to enable frame-by-frame scrubbing. */
    
    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4
    
    const video = document.querySelector(settings.vidSelector);
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
    
    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });
    
    /* ---------------------------------- */
    /* Scroll Control! */
        
    let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            pin: settings.pin,
            trigger: settings.trigger,
            start: settings.start ? settings.start : 'top top',
            end: settings.end ? settings.end : 'bottom bottom',
            scrub: settings.scrub ? settings.scrub : true,
            markers: true,
        }
    });
    
    once(video, "loadedmetadata", () => {
        tl.fromTo(
            video, {currentTime: 0}, {currentTime: video.duration || 1}
        );
    });
    
    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
        if (window["fetch"]) {
            fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);
        
                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                video.play();
                video.pause();
                });
        
                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
            });
        }
    }, 1000);
    
}