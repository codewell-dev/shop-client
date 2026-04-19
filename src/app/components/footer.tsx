"use client";
import Link from "next/link";
import {
  AtSymbolIcon,
  PhoneArrowUpRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CATEGORIES } from "../lib/data/products";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "𝕀" },
  { label: "Facebook", href: "#", icon: "𝔽" },
  { label: "YouTube", href: "#", icon: "𝕐" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--obsidian)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 bg-white flex items-center justify-center">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--obsidian)",
                    fontSize: "0.8rem",
                    fontWeight: 900,
                  }}
                >
                  G
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                GROMVAULT
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.35)", maxWidth: "220px" }}
            >
              Premium grooming essentials curated for the modern gentleman.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border flex items-center justify-center text-sm transition-colors duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.45)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Shop
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-xs transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Journal", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: PhoneArrowUpRightIcon, label: "+380 93 000 0000" },
                { icon: AtSymbolIcon, label: "hello@gromvault.com" },
                { icon: MapPinIcon, label: "Kyiv, Ukraine" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--gold)", opacity: 0.7 }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {new Date().getFullYear()} GROMVAULT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Shipping"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.2)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
