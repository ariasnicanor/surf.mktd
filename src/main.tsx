import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const splash = document.getElementById("loading-splash");

const hideSplash = () => {
  if (splash) {
    splash.classList.add('fade-out'); 
    setTimeout(() => {
      splash.remove();
    }, 2500); 
  }
};


createRoot(document.getElementById("root")!).render(<App />);


setTimeout(hideSplash, 1000);