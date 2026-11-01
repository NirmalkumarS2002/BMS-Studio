import { useEffect, useState } from "react";
import Header from "./Home/Header/Header";
import Hero from "./Home/Hero/Hero";
import FeaturedProjects from "./Home/FeaturedProjects/FeaturedProjects";
import Experience from "./Home/Experience/Experience";
import Services from "./Home/Services/Services";
import Pricing from "./Home/Pricing/Pricing";
import Process from "./Home/Process/Process";
import Testimonials from "./Home/Testimonials/Testimonials";
import Awards from "./Home/Awards/Awards";
import Contact from "./Home/Contact/Contact";
import Blog from "./Home/Blog/Blog";
import CTA from "./Home/CTA/CTA";
import Footer from "./Home/Footer/Footer";
import CookieConsent from "./Home/CookieConsent/CookieConsent";
import SocialIcons from "./Home/Socialicon/SocialIcon";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("bms-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#121212" : "#F7F9F7");
    try {
      window.localStorage.setItem("bms-theme", theme);
    } catch {
      // Theme still works for this page when storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <Header theme={theme} onThemeChange={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <main>
        <SocialIcons />
        <Hero />
        <FeaturedProjects />
        <Experience />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />  
        <Awards />
        <Contact />
        <Blog />  
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
