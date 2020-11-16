import React from "react";
import {AffairType, DeleteType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: DeleteType

}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div>
            <div key={props.affair._id}> {props.affair.name}  <SuperButton red onClick={deleteCallback}>X</SuperButton></div>
        </div>
    );
}

export default Affair;
