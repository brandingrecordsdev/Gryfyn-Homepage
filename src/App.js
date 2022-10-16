// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SVG from './components/SVG'
import PhoneHero from "./images/phone-hero.png";
import NFTvideo from './components/NFTvideo';

function App() {
  console.log(PhoneHero)
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className='overflow-hidden h-[16rem] rounded-border relative'>
        <div className='rounded-full bg-black w-[184vw] h-[184vw] relative left-[-42vw]'></div>
      </div>
      <section id="nft-video-section" className='flex flex-col items-center gap-10 py-16 text-center bg-black text-body nft-video-section'>
        <NFTvideo />
        <h2 className='max-w-xl text-4xl font-title nft-title'>
          All your favorite NFTs in one secure location.          
        </h2>
        <p className='max-w-3xl font-body'>
          As an intuitive, integrated and open solution, Gryfyn is the key to connect the curious minds 
          to navigate across the virtual realms. You are promised with absolute freedom in where you are going, 
          and have total control in who you are becoming.        
        </p>
        <p>
          The world is within your reach. Open the door, 
          and let the experiences come to you.             
        </p>
      </section>    
      <section className='flex items-start justify-center py-16 text-center bg-black gap-28 text-body'>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='star' classes='w-40'/>
          <h2 className='text-4xl font-title'>Create</h2>
          <p className='font-body max-w-[13rem]'>
            The world of the future, and witness the boundless possibilities of your mind.
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='sun' classes='w-40' fill_1='#FFCC31' fill_2='#F16B37'/>
          <h2 className='text-4xl font-title'>Play</h2>
          <p className='flex flex-col items-center font-body'>
            <span className='max-w-[12rem]'>Any roles of your desire, fulfill your fantasies. </span>
            <span>Bring utility to its full potential.</span>
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <div className='flex justify-center gap-2 py-12'>
            <div className='w-16 h-16 bg-[#0167A2]'></div>
            <div className='w-16 h-16 bg-[#FFCC31]'></div>
          </div>
          <h2 className='text-4xl font-title'>Socialise</h2>
          <p className='font-body max-w-[19rem]'>
            Communicate with those who inspire us to explore the boundaries of imagination from a new perspective.
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <SVG name='eye' classes='w-40'/>
          <h2 className='text-4xl font-title'>Explore</h2>
          <p className='font-body max-w-[16rem]'>
            Go on the journey that is unique to you, and watch Web 3 grow as you grow with it.
          </p>
        </div>                        
      </section>       
    </div>
  );
}

export default App;
