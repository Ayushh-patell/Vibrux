import { useConnectWallet } from '@web3-onboard/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
const ethers = require('ethers')







const Market = () => {


        //      WALLET CONFIG 
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider
  
    if (wallet) {
      // if using ethers v6 this is:
      ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
      // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
      console.log(wallet);
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
      {/*           NAVBAR:START         */}
        <nav className=' bg-[#111] relative flex justify-between items-center lg:px-6 px-3 lg:py-5 py-2 font-chakra text-white'>
            <div className=' w-full flex lg:justify-start justify-between items-center lg:gap-16 gap-3 py-2'>
                <div className=' bg-black mix-blend-lighten'>
                <img src="../Nexara.png" alt="Nexara logo" className=' lg:h-7 h-5' />
                </div>
                <div className=' lg:flex hidden justify-between items-center text-sm gap-24 text-gray-400 '>
                <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
                    <p className=' cursor-pointer text-white'>Markets</p>
                    <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/leaderboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p></Link>
                </div>

<div className=' lg:hidden flex justify-center items-center gap-2'>
<div onClick={toggleNav} className='pointer-events-auto flex justify-center cursor-pointer items-center h-8 py-9'>
        <div onMouseEnter={NavHover} onMouseLeave={NavHoverC} title='Open Menu' className={` menu w-14 h-4 flex flex-col justify-between items-center  transition-[height] duration-200 ease-out`}>
            <div aria-hidden className=' bg-white h-px w-full'></div>
            <div aria-hidden className=' bg-white h-px w-full'></div>
        </div>
        </div>
        <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center gap-2'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} />
            <p>{wallet.accounts[0].address.slice(0,5)}..${wallet.accounts[0].address.slice(38)}</p>
        </> : 'Connect'}
      </button>
</div>          
            </div>

{/*         PART OF NAVBAR ONLY FOR DESKTOP      */}
            <div className=' relative lg:flex hidden items-center'>
                
                <button  disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} title={`${wallet?"Disconnect":"Connect"}`} className=' my-2 border border-[#FFFFFF21] bg-[#212121] px-4 py-2 rounded-lg flex justify-center items-center gap-1'>
        {connecting ? 'connecting' : wallet ? <>
            <img src={wallet.icon} alt={wallet.label} style={{height:"20px"}} />
            <p className=' whitespace-nowrap text-xs'>{wallet.accounts[0].address.slice(0,4)}..${wallet.accounts[0].address.slice(39)}</p>
        </> : 'Connect'}
      </button>
                {wallet && <button className='border mx-2 border-[#FFFFFF21] bg-[#212121] px-2 py-2 rounded-lg flex justify-center items-center'> <img src="../bell.svg" alt="notification" className=' w-[50px] aspect-square'/></button>}
            </div>

{/*             PART OF NAVBAR ONLY FOR MOBILE           */}
            <div className='mobileNav z-50 bg-[#111] w-[90vw] text-[#9c9a9e] absolute -top-[999px] left-1/2 -translate-x-1/2' style={{boxShadow:"0 24px 40px rgba(0,0,0,.35)"}}>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/dashboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Dashboard</p></Link>
            <p className=' text-3xl cursor-pointer text-white'>Markets</p>
            <Link onClick={() => {gsap.set("body", { overflow:"auto"})}} to={"/leaderboard"}><p className=' cursor-pointer hover:text-white transition-all duration-200'>Leaderboard</p></Link>
            {/* <div aria-hidden className=' mt-20 h-[2px] w-10 bg-[#9c9a9e] rounded-full mb-5'/>
            <ul>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Docs</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Community</li>
                        <li className=' text-gray-400 hover:text-white transition-all duration-150 my-3 cursor-pointer px-4 text-left'>Feedback</li>
                        
                    </ul> */}
            </div>
        </nav>
        {/*             NAVBAR:END           */}
      </header>



      <Outlet/>


      {/*       FOOTER       */}
      <footer className=" relative lg:pt-20 pt-5 px-4 pb-4 bg-[#111] text-white font-chakra">

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
            <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="https://x.com/nexarafi" target="_blank" rel="noopener noreferrer">Twitter</a></div>
                <div className=' flex justify-start items-center gap-2 relative -left-[23px] mb-2 navFooterItem transition-[left] duration-200 ease-out'><img src="../Arrow.svg" alt="arrow" className=' h-3 inline-block' /><a href="http://t.me/nexarafi" target="_blank" rel="noopener noreferrer">Telegram</a></div>

            </div>
            </div>


          </div>
        </footer>
    </>
  )
}

export default Market
