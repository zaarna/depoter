"use client";
import Link from "next/link";

// Reusable Social Icon Component With Map
const SocialIcons = ({ items = [] }) => {
  return (
    <div className="flex gap-2">
      {items.map(({ href, icon: Icon }, i) => (
        <div className="socilaicon">
          <Link
            key={i}
            href={href}
            className=" transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{Icon}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
