

import { createContext, useState } from "react";



const ConnectContext =  createContext()
const ConnectProvider = (props) => {
    const [Connect, setConnect] = useState(false)

    return (
        <ConnectContext.Provider value={{Connect, setConnect}}>
            {props.children}
        </ConnectContext.Provider>
    )
}

export { ConnectContext, ConnectProvider };