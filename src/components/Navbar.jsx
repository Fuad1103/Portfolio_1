import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Certifications",
      href: "#certifications",
    },

    {
      name: "Blog",
      href: "#blog",
    },
    
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/20
        dark:bg-black/40
        backdrop-blur-xl
        border-b
        border-white/30
        shadow-lg
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >

        {/* Logo */}
        <a
          href="#home"
          className="
            text-3xl
            font-extrabold
          "
        >
        
          <span className="text-blue-600">Fuad</span>{" "}
          <span className="text-blue-600">
            Bin Zafar
          </span>
        </a>


        {/* Desktop Menu */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-800
                dark:text-white
                hover:text-cyan-400
                hover:scale-110
                transition
                duration-300
                relative
                group
              "
            >
              {link.name}

              {/* Underline Animation */}
              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-0.5
                  bg-cyan-400
                  group-hover:w-full
                  transition-all
                  duration-300
                "
              ></span>
            </a>
          ))}
        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-3xl
            text-gray-800
            dark:text-white
          "
        >
          {open ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="
            md:hidden
            px-6
            pb-6
            bg-white/30
            dark:bg-black/50
            backdrop-blur-xl
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                block
                py-3
                text-gray-800
                dark:text-white
                hover:text-cyan-400
                transition
              "
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}

    </motion.nav>
  );
}

export default Navbar;