import React, { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    //9 trigerdeba roca form funqcia dasubmitdeba
    event.preventDefault(); //xels ushlis yoveltvis darestartebas
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <Card className="p-4 w-[90%] max-w-[640px] block font-bold mb-2  block w-full p-1 mb-2 ">
        <form onSubmit={addUserHandler}>
          <label className="block font-bold mb-2 " htmlFor="username">
            Username
          </label>
          <input
            className="block w-full p-1 mb-2 border-[1px] border-black  border-color: rgb(0 0 0) text-black"
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            className="block w-full p-1 mb-2 border-[1px] border-black  text-black"
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
