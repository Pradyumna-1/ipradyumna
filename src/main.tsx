import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import ColorModeProvider from "./providers/ColorModeProvider"
import "@fontsource/poppins"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
)
