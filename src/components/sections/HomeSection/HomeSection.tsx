import { LuMessageCircleMore } from "react-icons/lu";
import Button from "../../GlobalComponents/Button/Button";
import "./HomeSection.css";
function HomeSection() {
  return (
    <div className="container home">
      <div className="row align-items-center justify-content-between g-4">
        {/* --------------homeContent------------------- */}
        <article className="col-lg-7 col-md-6 homeContent order-2 order-md-1">
          <header>
            <h1 className="hello mb-4">
              Hello, my name is <span className="name">Abdullah Nasr</span>
            </h1>
            <h2 className="jobField fs-1 mb-4">
              I'm a <span className="jobTitle">Full-Stack Developer</span>
            </h2>
          </header>
          <p className="fs-4 mb-4">
            I'm a Full-Stack Developer with over two years of hands-on
            experience building end-to-end web applications using modern
            technologies like React, Angular, Node.js, and MongoDB
          </p>
          <Button
            btnText="Hire Me"
            btnIcon={LuMessageCircleMore}
            href="#contact"
          />
        </article>

        {/* --------------homeImg------------------- */}
        <figure className="col-lg-4 col-md-5 homeImg center rounded-circle overflow-hidden mx-auto order-1 order-md-2">
          <img
            src="./MyPhoto.png"
            alt="Abdullah Nasr - Full-Stack Developer"
            className="h-100"
          />
        </figure>
      </div>
    </div>
  );
}

export default HomeSection;
