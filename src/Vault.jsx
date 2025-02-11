import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { DashboardData } from './Component/DashboardData'

const Vault = () => {

  const [fixedSelect, setfixedSelect] = useState(true)
  const [data, setdata] = useState(null)
  const [Vault, setVault] = useState("")
  const [Protocol, setProtocol] = useState("")
  // const period = data.period
    // const location = useLocation()
    // const data = location.state
    const dataurl = useParams()
    let tokenArr = [dataurl.token1, dataurl.token2]
useEffect(() => {
  DashboardData.forEach((item) => {
    if(item.tokens[0].toUpperCase() === tokenArr[0].toUpperCase() && item.tokens[1].toUpperCase() === tokenArr[1].toUpperCase()) {
      let newData = {
        period:item.period,
        token1:dataurl.token1,
        token2:dataurl.token2,
        fixed:item.fixed,
        variable:item.variable
      }
      setdata(newData)
    }
  })
}, [])

    useEffect(() => {
      if(data) {
        let V = data.token2==="btc"?"BTC.B":data.token2==="eth"?"ETH":data.token2==="usdt"?"USDT":data.token2==="usdc"?"USDC":data.token2==="savax"?"sAVAX":data.token2==="wbtc"?"wBTC":data.token2==="nxr"?"NXR":"EURC"
        let P = data.token1==="btc"?"BTC.B":data.token1==="eth"?"ETH":data.token1==="usdt"?"USDT":data.token1==="usdc"?"USDC":data.token1==="savax"?"sAVAX":data.token1==="wbtc"?"wBTC":data.token1==="nxr"?"NXR":"EURC"
        setVault(V)
        setProtocol(P)
      }
    }, [data])
    
    

    // let periodData = data.period.split(' ')
    // let period = periodData[0]
    // period += " "
    // period += (periodData[1]==="D")?"Days":(periodData[1]==="M")?(parseFloat(periodData[0])>1)?"Months":"Month":"Years"



  return (
    <div className=' bg-black font-chakra py-10'>
    <Link to={'/market'}>
      <div className=' lg:px-10 px-5 flex justify-start items-center gap-1 text-white font-chakra'><img src="../Arrow2.svg" alt="arrow" className=' size-4 object-contain object-center' /> <p>Back</p></div>
    </Link>
{/* rgb(150, 86, 255) */}
{/* rgb(70, 40, 120) */}

{data? 
    <main className=' w-full max-w-[500px] h-full mx-auto text-white my-10'>
    <div className=' w-full sm:p-4 p-2 bg-[#292929] rounded-xl flex justify-center items-center gap-1 mb-2'>
      <div className=' w-1/2 flex justify-start items-center gap-3 '>

        <div>
        <p className=' font-extralight sm:text-base text-sm'>Vault:</p>
        <p className=' font-medium sm:text-xl text-base'>{Vault}</p>
        </div>

        <img src={`../${data.token2}.svg`} alt={data.token2} className=' sm:size-12 size-8 rounded-full object-contain object-center' />
        
      </div>
      <div className=' w-1/2 flex justify-start items-center gap-3 '>

        <div>
        <p className=' font-extralight sm:text-base text-sm'>Protocol:</p>
        <p className=' font-medium sm:text-xl text-base'>{Protocol}</p>
        </div>

        <img src={`../${data.token1}.svg`} alt={data.token1} className=' sm:size-12 size-8 rounded-full object-contain object-center' />
        
      </div>

    </div>

    <div className=' w-full sm:p-5 p-2 bg-[#292929] rounded-xl'>
      <div className=' mb-5 bg-[#1f1f1f] rounded p-4 grid grid-cols-2 gap-2 place-items-center'>
        <button onClick={() => {setfixedSelect(true)}} className={` font-extralight hover:bg-[#0901eb]/50 ${fixedSelect?" bg-[#0901eb]":""} rounded-xl text-center p-2 w-full`}>Fixed</button>
        <button onClick={() => {setfixedSelect(false)}} className={` font-extralight hover:bg-[#0901eb]/50 ${!fixedSelect?" bg-[#0901eb]":""} rounded-xl text-center p-2 w-full`}>Variable</button>
      </div>


      <button disabled className=' my-4 w-full py-2 rounded-lg disabled:cursor-not-allowed disabled:bg-[#808080] bg-[#0901eb] font-extralight'>Deposit (Coming Soon)</button>

      {/* <label htmlFor="UnverifiedC" className=' flex justify-start items-center gap-3 font-extralight'> <input type="checkbox"  className='regular-checkbox ' id='UnverifiedC' /> <label htmlFor="UnverifiedC" className=''></label> Show unverified Contracts</label> */}

      {/* <select name="contract" id="ContractVault" className=' w-full bg-[#1f1f1f] p-2 my-4'>
        <option disabled value="" className=' text-xs text-white/30 font-thin'>Maturity Date</option>
        <option className=' text-xs font-extralight' selected value="0xdsef">0xdsef | <span className=' text-red-500'>Deposit:Closed</span> | <span className=' p-1 rounded-lg bg-purple-500'>Status:invested</span></option>
        <option className=' text-xs font-extralight'  value="0xdsaf">0xdsaf | <span className=' text-red-500'>Deposit:Open</span> | <span className=' p-1 rounded-lg bg-purple-500'>Status:invested</span></option>
      </select> */}

      <div className=' grid grid-cols-2 gap-7 text-lg my-4'>
        <div className=' p-3 rounded-lg bg-[#2020203b]'>
          {
            fixedSelect?
            <>
            <p className=' text-lg font-light'>{data.fixed}%</p>
            <p className=' font-extralight text-sm'>Estimated Fixed Rate</p>
            </>
            :
            <>
            <p className=' text-lg font-light'>{data.variable}%</p>
            <p className=' font-extralight text-sm'>Estimated Variable Rate</p>
            </>
          }
        </div>
        <div className=' p-3 rounded-lg bg-[#2020203b]'>
          <p className=' text-lg font-light'>0 {Vault}</p>
          <p className=' font-extralight text-sm'>Your deposits</p>
        </div>
        <div className=' p-3 rounded-lg bg-[#2020203b]'>
          <p className=' text-lg font-light'>{data.period}</p>
          <p className=' font-extralight text-sm'>Period</p>
        </div>
        <div className=' p-3 rounded-lg bg-[#2020203b]'>
        {
            fixedSelect?
            <>
            <p className=' text-lg font-light'>50%</p>
            <p className=' font-extralight text-sm'>Protection</p>
            </>
            :
            <>
            <p className=' text-lg font-light'>2x</p>
            <p className=' font-extralight text-sm'>Leverage</p>
            </>
          }

        </div>
      </div>

      <div className=' flex justify-between items-center p-2 rounded-lg my-1 bg-[#2020203b]'>
        <p className=' text-white/30 font-extralight'>Your Investment</p>
        <p className=' text-white'><span className=' font-light'>0</span> {Vault}</p>
      </div>
      <div className=' flex justify-between items-center p-2 rounded-lg my-1 bg-[#2020203b]'>
        <p className=' text-white/30 font-extralight'>Your Refund</p>
        <p className=' text-white'><span className=' font-light'>0.00</span> {Vault}</p>
      </div>

    <button disabled className=' mt-4 w-full py-2 rounded-lg disabled:cursor-not-allowed disabled:bg-[#808080] bg-[#0901eb] font-extralight'>Approve</button>

    </div>
    </main>
:
<div className=' w-full max-w-[500px] h-[90dvh] mx-auto bg-[#292929] animate-pulse rounded-xl my-10'></div>


}
      
    </div>
  )
}

export default Vault
