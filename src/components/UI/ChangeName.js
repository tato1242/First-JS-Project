import React, { useState, useEffect } from "react";
import Button from "./Button";

const ChangeName = (props) => {
  const { onClick, user, onClickDelete, onClickUpdate } = props;
  const [newUser, setNewUser] = useState({
    id: user.id,
    name: user.name,
    age: user.age,
  }); //new usershi shedis state romelic propsit gadmovitanet

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen z-10
      bg-[rgba(0,0,0,0.75)]"
      />
      <div className="absolute w-4/5 overflow-hidden left-[10%] z-[100] top-[30vh] ">
        <header className="bg-pink-900 p-4 ">
          <h2 className="text-white">Change Name or Age</h2>
        </header>
        <input
          className="block w-full p-1 mb-2 border-[1px] border-black
          border-color: rgb(0 0 0) text-black"
          id="username"
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} //onchangeze vidzaxebt states eventit vcvlit useris monacemebs
        ></input>
        <input
          className="block w-full p-1 mb-2 border-[1px] border-black  text-black"
          id="age"
          type="number"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <div className="p-4">
          <p>{props.message}</p>
        </div>
        <footer>
          {/* pirveli button mtavari useris id s agzavnis wasashlelad */}
          <Button
            onClick={() => onClickDelete(user.id)}
            className="p-4 flex justify-end"
          >
            Delete
          </Button>
          <Button
            onClick={() => onClickUpdate(newUser, user.id)}
            className="p-4 flex justify-end"
          >
            Update
          </Button>
          <Button onClick={onClick} className="p-4 flex justify-top">
            Close
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ChangeName;
