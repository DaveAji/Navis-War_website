"use client"
import {useRef, useEffect, useState} from "react";
import Image from 'next/image'

import gsap from "gsap";

import { JoinWaitListbtn, NavisWarLogo } from "@/src/utils/assets"
import useEffectOnce from "@/src/hooks/useEffectOnce";

export default function Home() {
  const [isPreloaderComplete, setPreloaderComplete] = useState(false);

  const timeLine = gsap.timeline({defaults: {}})

  const preloaderCallback = () => {
    setPreloaderComplete(true);
  };

  useEffect(() => {
    if(isPreloaderComplete){
      timeLine.fromTo("#text", {x:-200}, {x:0, opacity:1, delay: 0.8, duration: 1})
      timeLine.fromTo("#logo", {x:-200}, {x:0, opacity:1, delay: 0.8, duration: 1})
      timeLine.fromTo("#joinWaitListBtn", {x:400}, {x:0, opacity:1, delay: 0.8, duration: 1})
    }
  }, [isPreloaderComplete])
  
  
  
  return (
    <section className="bg-cover bg-center min-h-screen flex flex-col gap-36 py-10 items-center overflow-hidden"
   >
      <Preloader onComplete={preloaderCallback}/>
      <VideoBackground {...{isPreloaderComplete}} />
      {isPreloaderComplete &&<>
       <div className="z-[1] opacity-0" id="logo">
        <Image alt="" priority className="" src={NavisWarLogo} />
       </div>

      <h3 id="text" className="relative text-gradient font-Michroma md:text-7xl text-center opacity-0 z-[1]">       
        <div className="flex [&>p]:text-2xl md:[&>p]:text-7xl">
          
            <p className="relative z-10 text-gradient">C</p>
          
          
            <p className="relative z-10 text-gradient">O</p>
          
          
            <p className="relative z-10 text-gradient">M</p>
          
          
            <p className="relative z-10 text-gradient">I</p>
          
          
            <p className="relative z-10 text-gradient">N</p>
          
          
            <p className="relative z-10 text-gradient">G</p>
          
         
        </div>
        <div className="flex justify-center [&>p]:text-2xl md:[&>p]:text-7xl">
        
            <p className="relative z-10 text-gradient">S</p>
          
        
            
            <p className="relative z-10 text-gradient">O</p>
          
        
            
            <p className="relative z-10 text-gradient">O</p>
          
        
            
            <p className="relative z-10 text-gradient">N</p>
          
        
            
            <p className="relative z-10 text-gradient">!</p>
          
        </div>
        </h3>

        <button
          id="joinWaitListBtn"
          className="z-[1] opacity-0 cursor-pointer"
          onClick={()=>window.open('https://forms.gle/E4fVYCaRfFJpuWJX7', '_blank')}
          aria-label="Join Waitlist Button"
        >
          <Image priority alt="Join Waitlist Button" src={JoinWaitListbtn} />
        </button>
      </> }
    </section>
  )
}


const VideoBackground = ({isPreloaderComplete}:{isPreloaderComplete: boolean}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleVideoLoad = () => {
      if(videoElement){
        // console.log('video loaded')
        // setTimeout(() => {
        //   videoElement.play();
        // }, 1200);
      }
    };
    if(videoElement){
      videoElement.addEventListener('loadeddata', handleVideoLoad);
    }

    return () => {
      // Remove the event listener when the component is unmounted
      videoElement && videoElement.removeEventListener('loadeddata', handleVideoLoad);
    };
  }, []);

  useEffect(() => {
    if(isPreloaderComplete && videoRef.current){
      videoRef.current.play()
    }
  }, [isPreloaderComplete, videoRef])

  // useEffect(() => {
  //   const button = document.querySelector("#unmute");
  //   const icon = document.querySelector("#unmute > i");
  //   const video = videoRef.current

  //   if(button && video && icon){
  //     console.log('video is muted', video.muted)
  //     button.addEventListener("click", () => {
  //       if (video.muted) {
  //         video.muted = false;
  //         icon.classList.add('fa-volume-up');
  //         icon.classList.remove('fa-volume-mute');
  //       } else {
  //         video.muted = true;
  //         icon.classList.add('fa-volume-mute');
  //         icon.classList.remove('fa-volume-up');
  //       }
  //     });
  //   }
  // }, [])
  
  
  const toggleMute = () => {
    const videoElement = videoRef.current;
    const icon = document.querySelector("#unmute > i");
    if(videoElement && icon){
      if (videoElement.muted) {
        videoElement.muted = false;
        icon.classList.add('fa-volume-up');
        icon.classList.remove('fa-volume-mute');
      }else{
        videoElement.muted = true
        icon.classList.add('fa-volume-mute');
          icon.classList.remove('fa-volume-up');
      }
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  return (
    <div 
      id="videoBackground" 
      className="fixed top-0 left-0 right-0 bottom-0  w-full h-full overflow-hidden z-[-1] opacity-0" 
      onClick={handlePlayVideo}
      // dangerouslySetInnerHTML={{__html:`
      // `}}
    >
      <button title="mute button" id="unmute" className="absolute top-2 right-2 z-[1]" onClick={toggleMute}><i className="fas fa-volume-mute"></i></button>
      <video ref={videoRef} className=" w-full h-full object-cover" loop muted playsInline>
       <source src="https://d3sorfw0bi0jra.cloudfront.net/navwarVideo.mp4" type="video/mp4" />
       <source src="https://d3sorfw0bi0jra.cloudfront.net/navwarVideo.webm" type="video/webm" />
       Your browser does not support the video tag.
     </video>
    </div>
  );
};


const Preloader = ({onComplete}:{onComplete: ()=>void}) => {
  const [loading, setLoading] = useState(true);
  const timeLine = gsap.timeline({defaults: {duration: 1}})
  useEffectOnce(() => {
    // preloader starts here
    timeLine.to('.pre-loader > .overlay', { top: '75%' })
    timeLine.to('.pre-loader > .overlay', { top: '50%', delay: 0.5 })
    timeLine.to('.pre-loader > .overlay', { top: '25%', delay: 0.5 })
    timeLine.to('.pre-loader > .overlay', { top: '0', delay: 0.5 })
    timeLine.to('.pre-loader', { width: '100%', height: '100vh', left: 0, top: 0, bottom: 0, right: 0, overflow: 'hidden' })
    timeLine.to("#videoBackground", {zIndex: 1, opacity:1})
    timeLine.set('.pre-loader', { zIndex: -20,  onComplete: onComplete })
    // preloader ends here
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
      timeLine.kill(); 
    };
  })
  return (
    <div className="pre-loader">
        <img 
            src="/images/comingSoonHeaderBg2.jpeg" 
            alt="landing page" 
            style={{ width: '100%', height:'100%', objectFit:'cover' }}
          />
        <div className="overlay"></div>
    </div>
  )
}