import React from "react";

const Input = props => {
    const { list, setList } = props;
    let task = {
        name: "",
        isComplete: false
    };
    const onChange = e => {
        task.name = e.target.value;
    };

    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
    };
    return(
        <div className="container w-50">
            <input className="form-control mt-3 mb-1" onChange={onChange} type="text" name="task"/>
            <button className="btn btn-primary btn-block" onClick={onClick}>Add a Task</button>
        </div>
    );
};


export default Input;




































// const Input = (props) => {
//     const { list, setList } = props;
//     let task= {
//       name: "",
//       isComplete: false
//     };
//     const onChange = (e) => {
//       task.name = e.target.value;
//     };
//     const onClick = (e) => {
//       e.preventDefault();
//       console.log(list)
//       setList(
//         [...list, task]
//       );
//       e.target.value = "";
//       task="";
//     }
//     return(
//       <div className="container w-50 mt-4">
//         <input className="mb-2" onChange={onChange} type="text" name="task"/>
//         <button className="btn btn-primary btn-block btn-danger" onClick={onClick}>ADD TASK</button>
//       </div>
//     )
//   }
  
//   export default Input;