import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalStyle } from "./globalStyle"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Teste from "./components/teste"

import Home from "./pages/home/home"
import { AutoProvider } from "./context/context"
import RouteControl from "./router/routeControl"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AutoProvider>
      <GlobalStyle />
      <RouteControl />
    </AutoProvider>
  </React.StrictMode>
)
