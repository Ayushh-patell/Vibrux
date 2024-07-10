import React, { useEffect, useState } from 'react'
import DashboardCard from './Component/DashboardCard'
import { DashboardData } from './Component/DashboardData'
import { leaderboardData } from './Component/LeaderboardData'

const MarketHome = () => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    const [open, setopen] = useState(0)
    const [selectedTokens, setselectedTokens] = useState([])
    const [selectedCards, setselectedCards] = useState(DashboardData)


    const handleTokens = (token) => {
        if(selectedTokens.some((item) => (item===token))) {
            let tokenArr = selectedTokens.filter((item) => (item!==token))
         setselectedTokens(tokenArr)   
        }
        else {
            let tokenArr = [...selectedTokens, token]
            setselectedTokens(tokenArr)
        }
        console.log(selectedTokens);
    }

    useEffect(() => {
        if(selectedTokens.length===0) {
            setselectedCards(DashboardData)
        }
        else {
            let cardsArr = DashboardData.filter((data) => (
                selectedTokens.every((token) => {
                    return data.tokens[0]===token || data.tokens[1]===token
                })
            ))
            setselectedCards(cardsArr)
        }
    },[selectedTokens])

    const handleDeSelect = () => {
        setselectedTokens([])
        document.querySelectorAll(".regular-checkbox").forEach(box => box.checked = false)
    }  

  return (
    
    <main className=' bg-[#111] px-5 py-16 font-chakra text-white'>
    {/*   TITLE    */}
      <p className=' tracking-widest lg:text-4xl text-3xl my-2 lg:text-left text-center'>Markets</p>
      <p className=' text-left text-gray-400'>TVI: <span className=' pl-2'>{formatter.format(leaderboardData.map((data)=> parseInt(data.invested)).reduce((tvl, curr)=> tvl += curr))}</span></p>

{/* FILTER SELECTION: FOR DESKTOP     */}
      <div className=' w-full lg:flex hidden justify-between items-center'>
          <div className=' mt-28'>
              <p className=' text-gray-400 text-lg my-2'>Sort</p>
              <div className=' flex justify-start items-center gap-2'>
                  <div className=' flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121]'>
                      <img src="../Filter.svg" alt="filter" className=' h-5' />
                  </div>
              </div>
          </div>
          <div className=' mt-28'>
              <p className=' text-gray-400 text-lg my-2 text-right'>Tokens</p>
              <div className=' flex justify-start items-center gap-2'>
                  <div onClick={() => {handleTokens("BTC.B")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="BTC.B"))? " bg-white/5":""}`}>
                      <img src="../btc.svg" alt="btc" className=' h-5' />
                      BTC.B
                  </div>
                  <div onClick={() => {handleTokens("wETH")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="wETH"))? " bg-white/5":""}`}>
                      <img src="../eth.svg" alt="ETH" className=' h-5' />
                      wETH
                  </div>
                  <div onClick={() => {handleTokens("USDT")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="USDT"))? " bg-white/5":""}`}>
                      <img src="../usdt.svg" alt="usdt" className=' h-5' />
                      USDT
                  </div>
                  <div onClick={() => {handleTokens("USDC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="USDC"))? " bg-white/5":""}`}>
                      <img src="../usdc.svg" alt="usdc" className=' h-5' />
                      USDC
                  </div>
                  <div onClick={() => {handleTokens("sAVAX")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="sAVAX"))? " bg-white/5":""}`}>
                      <img src="../savax.svg" alt="savax" className=' h-5' />
                      sAVAX
                  </div>
                  <div onClick={() => {handleTokens("wBTC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="wBTC"))? " bg-white/5":""}`}>
                      <img src="../wbtc.svg" alt="wbtc" className=' h-5' />
                      wBTC
                  </div>
                  <div onClick={() => {handleTokens("EURC")}} className={` cursor-pointer flex justify-center items-center gap-2 px-4 py-1 rounded border border-[#212121] ${selectedTokens.some((item) => (item==="EURC"))? " bg-white/5":""}`}>
                      <img src="../eurc.svg" alt="eurc" className=' h-5' />
                      EURC
                  </div>
              </div>
          </div>
      </div>

      {/*     MOBILE FILTER SECTION    */}
      <div className='lg:hidden w-full my-4 space-y-2'>
          <div onClick={() => {open===1?setopen(0):setopen(1)}} className=' relative w-full border-l-2 border-[#9c9a9e] bg-[#222] text-xs font-medium rounded py-2 px-4 flex justify-between items-center'>
              <p>TVL</p>
              <img src="../Arrow.svg" alt=" arrow" className={` h-2 ${open===1?" -rotate-90":" rotate-90"} transition-all duration-150`} />

              <div className={` absolute top-[120%] z-30 left-0 w-full bg-[#222] border-[0.5px] border-[#3a393d] rounded p-4 ${open===1?"block":" hidden"}`}>
                  <ul className=' space-y-3 '>
                      <li>TVL</li>
                      <li>Highest Fixed</li>
                      <li>Highest Variable</li>
                  </ul>
              </div>
          </div>

