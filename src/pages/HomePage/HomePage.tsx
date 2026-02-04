import AboutSection from "../../components/sections/AboutSection/AboutSection";
import ContactSection from "../../components/sections/ContactSection/ContactSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";
import HomeSection from "../../components/sections/HomeSection/HomeSection";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import "./HomePage.css";
function HomePage() {
  return (
    <main className="homePageContainer">
      <section id="home" className="px-3 min-vh-100 d-flex align-items-center">
        <HomeSection />
      </section>

      <section id="about" className="px-3 min-vh-100">
        <AboutSection />
      </section>

      <section id="projects" className="px-3 min-vh-100">
        <ProjectsSection />
      </section>

      <section id="contact" className="px-3">
        <ContactSection />
      </section>
      <footer id="footer" className="px-3">
        <FooterSection />
      </footer>
    </main>
  );
}

export default HomePage;
