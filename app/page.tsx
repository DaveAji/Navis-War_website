"use client"
import React, {useState, useEffect, useRef} from 'react'
import Link from "next/link"
import Image from "next/image"

import { 
  RoadMap2, 
  NavLogo, 
  LogoSectionLanding, 
  AboutNavisImg,
   HowToPlay, 
   WarShip,
   WarTank, 
   CommunitySpeaker, 
   CommunityCup, 
   CommunityShield, 
   WarSubmarine, 
   RoadMap, 
   WarTank2, 
   MobileApp, 
   WarTank3,
   GameConcept1,
  GameConcept2,
  GameConcept3,
  GameConcept4,
  GameConcept5,
  GameConcept6,
  MarketPlace1,
  MarketPlace2,
  MarketPlace3,
  PlaystoreLogo,
  AppleLogo,
  xIcon,
  telegramIcon,
  discordIcon,
  instagramIcon,
  // Team1,
  // Team2,
  // Team3,
  // Team4,
  PaginateLeft,
  PaginateRight,
  MobileHamburger,
  LeftBottom,
  RightTop,
  ButtonImg,
  RightArrow
  } from "@/src/utils/assets"
import {Button} from '../src/components'
import {Animate} from '../src/utils'
import useWindowSize from '../src/hooks/useWindowSize'


