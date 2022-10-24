import React from "react"
import { useState } from "react"

type IUSER = {
  name: string
  senha: string
}

interface PropsUserContext {
  authInfo: IUSER
  setauthInfo: React.Dispatch<React.SetStateAction<IUSER>>
  CheackAuthLogin: (userEnter: IUSER) => void
  isAuth: boolean
}

const DEFAULT_VALUE = {
  authInfo: {
    name: "gustavo",
    senha: "gudden123",
  },
  isAuth: false,
  setauthInfo: () => {},
  CheackAuthLogin: () => {},
}

export const authContext = React.createContext<PropsUserContext>(DEFAULT_VALUE)

export const AutoProvider = (props: any) => {
  const [authInfo, setauthInfo] = useState(DEFAULT_VALUE.authInfo)
  const [isAuth, setisAuth] = useState(false)

  const CheackAuthLogin = (userEnter: IUSER) => {
    if (
      userEnter.name === authInfo.name &&
      userEnter.senha === authInfo.senha
    ) {
      setisAuth(true)
    }

    console.log("CheackAuthLogin here")
  }

  return (
    <authContext.Provider
      value={{ authInfo, setauthInfo, CheackAuthLogin, isAuth }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export const useAuth = () => React.useContext(authContext)
