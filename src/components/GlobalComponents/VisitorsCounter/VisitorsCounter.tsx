import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { FaEye } from "react-icons/fa";
import "./VisitorsCounter.css";

// =====================================================================================
// Component
// =====================================================================================
function VisitorsCounter() {
  // =================== State Management ===================
  const [count, setCount] = useState<number | null>(null);

  // =================== Fetch & Update Visitors Count ===================
  useEffect(() => {
    const handleVisit = async () => {
      try {
        const ref = doc(db, "state", "visitors");

        // Prevent increment on every refresh (only once per session)
        if (!sessionStorage.getItem("visited")) {
          await updateDoc(ref, {
            visits: increment(1),
          });
          sessionStorage.setItem("visited", "true");
        }

        // Get current count
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setCount(snap.data().visits);
        }
      } catch (error) {
        console.error("Firebase error:", error);
        setCount(null);
      }
    };

    handleVisit();
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
