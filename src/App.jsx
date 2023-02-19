import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <TaskList/>
      <TaskForm/>
    </>
  );
}

export default App;
