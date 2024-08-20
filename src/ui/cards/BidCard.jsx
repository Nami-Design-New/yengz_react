import React from "react";
import { Link } from "react-router-dom";
import {
  IconCalendar,
  IconClock,
  IconMoneybag,
  IconUser
} from "@tabler/icons-react";

function BidCard() {
  return (
    <Link to="/projects/1" className="bid-card">
      <h4>تصميم كتالوج أصناف</h4>
      <ul>
        <li>
          <IconUser stroke={1.5} />
          <span> Siraj M.</span>
        </li>
        <li>
          <IconClock stroke={1.5} />
          <span> نُشر منذ شهر</span>
        </li>
        <li>
          <IconMoneybag stroke={1.5} />
          <span>$150.00</span>
        </li>
        <li>
          <IconCalendar stroke={1.5} />
          <span>مدة التنفيذ 6 أيام</span>
        </li>
      </ul>
      <p>
        السلام عليكم ورحمة الله وبركاته أستاذ سراج ، يسرني أن أقدم لكم عرضي
        لتصميم كتالوج احترافي لمنتجاتكم، يتناسب مع احتياجاتكم ويعكس هوية علامتكم
        التجارية بأفضل شكل السلام عليكم ورحمة الله وبركاته أستاذ سراج ، يسرني
        أن أقدم لكم عرضي لتصميم كتالوج
      </p>
    </Link>
  );
}

export default BidCard;