<div className='relative'>
<div onClick={() => {open===2?setopen(0):setopen(2)}} className='  w-full border-l-2 border-[#9c9a9e] bg-[#222] text-xs font-medium rounded py-2 px-4 flex justify-between items-center'>
              <p>Filter By</p>
              <img src="../Arrow.svg" alt=" arrow" className={` h-2 ${open===2?" -rotate-90":" rotate-90"} transition-all duration-150`} />


          </div>
          <div className={` absolute top-[120%] z-30 left-0 w-full bg-[#222] border-[0.5px] border-[#3a393d] rounded p-4 ${open===2?"block":" hidden"}`}>
                  <h6 className='  text-gray-400 text-sm tracking-wider w-full border-b pb-4 border-gray-600 mb-3'>TOKENS</h6>
                  <p onClick={handleDeSelect} className=' cursor-pointer my-4 text-xs'>Deselect All</p>
                  <form className=' space-y-4 flex flex-col justify-start items-start text-sm'>
                      <label htmlFor="btcb"> <input onClick={() => {handleTokens("BTC.B")}} type="checkbox"  className='regular-checkbox' id='btcb' /> <label htmlFor="btcb"></label> BTC.B</label>
                      <label htmlFor="weth"> <input onClick={() => {handleTokens("wETH")}} type="checkbox"  className='regular-checkbox' id='weth' /> <label htmlFor="weth"></label> wETH</label>
                      <label htmlFor="usdt"> <input onClick={() => {handleTokens("USDT")}} type="checkbox"  className='regular-checkbox' id='usdt' /> <label htmlFor="usdt"></label> USDT</label>
                      <label htmlFor="usdc"> <input onClick={() => {handleTokens("USDC")}} type="checkbox"  className='regular-checkbox' id='usdc' /> <label htmlFor="usdc"></label> USDC</label>
                      <label htmlFor="savax"> <input onClick={() => {handleTokens("sAVAX")}} type="checkbox" className='regular-checkbox'  id='savax' /> <label htmlFor="savax"></label> sAVAX</label>
                      <label htmlFor="wbtc"> <input onClick={() => {handleTokens("wBTC")}}  type="checkbox"  className='regular-checkbox' id='wbtc' /> <label htmlFor="wbtc"></label> wBTC</label>
                      <label htmlFor="eurc"> <input onClick={() => {handleTokens("EURC")}} type="checkbox"  className='regular-checkbox' id='eurc' /> <label htmlFor="eurc"></label> EURC</label>
                  </form>

              </div>
</div>
      </div>
{/*         FILTER SECTION END       */}


{/* CARDS */}
      <div className=' grid lg:grid-cols-4 grid-cols-1 gap-4 my-7'>
      {selectedCards.map((data,i) => (
          <DashboardCard key={i} data={data} />// EACH CARD IS RENDERED 
      ))}
      </div>
      {selectedCards.length===0 && <p className=' text-4xl'>No markets found in the current filters</p>}
    </main>
  )
}

export default MarketHome
