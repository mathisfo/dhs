import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "././comp/Header";
import ActionInvoker from "./comp/ActionInvoker";
function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 align">
      <Header />
      <div className="min-h-screen flex justify-center items-center gap-4">
        <ActionInvoker
          firstname="Marie"
          lastname="Knudsen"
          bitmoji="https://sdk.bitmoji.com/render/panel/20048676-398224313_22-s5-v1.png?transparent=1&palette=1&scale=1"
        />
        <ActionInvoker
          firstname="Johanne"
          lastname="Tronstad"
          bitmoji="https://sdk.bitmoji.com/render/panel/20048676-398224313_22-s5-v1.png?transparent=1&palette=1&scale=1"
        />
      </div>
    </div>
  );
}

export default App;
