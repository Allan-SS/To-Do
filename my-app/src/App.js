import { useState } from "react";
import "./App.css";
import CardToDo from "./components/Card/Card";
import validateOnlySpaces from "./constans/regex";
import {
  Container,
  ContainerHomePage,
  Title,
  ContainerCard,
  ContainerInputTask,
  Input,
  Button,
  ContainerError,
  Icon,
  Footer,
} from "./styled";
import ButtonIcon from "./assets/button_icon.svg";

const App = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);
  const [errorTask, setErrorTask] = useState("");
  const [errorTime, setErrorTime] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
    setErrorTask("");
    setErrorTime("");
  };

  const handleTime = (e) => {
    setTime(e.target.value);
    setErrorTask("");
    setErrorTime("");
  };

  const handleClick = () => {
    if (task && !validateOnlySpaces.test(task)) {
      if (time && !validateOnlySpaces.test(time)) {
        const listCopy = JSON.parse(JSON.stringify(list));

        listCopy.push({
          task,
          time,
        });

        setList(listCopy);
        setTask("");
        setTime("");
      } else {
        setErrorTime("Time is Required");
      }
    } else {
      setErrorTask("Task is Required");
    }
  };

  const deleteItem = (index) => {
    setList(list.filter((item, i) => i !== index));
  };

  return (
    <Container>
      <ContainerHomePage>
        <Title>To do List</Title>
        <ContainerInputTask>
          <Input
            error={errorTask}
            placeholder="Task"
            onChange={handleTask}
            value={task}
          />
          <ContainerError>{errorTask}</ContainerError>
          <Input
            error={errorTime}
            placeholder="Time"
            onChange={handleTime}
            value={time}
          />
          <ContainerError>{errorTime}</ContainerError>
          <Button onClick={handleClick}>
            <Icon src={ButtonIcon} alt={"Icon"} />
          </Button>
        </ContainerInputTask>
      </ContainerHomePage>

      <ContainerCard>
        <CardToDo list={list} onClick={(i) => deleteItem(i)} />
      </ContainerCard>
      <Footer />
    </Container>
  );
};

export default App;
