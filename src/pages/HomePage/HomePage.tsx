import AboutSection from "../../components/sections/AboutSection/AboutSection";
import ContactSection from "../../components/sections/ContactSection/ContactSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";
import HomeSection from "../../components/sections/HomeSection/HomeSection";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import "./HomePage.css";
function HomePage() {
  return (
    <main className="homePageContainer">
      <section id="home" className="min-vh-100 d-flex align-items-center">
        <HomeSection />
      </section>

      <section id="about" className="min-vh-100 d-flex align-items-center">
        <AboutSection />
      </section>

      <section id="projects" className="min-vh-100 d-flex align-items-center">
        <ProjectsSection />
      </section>

      <section id="contact" className="min-vh-100 d-flex align-items-center">
        <ContactSection />
      </section>
      <footer id="footer">
        <FooterSection />
      </footer>
    </main>
  );
}

export default HomePage;