const Page = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [width] = useWindowSize();
  const [isMobileView, setIsMobileView] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const secondDivRef = useRef<HTMLDivElement | null>(null);
  const [isFirstDivOutOfViewport, setIsFirstDivOutOfViewport] = useState(false);

  useEffect(() => {
    if (width && width < 768) {
      setIsMobileView(true);
      setSidebarOpen(false);
    }
    if (width && width > 768) {
      setIsMobileView(false);
      setSidebarOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFirstDivOutOfViewport(!entry.isIntersecting);
      },
      { threshold: 0 } // Trigger when the entire first div is out of the viewport
    );

    if (firstDivRef.current) {
      observer.observe(firstDivRef.current);
    }

    // Cleanup
    return () => {
      if (firstDivRef.current) {
        observer.unobserve(firstDivRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isFirstDivOutOfViewport && secondDivRef.current) {
      // Show the second div and set its position to sticky
      secondDivRef.current.style.display = 'block';
      secondDivRef.current.style.position = 'fixed';
      // You can adjust the top position of the sticky div as needed
      secondDivRef.current.style.top = '0';
    } else if (secondDivRef.current) {
      // Hide the second div
      secondDivRef.current.style.display = 'none';
    }
  }, [isFirstDivOutOfViewport]);

  return (
    <>
      <div className="text-white overflow-x-hidden">
        <nav className="bg-black justify-around items-center text-white py-10 px-5 hidden md:flex"> 
          <div className="w-[12.375rem] h-[4.1156rem] cursor-pointer">
            <Image src={NavLogo} alt="" />
          </div>
              <ul  className="font-Goldman flex justify-around gap-7 items-center text-sm font-normal leading-[20px] text-secondary-100">
                <li><Link  href="#about">ABOUT</Link> </li>
                <li><Link href="#how-to-play">HOW TO PLAY</Link> </li>
                <li><Link href="#community">COMMUNITY</Link> </li>
                <li><Link href="#get-app">GET APP</Link> </li>
                <li><Link href="#road-map">ROAD MAP</Link> </li>
                <li><Link href="/">WAITLIST</Link> </li>
              </ul>
              <div className="flex items-center gap-7 text-white font-Goldman text-sm font-normal leading-[20px]">
                <Link href="">SIGN UP</Link>
                <Button label="WHITE PAPER" />
            </div>
        </nav>
        {/* Mobile nav */}
        <nav className="bg-black py-10 px-5 flex justify-between md:hidden">
          <div className="w-[12.375rem] h-[4.1156rem] cursor-pointer">
            <Image src={NavLogo} alt="" />
          </div>
          <Image onClick={()=>setSidebarOpen(true)} alt="" src={MobileHamburger} />
        </nav>
        {sidebarOpen &&<aside className="bg-black fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center md:hidden z-[100]">
        {/* {sidebarOpen && <button className="absolute right-4 top-10 z-[3] text-white" onClick={()=>setSidebarOpen(false)}>Close</button>} */}
        {sidebarOpen &&  <Image className="absolute right-4 top-10 z-[3] text-white" onClick={()=>setSidebarOpen(false)} alt="" src={MobileHamburger} />}
        <ul className="font-Goldman flex flex-col justify-around gap-10 items-center text-sm font-normal leading-[20px] text-secondary-100">
                <li onClick={()=>setSidebarOpen(false)}><Link  href="#about">ABOUT</Link> </li>
                <li onClick={()=>setSidebarOpen(false)}><Link href="#how-to-play">HOW TO PLAY</Link> </li>
                <li onClick={()=>setSidebarOpen(false)}><Link href="#community">COMMUNITY</Link> </li>
                <li onClick={()=>setSidebarOpen(false)}><Link href="#get-app">GET APP</Link> </li>
                <li onClick={()=>setSidebarOpen(false)}><Link href="#road-map">ROAD MAP</Link> </li>
                <li onClick={()=>setSidebarOpen(false)}><Link href="/">WAITLIST</Link> </li>
              </ul>
        </aside>}
        {/* Mobile nav ends here*/}
        <section ref={firstDivRef} id="stickyNav" className="bg-secondary-400 top-0 left-0 right-0 z-50">
       
          <div className="wrapper">
            <div className="text-scrolling">
              <div className="row row-2">
                <p className="text-secondary-500 font-Michroma text-[0.75rem] md:text-[1.45rem] font-normal leading-[35px] cursor-pointer" onClick={()=>window.open('https://zealy.io/c/naviswar', '_blank')}>
                  Navis&nbsp;&nbsp;War&nbsp;&nbsp;AirDrop&nbsp;&nbsp;Ongoing <Image alt=""  src={RightArrow} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  Navis&nbsp;&nbsp; War&nbsp;&nbsp; AirDrop&nbsp;&nbsp; Ongoing&nbsp;&nbsp; <Image alt=""  src={RightArrow} /></p>
               
              </div>
            </div>
          </div>
        </section>
        {/* Header section */}
        <div id="" className="bg-coverr bg-center min-h-screen flex py-10 md:py-0 items-center justify-center"
        style={{ backgroundImage: `url('/images/heroBG.jpeg')` }}>
          <div className="text-white text-center w-11/12 md:w-full mx-auto">
          <h3 className="font-Coda text-[1.25rem] md:text-6xl font-extrabold mb-1 md:mb-5 text-border-red text-gradient">
            GET{'   '}&nbsp; READY {'   '}&nbsp;TO
          </h3>
          <h2 className="font-Stalinist text-[2.5rem] md:text-8xl font-normal text-border-gradient">BATTLE</h2>
          <p className="text-white text-xs md:text-lg font-semibold mb-16">
            Join the fray in Navis War, a gripping naval battle game that immerses you in the heart of intense <br className="hidden md:block" />
            sea warfare. Assemble your fleet, strategize your moves, and engage in epic battles against <br className="hidden md:block" />
              formidable opponents.
          </p>
          <div className="hidden md:flex justify-center mr-[-20px] md:mr-0">
            <div className="cutoutEdgeInput w-[30px]"></div>
            <input className="bg-secondary-300 border hidden md:block border-secondary-300 w-[30%] outline-none focus:outline-none active:outline-none text-black focus:text-black" placeholder="Your Email Address" type="text" />
            <input className="bg-secondary-300 border block md:hidden border-secondary-300 w-[30%] outline-none focus:outline-none active:outline-none text-black focus:text-black" placeholder="Your Email" type="text" />
            {/* <Button label="GET NOTIFIED" /> */}
            <div role="button" onClick={()=>{}} className={`flex justify-center cursor-pointer`}>
              <div className="relative">
              <Image alt="" className={`h-full`} src={ButtonImg} priority />
              <p className="center-absolute-content w-full text-center font-Saira text-[12px] md:text-lg font-medium leading-[20px] text-white capitalize" style={{ whiteSpace: 'nowrap' }}>GET NOTIFIED</p>
            </div>
            </div>
          </div>
          {/* mobile */}
          <div className="flex justify-center mr-[-20px] min-h-[66px] md:mr-0 md:hidden">
            <div className="cutoutEdgeInput w-[30px] h-[66px]"></div>
            <input className="bg-secondary-300 h-[66px] block md:hidden  border-secondary-300 md:w-[30%] outline-none focus:outline-none active:outline-none text-black focus:text-black" placeholder="Your Email" type="text" />
            <div role="button" onClick={()=>{}} className={`flex justify-center cursor-pointer w-[27%] h-[66px]`}>
              <div className="relative h-[66px]">
              <Image alt="" className={`h-[66px] object-cover `} src={ButtonImg} priority />
              
              <p className="center-absolute-content w-full text-center font-Saira text-[14px] md:text-lg font-medium leading-[20px] text-white capitalize" style={{ whiteSpace: 'nowrap' }}>GET NOTIFIED</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        {/* LOGO section */}
        <div
          className="md:min-h-96 bg-cover bg-center flex py-14 md:py-0 justify-center items-center" 
          style={{ backgroundImage: `url('/images/bg2.jpeg')` }}
        >
          <div {...Animate('zoom-in', 100, 'ease-in')} className="w-[80%] md:w-[30%] h-[100px] md:h-fit">
            <Image alt="" src={LogoSectionLanding}  />
          </div>
        </div>
        {/* About navis */}
        <div id="about" className="min-h-screen bg-black py-32 relative">
          <div className="min-h-[80vh] bg-cover bg-center py-20 flex justify-center" style={{ backgroundImage: `url('/images/aboutBG.png')` }}>
            <div className="text-white w-[84%]">
              <h3 className="pb-20 text-center font-Alien  font-normal text-gradient text-lg md:text-6xl">ABOUT NAVIS WAR</h3>
              <div className="flex gap-24 flex-col md:flex-row">
                <div {...Animate('zoom-in', 100, 'ease-in')} className="w-full  md:w-[50%] ">
                  <Image src={AboutNavisImg} className="w-full" alt=""/>
                </div>
                <div {...Animate('zoom-in', 100, 'ease-in')} className="w-full md:w-[50%]">
                  <p className="w-full font-Saira text-[1.25rem] text-center md:text-left font-normal leading-[2.4375rem] mb-16">
                  Navis War is not just a game; it&apos;s an experience that <br className="hidden md:block" />
                  transports you to a world of maritime conquest.  <br className="hidden md:block" />
                  Dive into the rich history of naval warfare, where <br className="hidden md:block" />
                    every decision you make shapes the course of epic  <br className="hidden md:block" />
                    battles. Whether you&apos;re a seasoned commander or <br className="hidden md:block" />
                    a novice sailor, the seas await your command.
                  </p>
                  <Button onClick={()=>window.open('https://forms.gle/E4fVYCaRfFJpuWJX7', '_blank')} containerClassName="justify-center md:!justify-start"/>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px] move-accross-right">
          <Image 
            src={WarShip} 
            className=""
            fill
            alt=""
          />
          </div>
        </div>
        {/* How to play */}
          <div id="how-to-play" className="min-h-screen bg-cover bg-black bg-center flex py-32 justify-center relative" style={{ backgroundImage: `url('/images/howToPlayBG.png')` }}>
            <div className="w-[80%] text-white">
              <h3 {...Animate('fade-left', 100, 'ease-in')} className="pb-20 text-center text-gradient text-lg md:text-6xl font-Alien font-normal mb-10">HOW TO PLAY</h3>
              <div className="relative h-[80%]">
                <div {...Animate('zoom-in', 100, 'ease-in')} className="w-full md:w-[50%] mx-auto relative">
                  <Image src={HowToPlay} className="w-full" alt="" />
                <div {...Animate('fade-down-right', 100, 'ease-in')} className="md:absolute text-center md:text-left top-[-68px] left-[-296px] mb-10">
                  <h5 className="text-gradient font-Alien text-[2rem] font-normal">MULTIPLAYER</h5>
                  <ul className="list-disc font-Saira text-sm font-normal leading-[27px]">
                  <li>Participate in regular tournaments <br className="hidden md:block" /> {' '}to prove your naval prowess.</li>
                    <li>Stay updated on upcoming in-game{' '}<br className="hidden md:block" />
                    events and community challenges.</li>
                  </ul>
                </div>
                <div {...Animate('fade-down-left', 100, 'ease-in')} className="md:absolute text-center md:text-left  top-[-68px] right-[-356px] mb-10">
                  <h5 className="text-gradient font-Alien text-[2rem] font-normal">ONLINE QUICK MATCH</h5>
                  <p className="font-Saira text-sm font-normal leading-[27px]">
                  Navigate through various mission types, each <br className="hidden md:block" /> with its own set of objectives.
                  </p>
                </div>
                <div {...Animate('fade-up-right', 100, 'ease-in')} className="md:absolute text-center md:text-left  bottom-[-62px] left-[-365px] mb-10">
                  <h5 className="text-gradient font-Alien text-[2rem] font-normal">TOURNAMENT</h5>
                  <p className="font-Saira text-sm font-normal leading-[27px]">
                  Discover the special abilities of each ship class.<br className="hidden md:block" />
                  From devastating artillery barrages to strategic <br className="hidden md:block" />
                    reconnaissance, unleash the power of your fleet&apos;s <br className="hidden md:block" /> unique skills.

                  </p>
                </div>
                <div {...Animate('fade-up-left', 100, 'ease-in')} className="md:absolute text-center md:text-left  bottom-[-62px] right-[-296px] mb-10">
                  <h5 className="text-gradient font-Alien text-[2rem] font-normal">MULTIPLAYER</h5>
                  <p className="font-Saira text-sm font-normal leading-[27px]">
                    Participate in regular tournaments<br className="hidden md:block" />
                    {' '} to prove your naval prowess.<br className="hidden md:block" />
                    {' '}Stay updated on upcoming in-game{' '}<br className="hidden md:block" />
                    events and community challenges.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div {...Animate('slide-right', 100, 'ease-in')} className="absolute bottom-[-100px] left-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px] move-accross">
              <Image  src={WarTank} alt="" className="" />
            </div>
          </div>

        {/* community */}
        <div id="community" className="min-h-screen bg-black pt-24 pb-48 relative">
          <div className="min-h-[80vh] bg-cover bg-center flex flex-col text-white py-16" style={{ backgroundImage: `url('/images/communityBG.png')` }}>
            <div {...Animate('slide-down', 100, 'ease-in')} className="text-center mb-20">
              <h3 className="text-gradient font-Alien text-lg md:text-6xl font-normal">COMMUNITY</h3>
              <h5 className="font-Saira text-xs md:text-[2rem] font-bold leading-[42px]">
              Join the Navis War Community: <br/> <span className="font-normal">
                Forge Alliances, Share Strategies, Conquer Together
                </span> 
              </h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-10/12 mx-auto">
              <div {...Animate('flip-left', 100, 'ease-in')} className=" px-10 py-14 cutoutEdge">
                <div className="flex justify-center mb-14">

                <Image src={CommunitySpeaker} alt="" className="" />
                </div>
                <h4 className="font-Saira text-md font-bold leading-[42px] text-center">
                Forums and Discussion Boards
                </h4>
                <ul className="list-disc font-Saira text-[1rem] font-normal leading-[27px]">
                  <li>Engage in lively discussions about strategies, tactics, and the latest updates.</li>
                  <li>Create and join threads to discuss specific aspects of the game, from ship customization to battle tactics.</li>
                </ul>
              </div>
              <div {...Animate('flip-left', 400, 'ease-in')} className=" px-10 py-14 cutoutEdge">
                <div className="flex justify-center mb-14">
                  <Image src={CommunityCup} alt="" className="" />
                </div>
                <h4 className="font-Saira text-md font-bold leading-[42px] text-center">
                Tournaments and Events
                </h4>
                <ul className="list-disc font-Saira text-[1rem] font-normal leading-[27px]">
                  <li>Participate in regular tournaments to prove your naval prowess.</li>
                  <li>Stay updated on upcoming in-game events and community challenges.</li>
                </ul>
              </div>
              <div {...Animate('flip-left', 700, 'ease-in')} className=" px-10 py-14 cutoutEdge">
                <div className="flex justify-center mb-14">
                  <Image src={CommunityShield} alt="" className="" />
                </div>
                <h4 className="font-Saira text-md font-bold leading-[42px] text-center">
                Player Spotlights
                </h4>
                <ul className="list-disc font-Saira text-[1] font-normal leading-[27px]">
                  <li>Celebrate the achievements of top commanders with regular player spotlights.</li>
                  <li>Share your own successes and strategies to inspire and guide fellow players.</li>
                </ul>
              </div>
            </div>
          </div>
          <div 
            className="fixed left-5 md:left-8 top-[30%] md:p-3 !py-10 cutoutEdgeSocial z-[1] min-h-[100px] flex flex-col gap-10"
          >
            <Image src={xIcon} alt="" onClick={()=>window.open('https://x.com/naviswargame?t=EpROkGC7epzPanrTqvs3qw&s=08', "_blank")} className="cursor-pointer" />
            <Image src={telegramIcon} onClick={()=>window.open('https://t.me/naviswargame', "_blank")} className="cursor-pointer" alt=""  />
            <Image src={discordIcon} onClick={()=>window.open('https://discord.gg/nqtkgTMk', "_blank")} className="cursor-pointer" alt="" />
            <Image src={instagramIcon} onClick={()=>window.open('https://www.instagram.com/naviswargame/', "_blank")} className="cursor-pointer" alt="" />
          </div>
        </div>
        {/* road map */}
        <div 
          id="road-map" 
          className="flex flex-col justify-between bg-black bg-cover bg-center text-center text-white pt-10 md:pb-64 relative" 
          style={{ backgroundImage: `url('/images/roadmapBG.png')` }}
        >
          <h3 className="pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">ROADMAP</h3>
          <div className="w-[80%] mx-auto">
            <Image src={RoadMap} alt="" className="hidden md:block" />
            <Image src={RoadMap2} alt="" className="block md:hidden" />
          </div>
          <div {...Animate('slide-left', 100, 'ease-in')} className="custom-spin absolute top-[-200px] right-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px]">
            <Image  src={WarSubmarine} alt="" className="" />
          </div>
          <div  {...Animate('slide-right', 100, 'ease-in')} className=" move-accross absolute bottom-[-100px] left-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px]">
            <Image src={WarTank2} alt="" className="" />
          </div>
        </div>


        {/* game concept */}
        <div className="min-h-screen bg-black pt-48 pb-24">
          <div className="min-h-[80vh] bg-cover bg-center text-center text-white py-16" style={{ backgroundImage: `url('/images/gameConceptBG.png')` }}>
            <h3 className="mb-9 pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">GAME CONCEPT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 gap-10 mx-auto">
              <div {...Animate('flip-left', 100, 'ease-in')} className="h-[300px]">
                <Image src={GameConcept1} alt="image"/>
              </div>
              <div {...Animate('flip-left', 400, 'ease-in')} className="h-[300px]"> <Image src={GameConcept2} alt="image"/></div>
              <div {...Animate('flip-left', 700, 'ease-in')} className="h-[300px]"> <Image src={GameConcept3} alt="image"/></div>
              <div {...Animate('flip-left', 1000, 'ease-in')} className="h-[300px]"> <Image src={GameConcept4} alt="image"/></div>
              <div {...Animate('flip-left', 1300, 'ease-in')} className="h-[300px]"> <Image src={GameConcept5} alt="image"/></div>
              <div {...Animate('flip-left', 1600, 'ease-in')} className="h-[300px]"> <Image src={GameConcept6} alt="image"/></div>
            </div>
          </div>
        </div>
        {/* market place */}
        <div className="min-h-screen bg-black py-24">
          <div className="min-h-[100vh] bg-cover bg-center text-center text-white py-16 relative" style={{ backgroundImage: `url('/images/gameConceptBG.png')` }}>
            <h3 {...Animate('slide-down', 100, 'ease-in')} className="mb-9 pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">MARKETPLACE</h3>
            <div className="justify-end gap-3  w-10/12 mx-auto mb-7 hidden md:flex">
            <Image role="button" alt="" src={PaginateLeft} />
            <Image role="button" alt="" src={PaginateRight} />
            {/* PaginateLeft,
    PaginateRight */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 gap-32 md:gap-7 mx-auto">
              <div {...Animate('flip-right', 100, 'ease-in')} className="h-[300px]">     
              <Image src={MarketPlace1} alt="image"/>
              </div>
              <div {...Animate('flip-right', 400, 'ease-in')} className="h-[300px]"><Image src={MarketPlace2} alt="image"/></div>
              <div {...Animate('flip-right', 700, 'ease-in')} className="h-[300px]"><Image src={MarketPlace3} alt="image"/></div>
            </div>

            <Button containerClassName="mt-64" label="LEARN MORE"/>
            <div {...Animate('slide-left', 100, 'ease-in')} className="custom-spin absolute top-[-200px] right-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px]">
              <Image  src={WarSubmarine} alt="" fill className="" />
            </div>
          </div>
        </div>
        {/* get the app */}
        <div id="get-app" className="min-h-screen bg-black pt-24 pb-64 md:py-24">
          <div className="min-h-[100vh] bg-cover bg-center text-center text-white md:py-16 relative" style={{ backgroundImage: `url('/images/gameConceptBG.png')` }}>
            <h3 {...Animate('slide-down', 100, 'ease-in')} className="mb-9 pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">GET THE APP</h3>
            <div className="flex flex-col md:flex-row w-9/12 gap-7 mx-auto">
              <div {...Animate('slide-right', 100, 'ease-in')} className="w-full md:w-[50%] mx-auto flex justify-center">
                <Image 
                  alt="mobile phone" 
                  height={500}
                  objectFit="cover" 
                  src={MobileApp} 
                  className="" 
                />
              </div>
              <div {...Animate('slide-left', 100, 'ease-in')} className="h-[300px] w-full md:w-[50%] text-left pt-16">
                <p className="font-Saira text-sm font-normal leading-[27px] text-center md:text-left">
                Navis War is not just a game; it&apos;s an experience that<br className="hidden md:block" />
                {' '}transports you to a world of maritime conquest. Dive{' '}<br className="hidden md:block" />
                  into the rich history of naval warfare, where every{' '}<br className="hidden md:block" />
                  decision you make shapes the course of epic battles.{' '}<br className="hidden md:block" />
                    Whether you&apos;re a seasoned commander or a novice{' '}<br className="hidden md:block" />
                    sailor, the seas await your command.
                </p>
                <div className="flex flex-col md:flex-row gap-3 my-4">
                  <button className="bg-black flex rounded-md border border-white py-2 px-5 gap-3 items-center">
                    <Image alt="" src={AppleLogo} />
                    <p className="text-sm font-normal">
                      Download on the 
                      <span className="block text-xl">App Store</span>
                    </p>
                  </button>
                  <button className="bg-black flex rounded-md border border-white py-2 px-5 gap-3 items-center">
                    <Image src={PlaystoreLogo} alt="" />
                    <p className="text-sm font-normal">
                    GET IT ON
                      <span className="block text-xl">Google Play</span>
                    </p>
                  </button>
                </div>
              <Button onClick={()=>window.open('https://forms.gle/E4fVYCaRfFJpuWJX7', '_blank')} containerClassName="mt-3 flex !justify-start" />
              </div>
            </div>
            <div {...Animate('slide-left', 100, 'ease-in')} className="move-accross-right absolute bottom-[-353px] md:bottom-[-110px] right-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px] ">
              <Image 
                src={WarTank3} 
                alt="" 
                className="" />
            </div>
          </div>
        </div>
        {/* game demo */}
        <div className="min-h-screen bg-black py-24">
          <div className="min-h-[80vh] bg-cover bg-center text-center text-white py-16 relative" style={{ backgroundImage: `url('/images/gameConceptBG.png')` }}>
            <h3 {...Animate('slide-down', 100, 'ease-in')} className="mb-9 pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">GAME DEMO</h3>
            <div className="flex w-9/12 gap-7 mx-auto">
            <div className="cutoutEdge2 relative min-h-[500px]">
              <Image alt="" src={LeftBottom} className="absolute bottom-[-19px] left-[-40px] md:bottom-[-30px] md:left-[-120px]"/>
              <Image alt="" src={RightTop} className="absolute top-[-17px] right-[-40px] md:top-[-30px] md:right-[-120px]"/>
              <div className="w-full h-full">
                <video className="inset-0 w-full h-full object-cover" loop muted>
                  <source src="https://d3sorfw0bi0jra.cloudfront.net/navwarVideo.mp4" type="video/mp4" />
                  <source src="https://d3sorfw0bi0jra.cloudfront.net/navwarVideo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            </div>
            <div {...Animate('slide-right', 100, 'ease-in')} className="move-accross absolute bottom-[-100px] left-0 z-[1] w-[150px] h-[75px] md:w-[300px] md:h-[150px]">
              <Image  src={WarTank} alt="" className="" />
            </div>
          </div>
        </div>
        {/* team */}
        {/* <div className="min-h-screen bg-black py-24">
          <div className="min-h-[80vh] bg-cover bg-center text-center text-white py-36 md:py-16" style={{ backgroundImage: `url('/images/gameConceptBG.png')` }}>
            <h3 className="mb-9 pb-10 text-center text-gradient text-lg md:text-6xl font-Alien font-normal">TEAM</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 w-9/12 gap-36 md:gap-7 mx-auto">
              <div {...Animate('flip-right', 100, 'ease-in')} className="h-[300px]">     
                <Image className="mb-3" src={Team1} alt="image"/>
                <h5 className="text-gradient font-Alien text-[2rem] font-normal text-center">JOHN DOE</h5>
                <p className="text-white text-center font-Saira text-sm font-normal leading-[17px]">EXECUTIVE DIRECTOR</p>
              </div>
              <div {...Animate('flip-right', 100, 'ease-in')} className="h-[300px]">     
                <Image className="mb-3" src={Team2} alt="image"/>
                <h5 className="text-gradient font-Alien text-[2rem] font-normal text-center">JOHN DOE</h5>
                <p className="text-white text-center font-Saira text-sm font-normal leading-[17px]">EXECUTIVE DIRECTOR</p>
              </div>
              <div {...Animate('flip-right', 100, 'ease-in')} className="h-[300px]">     
                <Image className="mb-3" src={Team3} alt="image"/>
                <h5 className="text-gradient font-Alien text-[2rem] font-normal text-center">JOHN DOE</h5>
                <p className="text-white text-center font-Saira text-sm font-normal leading-[17px]">EXECUTIVE DIRECTOR</p>
              </div>
              <div {...Animate('flip-right', 100, 'ease-in')} className="h-[300px]">     
                <Image className="mb-3" src={Team4} alt="image"/>
                <h5 className="text-gradient font-Alien text-[2rem] font-normal text-center">JOHN DOE</h5>
                <p className="text-white text-center font-Saira text-sm font-normal leading-[17px]">EXECUTIVE DIRECTOR</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* footer */}
        <footer className="bg-primary-100 text-white font-Saira">
          <div className="w-[80%] mx-auto py-24 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%]">
              <h3 className="text-[2rem] font-bold leading-[80px]">Quicklinks</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 font-Saira text-lg font-normal">
                <li >
                  <Link href="#about">About</Link>
                </li>
                <li className="">
                <Link href="/">Download links</Link>
                </li>
                <li className="">
                <Link href="/">Career</Link>
                </li>
                <li className="">
                <Link href="/">Privacy policy /Legal</Link>
                </li>
                <li className="">
                <Link href="/">Waitlist</Link>
                </li>
                <li className="">
                <Link href="/">Agreement</Link>
                </li>
                <li className="">
                <Link href="#get-app">Get the App</Link>
                </li>
                <li className="">
                <Link href="/">Terms and Condition</Link>
                </li>
                <li className="">
                <a href="https://medium.com/@naviswar816" target="_blank">Newsletter</a>
                </li>
                <li className="">
                <a target="_blank" href="mailto:info@naviswar.com">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="cutoutEdge-brown w-full md:w-[60%] py-16">
                  <h5 className="mb-4">Subscribe to our  Newsletter</h5>
                  <div className="flex">
                    <input className="border border-red-600 pl-2" placeholder="EMAIL US" type="text" />
                    <Button label="SUBSCRIBE" />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Image src={xIcon} onClick={()=>window.open('https://x.com/naviswargame?t=EpROkGC7epzPanrTqvs3qw&s=08', '_blank')} alt="" />
                    <Image src={telegramIcon} onClick={()=>window.open('https://t.me/naviswargame', "_blank")} alt="" />
                    <Image src={discordIcon} onClick={()=>window.open('https://discord.gg/nqtkgTMk', "_blank")} alt="" />
                    <Image src={instagramIcon} onClick={()=>window.open('https://www.instagram.com/naviswargame/', '_blank')} alt="" />
                  </div>
              </div>
                  <div className="w-[12.375rem] h-[4.1156rem] ml-20 cursor-pointer">
                    <Image src={NavLogo} alt="" />
                  </div>
            </div>
          </div>
        </footer>
      </div>
      <div ref={secondDivRef} style={{ display: 'none' }} className="bg-secondary-400 top-0 fixed left-0 right-0 z-50">
      <div className="wrapper">
            <div className="text-scrolling">
              <div className="row row-2">
                <p className="text-secondary-500 font-Michroma text-[0.75rem] md:text-[1.45rem] font-normal leading-[35px] cursor-pointer" onClick={()=>window.open('https://zealy.io/c/naviswar', '_blank')}>Navis War AirDrop Ongoing <Image alt=""  src={RightArrow} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Navis War AirDrop Ongoing <Image alt=""  src={RightArrow} /></p>
               
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Page