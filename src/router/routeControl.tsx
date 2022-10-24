import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import App from "../App"
import { useAuth } from "../context/context"
import Home from "../pages/home/home"

function RouteControl() {
  const { isAuth } = useAuth()

  const PrivateRoute = ({ children, redirectTo }: any) => {
    return isAuth ? children : <Navigate to={redirectTo} />
  }

  // const PrivateRoute = ({ children, redirecTo }: any) => {
  //   const isAuthenticate = isAuth ? children : <Navigate to={redirecTo} />
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/home"
          element={
            isAuth ? (
              <PrivateRoute redirecTo="/">
                <Home />
              </PrivateRoute>
            ) : (
              <>
                <div
                  style={{
                    margin: "auto ",
                    alignSelf: "center",
                  }}
                >
                  <h1> pagina nao encontrada</h1>
                  <p> faça login para acessar essa pagina</p>
                </div>
              </>
            )
          }
        ></Route>
      </Routes>
    </Router>
  )
}

export default RouteControl
