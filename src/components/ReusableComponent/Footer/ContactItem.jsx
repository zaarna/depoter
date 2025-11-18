"use client";
import Link from "next/link";

const ContactItem = ({
  icon: Icon,     
  label,            
  value,            
  href,            
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* ICON */}
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        <Icon />
      </div>

      {/* TEXT + LINK */}
      <p className="text-sm font-semibold">
        {label}{" "}
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="font-normal ml-1.5 transition"
        >
          {value}
        </Link>
      </p>
    </div>
  );
};

export default ContactItem;
