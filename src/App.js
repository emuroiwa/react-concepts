import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FxnClick from "./components/FxnClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifeCycleA from "./components/Lifecycle/LifeCycleA";
import RefDemo from "./components/RefsDemo/RefDemo";
import InputB from "./components/RefsDemo/InputB";
import FRParent from "./components/RefsDemo/FRParent";

function App() {
  return (
    <div className='App'>
      {/* <Greet name="fffs"/>
      <Welcome name="fffs" />
      <Message name="fffs" />
      <Counter /> */}
      {/* <FxnClick />
      <ClassClick /> 
      <Form />
      <EventBind />
      <UserGreeting />
			<NameList />
			<LifeCycleA />*/}
      {/* <RefDemo />
      <InputB /> */}
      <FRParent />
    </div>
  );
}

export default App;
