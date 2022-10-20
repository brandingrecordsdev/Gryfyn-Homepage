import { useEffect } from 'react'
import SVG from './SVG'

export default function LoadingScreen(){
    useEffect(() => {
        const sunLoader = document.getElementById("sun-loader");

        document.body.style.overflow = "hidden";

        let timeout = setTimeout(() => {
            document.body.style.overflow = "auto";
            sunLoader.style.display = "none";
        }, 3600);
        
        return () => {
            clearTimeout(timeout)
        }
    }, []);    
    
    return (<>
        <div id="sun-loader" className='absolute top-0 left-0 flex w-screen h-screen bg-transparent tablet:flex-col'>
            <div className='w-screen h-auto bg-black tablet:h-screen'></div>
            <svg id="sun-loader" className='w-auto h-screen tablet:w-screen tablet:h-auto shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280">
                <g>
                    <path fill='black' d="M0,0V1280H1280V0H0ZM640,682.88c-23.68,0-42.88-19.2-42.88-42.88s19.2-42.88,42.88-42.88,42.88,19.2,42.88,42.88-19.2,42.88-42.88,42.88Z"/>
                    <path className="loading-sun" d="M748.75,641.05c-17.96,5.99-33.96,14.05-47.98,24.12,2.79,17.04,8.41,34.05,16.87,50.98l1.49,2.97-2.97-1.49c-16.93-8.47-33.94-14.08-50.98-16.87-10.07,14.02-18.13,30.02-24.12,47.98l-1.05,3.15-1.05-3.15c-5.99-17.96-14.05-33.96-24.12-47.98-17.04,2.79-34.05,8.41-50.98,16.87l-2.97,1.49,1.49-2.97c8.47-16.93,14.08-33.94,16.87-50.98-14.02-10.07-30.02-18.13-47.98-24.12l-3.15-1.05,3.15-1.05c17.96-5.99,33.96-14.05,47.98-24.12-2.79-17.04-8.41-34.05-16.87-50.98l-1.49-2.97,2.97,1.49c16.93,8.47,33.94,14.08,50.98,16.87,10.07-14.02,18.13-30.02,24.12-47.98l1.05-3.15,1.05,3.15c5.99,17.96,14.05,33.96,24.12,47.98,17.04-2.79,34.05-8.41,50.98-16.87l2.97-1.49-1.49,2.97c-8.47,16.93-14.08,33.94-16.87,50.98,14.02,10.07,30.02,18.13,47.98,24.12l3.15,1.05-3.15,1.05Zm-138.99,29.11c16.97,16.7,44.27,16.48,60.97-.49,16.7-16.97,16.48-44.27-.49-60.97-16.97-16.7-44.27-16.48-60.97,.49-16.7,16.97-16.48,44.27,.49,60.97Z"/>
                </g>
            </svg>      
            <div className='w-screen h-auto bg-black tablet:h-screen'></div>
        </div>

        <div id="preloader" className='flex flex-col items-center justify-center'>
            <span className='absolute w-12 h-12 bg-[#E8DFD4] rectangle'></span>
            <span className='absolute w-12 h-12 bg-[#E8DFD4] rectangle'></span>
            <SVG name={'star'} classes={'absolute w-16 h-16 star'}/>
            <span className='relative flex flex-col items-center justify-center w-20 p-10 bg-black eye'>
                <SVG name={'eye'} classes={'absolute w-full'} fill_1={'#0a9c49'} fill_2={'#F7CE54'}/>   
                <SVG name={'eye'} classes={'absolute w-full eye-lid'} fill_1={'#000000'} fill_2={'#000000'}/>                  
            </span>        
        </div>     
    </>)
}