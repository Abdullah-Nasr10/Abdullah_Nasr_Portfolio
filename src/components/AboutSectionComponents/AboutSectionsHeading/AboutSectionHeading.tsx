import "./AboutSectionHeading.css";
interface AboutSectionHeadingProps {
  subTitle: string;
  title: string;
}
function AboutSectionHeading({ subTitle, title }: AboutSectionHeadingProps) {
  return (
    <header className="about-section-heading text-center">
      <h3 className="heading-label mb-0">
        <span className="px-3 py-2 rounded-pill d-inline-block">
          {subTitle}
        </span>
      </h3>
      <h2 className="heading-title my-4">{title}</h2>
    </header>
  );
}

export default AboutSectionHeading;
