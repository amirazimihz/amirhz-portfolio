
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <img src="/profile.jpg" alt="profile" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
      <h1 className="text-3xl font-bold">امیر حسین عظیمی</h1>
      <h2 className="text-xl text-gray-400 mb-2">Front-end Developer</h2>
      <p className="text-center max-w-md text-sm mb-4">
        چند سال در شرکت‌های گارانتی کار کردم و به صورت Self Study برنامه‌نویسی فرانت‌اند را یاد گرفتم.
      </p>
      <div className="flex gap-4 text-2xl">
        <a href="https://github.com/amirazimihz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/amir-h-z-08a111369" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default App;
