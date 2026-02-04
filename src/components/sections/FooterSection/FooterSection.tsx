import VisitorsCounter from "../../GlobalComponents/VisitorsCounter/VisitorsCounter";
import { socialLinks } from "../../../data/socialLinks";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import "./FooterSection.css";

function FooterSection() {
  const iconMap: Record<string, React.ElementType> = {
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    Facebook: FaFacebookF,
    WhatsApp: FaWhatsapp,
  };

  return (
    <div className="container">
      <div className="footer-content d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center gap-3 py-4 border-top">
        {/* ================== Left Side - Name & Copyright ======================= */}
        <div className="footer-left d-flex align-items-center justify-content-center gap-2 flex-wrap">
          <span className="footer-name fs-5 fw-bold">Abdullah Nasr</span>
          <span className="footer-divider d-none d-sm-inline">|</span>
          <span className="footer-copyright">
            © {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>

        {/* ================== Center - Social Icons ======================= */}
        <div className="footer-social d-flex align-items-center gap-3 order-md-3 order-1">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-flex align-items-center justify-content-center"
                aria-label={link.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* ================== Right Side - Visitors Counter ======================= */}
        <div className="footer-right order-md-2 order-2">
          <VisitorsCounter />
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
