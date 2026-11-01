<<<<<<< HEAD
import React from 'react'
import About from './About'
import Navbar from './Navbar'
export default function App() {
  return (
   <About></About>,
    <Navbar></Navbar>
  )
=======
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

export default function App() {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
>>>>>>> ae16a37a23342fdf35a12e6f92f1c442cdd76235
}
