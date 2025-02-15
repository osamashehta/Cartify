import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react";

import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HeroUIProvider>

     <App />
     </HeroUIProvider>

  // </StrictMode>,
)
