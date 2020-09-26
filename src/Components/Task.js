import React from 'react';
import trashcan from './static/delete.png';
import checkmark from './static/confirm.png';

const Task = ({id, task, taskStatus, removeTask, changeStatus}) => {

    return(
        <div style={taskStatus ? completeStyle : incompleteStyle} key={id}>
            <p style={{width: "60%"}}>{task}</p>
            <div style={iconStyle}>
                <img src={checkmark} alt="update status to complete" onClick={() => changeStatus(id)} style={{width: "30px"}}/>
                <img src={trashcan} alt="remove task" onClick={() => removeTask(id)} style={{width: "30px"}}/>
            </div>
        </div> 
    )
};

const incompleteStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20px",
    width: "40%",
    border: "solid black 2px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
}

const completeStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20px",
    width: "40%",
    border: "solid black 2px",
    borderRadius: "5px",
    backgroundColor: "#ff9149"
}

const iconStyle = {
    display : "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
    paddingRight: "15px"
}

export default Task;