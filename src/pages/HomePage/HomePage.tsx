import { FaPaperPlane } from "react-icons/fa";
import Button from "../../components/GlobalComponents/Button/Button";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="container">
      HomePage
      <Button btnText="Click Me" btnIcon={FaPaperPlane} />
    </div>
  );
}

export default HomePage;
