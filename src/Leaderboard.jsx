import { useConnectWallet } from '@web3-onboard/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { leaderboardData } from './Component/LeaderboardData'
const ethers = require('ethers')


const Leaderboard = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider
  
    if (wallet) {
      // if using ethers v6 this is:
      ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
      // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    }
    const [NavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        if(NavOpen) {
            setNavOpen(false)
            gsap.set("body", { overflow:"auto"})
            gsap.to(".menu", { height:"1rem", duration:0.1})
            gsap.to(".mobileNav", { top:"-999px", duration:0.5, ease:"power1.out"})
            
            
        }
        else {
            setNavOpen(true)
            gsap.set("body", { overflow:"hidden"})
            gsap.to(".menu", { height:"1px", duration:0.1})
            gsap.to(".mobileNav", { top:"120%", duration:0.5, ease:"power1.in"})

        }
    }
    const NavHover = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1.5rem", duration:0.1})}
    }
    const NavHoverC = () => {
        if(!NavOpen) {gsap.to(".menu", { height:"1rem", duration:0.1})}
    }
    

  return (
    <>
      <header>
      {/*       NAVBAR:START      */}
        <nav className=' bg-[#111] relative flex justify-between items-center lg:px-6 px-3 lg:py-5 py-2 font-chakra text-white'>
            <div className=' w-full flex lg:justify-start justify-between items-center lg:gap-16 gap-3 py-2'>
            <div className=' bg-black mix-blend-lighten'>
                <img src="../Nexara.png" alt="Nexara logo" className=' lg:h-7 h-5' />
                </div>
               <div className=' lg:flex hidden justify-between items-center text-sm gap-24 text-gray-400 '>
                <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Market</p></Link>
                    <p className=' cursor-pointer text-white '>Leaderboard</p>
                </div>

<div className=' lg:hidden flex justify-center items-center gap-2'>
<div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>
        <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-4 py-2 rounded-lg flex justify-center items-center gap-1'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} style={{height:"20px"}} />
            <p className=' whitespace-nowrap text-xs'>{wallet.accounts[0].address.slice(0,4)}..${wallet.accounts[0].address.slice(39)}</p>
        </> : 'Connect'}
      </button>
</div>

                
            </div>

            <div className=' relative lg:flex hidden items-center'>

                <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-4 py-2 rounded-lg flex justify-center items-center gap-1'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} style={{height:"20px"}} />
            <p className=' whitespace-nowrap text-xs'>{wallet.accounts[0].address.slice(0,4)}..${wallet.accounts[0].address.slice(39)}</p>
        </> : 'Connect'}
      </button>
                {wallet && <button className='border mx-2 border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center'> <img src="../bell.svg" alt="notification" className=' w-[50px] aspect-square'/></button>}
            </div>


            <div className='mobileNav z-50 bg-[#111] w-[90vw] text-[#9c9a9e] absolute -top-[999px] left-1/2 -translate-x-1/2' style={{boxShadow:"0 24px 40px rgba(0,0,0,.35)"}}>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/market"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Market</p></Link>
            <p className=' text-3xl cursor-pointer text-white '>Leaderboard</p>
            <div aria-hidden className=' mt-20 h-[2px] w-10 bg-[#9c9a9e] rounded-full mb-5'/>
            <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul>
            </div>
        </nav>
        {/*         NAVBAR:END           */}
      </header>


      {/*           MAIN PAGE            */}
      <main className=' bg-[#111] px-5 pt-16 font-chakra text-white relative'>
      <div className=' container mx-auto max-w-screen-lg'>
      <Link to={"/market"}><div className=' text-sm cursor-pointer text-white/40 hover:text-white transition-all duration-200 flex justify-start items-center gap-2'> <div aria-hidden className=' h-1 w-4 bg-white/25 relative'> <div className=' h-full aspect-square bg-white '></div></div>Go Back</div></Link>
        <h1 className=' tracking-widest lg:text-4xl text-3xl lg:text-left text-center my-8 mt-12'>Leaderboard</h1>



{/*         COMING SOON TEXT         */}
<p className=' absolute z-40 top-1/2 left-1/2 -translate-x-1/2 lg:text-8xl text-6xl font-chakra w-max font-bold pointer-events-none'>COMING SOON</p>

            
        <div className=' mt-10 lg:overflow-x-hidden overflow-x-scroll blur-lg relative pointer-events-none'>

            <div className=' min-w-[550px] grid grid-cols-9 gap-2 lg:text-base text-xs text-white/35 py-3 px-1'>
                <p className=' place-self-center'>RANK</p>
                <p className=' col-span-2'>ADDRESS</p>
                <p className=' col-span-2'>INVESTED</p>
                <p className=' place-self-center'>VAULTS</p>
                <p className=' place-self-center'>TRANCHES</p>
                <p className=' place-self-center'>ROLE</p>
                <p className=' place-self-center'>POINTS</p>
            </div>
            <div className=' min-w-[550px] bg-gradient-to-b from-[#0901eb] to-transparent pointer-events-none'>
            {/*  EACH ROW IS RENDERED    */}
            {leaderboardData.map((data,i) => (

                <div className=' grid grid-cols-9 py-4 px-1 gap-2 border-b border-[#111] lg:text-base text-xs pointer-events-none'>
                <p className=' truncate pl-4 place-self-center'>{i===0? "🥇":i===1?"🥈":i===2?"🥉":i+1}</p>
                <div className=' truncate col-span-2 flex justify-start items-center gap-2' title={data.address}><div className=' w-5 aspect-square rounded-full border border-white bg-blue-400'></div>{data.address.slice(0, 5)}...{data.address.slice(38)}</div>
                <p className=' truncate col-span-2'>${data.invested}</p>
                <p className=' truncate place-self-center'>{data.vaults}</p>
                <p className=' truncate place-self-center'>{data.trenches}</p>
                <p className=' truncate place-self-center'>Early Adopter</p>
                <p className=' truncate place-self-center'>{data.points}</p>
            </div>  
            ))}
            </div>
        </div>

      </div>

      </main>

      {/*       FOOTER       */}
      <footer className=" relative lg:pt-32 pt-5 px-4 pb-4 bg-[#111] text-white font-chakra">

          <div className=" my-32 lg:mt-48 place-items-center grid grid-cols-2 lg:gap-7 gap-3">

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>PRODUCT</p>
            <div className=' w-full overflow-x-hidden text-left'>
            <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /> <a href="https://docs.nexara.finance/" target="_blank" rel="noopener noreferrer">Docs</a></div>
            </div>
            </div>

            <div> 
            <p className=' text-white/30 tracking-[5px] mb-5 text-left'>SOCIALS</p>
            <div className=' w-full overflow-x-hidden text-left'>
            <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="https://twitter.com/vibruxfi" target="_blank" rel="noopener noreferrer">Twitter</a></div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="http://t.me/vibruxfi" target="_blank" rel="noopener noreferrer">Telegram</a></div>
                
                

            </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Leaderboard
