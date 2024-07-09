import Navbar from "./Navbar/Navbar";

export const metadata = {
  title: "nft market place",
  description: "neft market place!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
    
        
        
        
        {children}</body>
    </html>
  );
}
