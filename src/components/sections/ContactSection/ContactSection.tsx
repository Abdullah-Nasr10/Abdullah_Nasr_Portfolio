import ContactForm from "../../ContactSectionComponents/ContactForm/ContactForm";
import ContactInfo from "../../ContactSectionComponents/ContactInfo/ContactInfo";
import SectionTitle from "../../GlobalComponents/SectionTitle/SectionTitle";
import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="container">
      <SectionTitle title="Contact Me" />

      <div className="row g-5 mt-4">
        {/* Contact Info */}
        <div className="col-lg-5 col-md-12">
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className="col-lg-7 col-md-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
