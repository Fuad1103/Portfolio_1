import useTheme from "../hooks/useTheme";

function ThemeToggle() {

  const { dark, setDark } = useTheme();


  return (

    <button

      onClick={() => setDark(!dark)}

      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-gray-900
      dark:bg-white
      text-white
      dark:text-black
      px-5
      py-3
      rounded-full
      shadow-lg
      hover:scale-110
      transition
      "

    >

      {dark ? "☀️ Light" : "🌙 Dark"}

    </button>

  );

}


export default ThemeToggle;