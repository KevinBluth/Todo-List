import React from "react"


const Task = (props) => {
    const { task, index, list, setList } = props;
    const deleteTask = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div className="container w-50 bg-secondary mt-4">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input type="checkbox" checked={task.isComplete} onChange={onChange} />
                <button className="btn btn-sm btn-danger" onClick={deleteTask}>X</button>
                {list.isComplete !== false && (<p>Done!</p>)}
            </div>
        </div>
    );
};


export default Task;

















// const DisplayTasks = (props) => {
//     const {list} = props;
//     return(
//         <div>
//             {list.map((item, index) => (
//                 <p style={{width:"100px", height:"50px", backgroundColor:"green"}} key={index}>Task: {item.name}</p>
//             ))}
//         </div>
//     );
// };

// export default DisplayTasks;