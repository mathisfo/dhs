import React, { FC } from "react";

interface Person {
  firstname: string;
  lastname: string;

  bitmoji: string;
}

const ActionInvoker: FC<Person> = (props: Person) => {
  const getCounter = async () => {
    const response = await fetch("http://localhost:8000/counter");
    const body = await response.json();
    return body;
  };
  const IncrementCounter = () => {
    fetch("http://localhost:8000/counter").then((response) => {
      return response.json();
    });
  };
  return (
    <div className="w-48 h-64 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col">
      <img className="w-auto rounded-t-xl" src={props.bitmoji} alt="avatar" />
      <div className="text-center flex flex-col p-2">
        <span className="text-base font-bold">{props.firstname}</span>
        <span className="text-xs italic">{props.lastname}</span>
      </div>
      <div>
        <button
          className="w-full h-12 bg-gray-300 rounded-xl text-center bg-sky-400 font-bold hover:bg-sky-700"
          onClick={() => IncrementCounter}
        >
          Sjekk inn
        </button>
      </div>
    </div>
  );
};

export default ActionInvoker;
