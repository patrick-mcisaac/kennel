import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { Kennel } from "./components/Kennel"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Kennel />
  </StrictMode>
)
