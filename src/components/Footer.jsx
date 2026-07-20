import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Fuad Bin Zafar
            </h2>

            <p className="mt-2 text-gray-400">
              Building intelligent embedded systems, AI-powered software, and autonomous technologies for real-world applications.
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/Fuad1103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/fuad1103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fuad110398@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Fuad Bin Zafar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;