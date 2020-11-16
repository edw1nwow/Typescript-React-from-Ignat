import React from "react";
import {PropsType} from "./HW1";
import s from './Message.module.css'

function Message({name , avatar , time, message}: PropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.img_container}>
                <img src={avatar} alt=""/>
            </div>
            <div className={s.message_container}>
                <h4>{ name }</h4>
                <p>{message}</p>
                <span>{time}</span>
            </div>
        </div>
    );
}

export default Message;
