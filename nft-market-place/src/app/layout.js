import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css"
export const metadata = {
  title: "nft market place",
  description: "neft market place!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
    
        
        
        
        {children}
        
        
        
        <Footer/>
        
        </body>
    </html>
  );
}
