import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ChangeName from "../UI/ChangeName";

const UsersList = (props) => {
  const { onClickDelete, onClickUpdate, users } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const userOnClick = (mainUser) => {
    toggleOpen();
    setUser(mainUser);
  };
  const onErase = (id) => {
    toggleOpen();
    onClickDelete(id);
  }; //es funqcia shlis elements da xuravs fanjaras
  return (
    //28 xazi onclicki gadascems states chvens archeul users da agdebs fanjaras sadacaa chvens mier archeuli useris informacia
    <div>
      <Card className="my-[32px] w-[90%] max-w-[640px] ">
        <ul className="p-4">
          {users.map((user) => (
            <Button key={user.id} onClick={() => userOnClick(user)}>
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            </Button>
          ))}
        </ul>
      </Card>

      {isOpen && (
        <ChangeName
          onClick={toggleOpen} //gadavcemt funqcias romlitac vtishavt windows
          user={user} // user states gadavcemt am windows
          onClickDelete={(id) => onErase(id)} //am xazze vigebt ids da vagzavnit funqciashi
          onClickUpdate={(newUser, id) => onClickUpdate(newUser, id)} //vigebt axal users da id-s
        />
      )}
    </div>
  );
};
export default UsersList;
