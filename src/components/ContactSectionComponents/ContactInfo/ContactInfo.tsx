import { FaLocationDot, FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";
import { contactInfo } from "../../../data/contactInfo";
import "./ContactInfo.css";

const iconMap: Record<string, React.ElementType> = {
  address: FaLocationDot,
  email: FaEnvelope,
  phone: FaPhone,
  freelance: FaUser,
};

function ContactInfo() {
  return (
    <address className="contact-info-wrapper d-flex flex-column gap-4 justify-content-evenly h-100">
      {contactInfo.map((info) => {
        const Icon = iconMap[info.type];
        const ContentWrapper = info.link ? "a" : "div";

        return (
          <article
            key={info.id}
            className="contact-info-item d-flex align-items-center"
            data-aos="fade-up"
          >
            <ContentWrapper
              {...(info.link
                ? {
                    href: info.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              className="info-icon rounded-circle d-flex align-items-center justify-content-center position-relative"
              style={{ textDecoration: "none" }}
            >
              {Icon && <Icon />}
            </ContentWrapper>
            <div className="info-details">
              <h3 className="info-title text-capitalize mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value"
                >
                  {info.value}
                </a>
              ) : (
                <p className="info-value mb-0">{info.value}</p>
              )}
            </div>
          </article>
        );
      })}
    </address>
  );
}

export default ContactInfo;
