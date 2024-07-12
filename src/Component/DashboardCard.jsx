import React from 'react'
import { Link } from 'react-router-dom'

const DashboardCard = ({data}) => {
    const token1 = data.tokens[0]==="BTC.B"?"btc":data.tokens[0]==="ETH"?"eth":data.tokens[0]==="USDT"?"usdt":data.tokens[0]==="USDC"?"usdc":data.tokens[0]==="sAVAX"?"savax":data.tokens[0]==="wBTC"?"wbtc":data.tokens[0]==="VBX"?"vbx":"eurc"
    const token2 = data.tokens[1]==="BTC.B"?"btc":data.tokens[1]==="ETH"?"eth":data.tokens[1]==="USDT"?"usdt":data.tokens[1]==="USDC"?"usdc":data.tokens[1]==="sAVAX"?"savax":data.tokens[1]==="wBTC"?"wbtc":data.tokens[1]==="VBX"?"vbx":"eurc"
    const tokenColor1 = data.tokens[0]==="BTC.B"?"#F7931A":data.tokens[0]==="ETH"?"#222222":data.tokens[0]==="USDT"?"#50AB92":data.tokens[0]==="USDC"?"#2775CA":data.tokens[0]==="sAVAX"?"#00B3ED":data.tokens[0]==="wBTC"?"#ffb964":data.tokens[0]==="VBX"?"#2dafdd":"#2775CA"
    const tokenColor2 = data.tokens[1]==="BTC.B"?"#F7931A":data.tokens[1]==="ETH"?"#222222":data.tokens[1]==="USDT"?"#50AB92":data.tokens[1]==="USDC"?"#2775CA":data.tokens[1]==="sAVAX"?"#00B3ED":data.tokens[1]==="wBTC"?"#ffb964":data.tokens[0]==="VBX"?"#2dafdd":"#2775CA"
    


    
  return (
    <Link to={`/market/vault/${token1}/${token2}`}>
    <div className=' rounded-2xl overflow-hidden brightness-[0.7] hover:brightness-100 hover:-translate-y-2 transition-all duration-150'>
      <div className=' p-4 flex justify-between items-center pb-10 relative overflow-hidden'>
      <div className=' cardBg absolute z-0 top-0 left-0 h-[200%] w-full' style={{backgroundImage:`linear-gradient(180deg,${tokenColor1}, ${tokenColor2}`}}></div>
        {/* <div className=' relative z-10 flex gap-2 justify-start items-center'> <img src={`../${data.platform==="TraderJoe"?"traderjoe":"gmx"}.svg`} alt="trader joe" className=' h-5' /> <p>{data.platform}</p></div> */}
        <p className=' relative z-10 text-white/60'>TVL:<span className=' ml-1 text-white'>{data.TVL}</span></p>
        
      </div>
      <div className=' w-full bg-black h-1 relative'>
      <div className=' absolute -bottom-5 left-6'>
            <img src={`../${token1}.svg`} alt={token1} className=' bg-[#2c2c2c] rounded-full h-12 w-12 border-2 border-black relative inline-block' />
            <img src={`../${token2}.svg`} alt={token2} className=' bg-[#2c2c2c] rounded-full h-12 w-12 border-2 border-black relative inline-block -left-4 z-10' />
        </div>
      </div>
      <div className=' bg-[#2C2C2C] p-4 pt-6'>
        <div className=' flex justify-between items-center'>
            <p className=' text-xl text-white text-left'>{data.tokens[0]}-{data.tokens[1]}</p>
            {data.boosted?<p className=' bg-green-600 rounded-lg text-black text-sm font-thin py-1 p-2'>Boosted: AVAX</p>:<p></p>}
        </div>
        <div className=' flex justify-between items-center'>
            <div className=' text-left'>
            <p className=' text-gray-400 '>Fixed Yield</p>
            <p>{data.fixedY===""?"--":data.fixedY}</p>
            </div>
            <div className=' text-right'>
            <p className=' text-gray-400 '>Variable Yield</p>
            <p>{data.variableY===""?"--":data.variableY}</p>
            </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default DashboardCard
