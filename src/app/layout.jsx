import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Main/Hero";
import Why from "./components/Main/Section2";
import Footer from "./components/Footer";
function layout() {
  return (
    <html>
      
        

       
      <body>
        {/* Header */}
        <Header />
        {/* Main */}
        <Hero />
        <Why />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

export default layout;
