import { createRoot } from "react-dom/client"
import "./index.css"
import { Kennel } from "./components/Kennel"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Kennel />
  </BrowserRouter>
)
