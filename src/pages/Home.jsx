import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Logo from "../assets/YuhmakBrand.png"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-400 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <img src ={Logo} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            React + Tailwind + Zustand +Axios
          </h1>
          <p className="text-gray-200">Template base para proyectos YUHMAK</p>
        </div>

        <div className="text-center text-sm text-gray-200 mt-8">
          <p>
            ✨ Comienza editando{" "}
            <code className="bg-gray-600 px-2 py-1 rounded border">
              src/App.jsx
            </code>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
