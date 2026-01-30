import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header"
import WhatsAppChat from "./WhatsAppChat";
export default function Layout({preview, children}) {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppChat
              phoneNumber="447771550876"
              accountName="Global Cust"
              statusMessage="We are here to help you! 😊"
              chatMessage="Hi there! 👋 Welcome to Global Cust. How can We help you?"
              avatar="/images/GCC_LOGO.webp"
              serviceOptions="Road Custom Clearnace , Sea Custom Clearnace , Air Freight Custom Clearnace , Others"
          />
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
          if (window.location.pathname.includes('/thank-you')) {
        gtag('event', 'conversion', {'send_to': 'AW-16722071369/1QtPCLrYv4EaEMme2qU-'});
          }
        });
        document.addEventListener('click', function(e){
          if(e.target.closest('[href*="tel:"]')){
            gtag('event', 'conversion', {'send_to': 'AW-16722071369/Lg-9CL3Yv4EaEMme2qU-'});
          }    
        }, {capture: true});
            `,
          }}
        />
    </>
  );
}
