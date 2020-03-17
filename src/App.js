import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Task from "./components/Task";

function App() {
  const [list, setList]= useState([]);
  return (
    <div className="App">
      <Input list={list} setList={setList}/>
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
    </div>
  );
}

export default App;





























// import React, { useState } from 'react';
// import './App.css';


// const Todoitem = (props) => {
//   return(
//   <div style={{width:"100px", height:"100px", border:"5px black", backgroundColor:"red"}}>
//     {props.todoContent}
//   </div>
//   )
// }

// const DisplayTasks = (props) => {
//   return (
//     <div style={{margin:"10px", fontSize:"50px", paddingBottom:"30px", fontFamily:"Courier", backgroundColor:"white"}} className="display">
//       {props.item}
//     </div>
//   );
// }



// function App() {

//   const [todoText, setTodoText] = useState("To Do Item");
//   const changeText = (newText) => {
//     setTodoText(newText)
//   }

//   const todolist = [
//     [todoText]
//   ]


//   return (
//     <div className="App">
//       <Todoitem todoContent={() => changeText(todoText)}/>
//       <Todoitem todoContent={() => changeText(todoText)}/>
//       <Todoitem todoContent={() => changeText("text")}/>
//       <DisplayTasks item={todolist}/>
//     </div>
//   );
// }

// export default App;