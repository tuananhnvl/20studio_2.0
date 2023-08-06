//import './styles/globals.css'
//import StyledComponentsRegistry from './lib/registry';
import Navbar from './components/Navbar'
import { LenisProvider } from './provider/LenisProvider.js'
import './styles/globals.css'
/* import barba from '@barba/core';
 */

export default function RootLayout({ children }) {
 
 /*  barba.init({
    // ...
  }); */
  return (
    <html>
      <body >
        <LenisProvider>
          <Navbar/>
       {/*    <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
          {children}
        </LenisProvider>
      
      </body>
    </html>
  );
}