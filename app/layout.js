//import './styles/globals.css'
//import StyledComponentsRegistry from './lib/registry';

import { LenisProvider } from './provider/LenisProvider.js'
import './styles/globals.css'
import Navbar from './components/Navbar.js';

export default function RootLayout({ children }) {
 
 /*  barba.init({
    // ...
  }); */
  return (
    <html>
      <body >
        <LenisProvider>
          <Navbar/>
          {children}
        </LenisProvider>
      
      </body>
    </html>
  );
}