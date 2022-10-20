export default function initGSAPVideo(gsap, settings){
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
            // anticipatePin: 1,
            onLeave: settings.onLeave ? settings.onLeave : () => {},
            onLeaveBack: settings.onLeaveBack ? settings.onLeaveBack : () => {},
            toggleActions: "play reset none reset",
        }
    });
    
    once(video, "loadedmetadata", () => {
        tl.fromTo(
            video, {currentTime: 0}, {currentTime: video.duration || 1}
        );
    });
    
    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    // setTimeout(function () {
    //     if (window["fetch"]) {
    //         fetch(src)
    //         .then((response) => response.blob())
    //         .then((response) => {
    //             var blobURL = URL.createObjectURL(response);
        
    //             var t = video.currentTime;
    //             once(document.documentElement, "touchstart", function (e) {
    //             video.play();
    //             video.pause();
    //             });
        
    //             video.setAttribute("src", blobURL);
    //             video.currentTime = t + 0.01;
    //         });
    //     }
    // }, 1000);
    
}