import React from "react"
import './App.css';
import UseStateExample from "./Components/UseStateExample";
import InlineCondition from "./Components/InlineConditionalExamp";
import Posts from "./Components/Posts";
import Users from "./Components/users"

function App() {
  return (
    <div className="App">
       {/* <Propsexample valueOfProps={name} ChangeNme={ChangeNme}/>
      <CounterReducer/>
      <UseStateExample/>
      <InlineCondition/>
      <EventHandelingExamople/>
      <KeysExample/>
      <FormsExample/>
      < DynamicInputExmp/>
      <InlineHtml/>
      <ReactRestApiExample/> */}
      <Users/>
      <hr />
      <Posts/>
    </div>
  );
}

export default App;
