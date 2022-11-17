import React from "react";
import { Card, ContainerTask, DeleteButton, Icon } from "./styled";
import DeleteIcon from "../../assets/delete_icon.svg";

const CardToDo = ({ list, onClick }) => (
  <>
    {list &&
      list.map((item, index) => (
        <Card key={index}>
          <ContainerTask>
            <h1>{item.task}</h1>
            <hr />
            <h2>{item.time}</h2>
          </ContainerTask>
          <DeleteButton onClick={() => onClick(index)}>
            <Icon src={DeleteIcon} alt={"Icon"} />
          </DeleteButton>
        </Card>
      ))}
  </>
);

export default CardToDo;
