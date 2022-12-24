import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const onClickDelete = (id) => {
    setUsersList(usersList.filter((user) => user.id !== id));
  }; //funqcia romelic igebs id s da shlis masividan igive id mqone users

  const onClickUpdate = (user, id) => {
    const myObj = usersList.filter((user) => user.id !== id);
    myObj.push({ ...user });
    setUsersList(myObj);
  }; //errordeba idashi unda washalos elementi da igive id it sheqmnas useri
  return (
    <div className="grid justify-items-center">
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        users={usersList}
        onClickDelete={onClickDelete}
        onClickUpdate={onClickUpdate}
      />
    </div>
  );
}

export default App;
