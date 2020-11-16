import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any
    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {_id: v1(), name: name}
        setUsers([newUser, ...users])  // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <hr/>
        </div>
    );
}

export default HW3;
