export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 animate-gradient"></div>

      <div className="absolute w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl top-20 left-10 animate-float"></div>

      <div className="absolute w-80 h-80 bg-pink-500 opacity-30 rounded-full blur-3xl bottom-20 right-10 animate-float-delay"></div>
    </div>
  );
}