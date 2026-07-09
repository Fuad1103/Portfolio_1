function Footer() {
  return (
    <footer
      className="
        py-8
        px-4
        md:px-10
        bg-gray-900
        text-gray-300
        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Fuad.dev. All rights reserved.
        </p>


        <div className="flex justify-center gap-6 mt-4">

          <a
            href="#"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;