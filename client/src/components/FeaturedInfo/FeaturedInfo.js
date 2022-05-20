import "./featuredInfo.css";
import { AiOutlinePoweroff } from "react-icons/ai";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          General <AiOutlinePoweroff />
        </span>
        <div className="featuredInfoContainer"></div>
      </div>
    </div>
  );
}
