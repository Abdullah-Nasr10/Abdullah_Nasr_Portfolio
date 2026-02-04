import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import "./VisitorsCounter.css";

// =====================================================================================
// Component
// =====================================================================================
function VisitorsCounter() {
  // =================== State Management ===================
  const [count, setCount] = useState<number | null>(null);

  // =================== Fetch Visitors Count ===================
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/abdullah-portfolio/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  // =================== Format Number (K/M) ===================
  const formatCount = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  // =================== Render ===================
  return (
    <div className="visitors d-flex align-items-center gap-2 px-3 py-2 rounded-pill border">
      <FaEye className="visitors-icon" />
      <span className="visitors-label">Total Views:</span>
      <strong className="visitors-count">
        {count !== null ? formatCount(count) : "—"}
      </strong>
    </div>
  );
}

export default VisitorsCounter;
