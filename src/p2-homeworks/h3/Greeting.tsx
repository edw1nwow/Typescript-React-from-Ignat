import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = s.error;
    const errorClass = error ? inputClass : ''
    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                error={errorClass}
                className={s.blue} // проверьте, рабоет ли смешивание классов
            />
            {/*<input value={name} onChange={setNameCallback} className={errorClass}/>*/}
            {/*<span>{error}</span>*/}
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
