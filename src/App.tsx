import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./context/context"
import * as C from "./style"

function App() {
  const { authInfo, CheackAuthLogin, isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth === true) {
      navigate("/home")
    }
  }, [isAuth, navigate])

  const [userName, setuserName] = useState("")
  const [userPassword, setuserPassword] = useState("")

  const handleUserLogin = () => {
    CheackAuthLogin({ name: userName, senha: userPassword })
    if (isAuth === false) {

      
    }
  }

  return (
    <>
      <C.Box>
        <h1>login</h1>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setuserName(e.target.value)
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => {
            setuserPassword(e.target.value)
          }}
        />
        <button onClick={() => handleUserLogin()}>sign in</button>
        <p>need help</p>
        <p>dont have account? create here</p>
      </C.Box>
    </>
  )
}

export default App
