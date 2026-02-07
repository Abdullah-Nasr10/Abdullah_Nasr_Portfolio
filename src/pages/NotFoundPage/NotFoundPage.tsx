import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-6 col-md-8 col-sm-10 text-center">
          {/* Icon */}
          <div className="mb-4">
            <FaExclamationTriangle
              className="text-warning"
              style={{ fontSize: "8rem" }}
            />
          </div>

          {/* 404 Title */}
          <h1 className="display-1 fw-bold mb-3" style={{ fontSize: "10rem" }}>
            404
          </h1>

          {/* Message */}
          <h2 className="fs-1 fw-bold mb-3">Page Not Found</h2>
          <p className="fs-5 text-secondary mb-4">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill"
          >
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
