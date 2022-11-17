import styled from "styled-components";
import {
  seconderyColor,
  primaryColor,
  neutralColor,
} from "../../constans/colors";

export const Card = styled.div`
  display: flex;
  width: 31.25rem;
  padding: 1rem 1.875rem;
  margin-top: 1.5rem;
  box-shadow: 0.125rem 0.25rem 0.438rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  background-color: ${neutralColor};
  color: ${neutralColor};
  transition: transform 300ms ease-in-out;

  :hover {
    color: ${seconderyColor};
    background-color: ${primaryColor};
    transition: 300ms ease-in-out;
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

export const ContainerTask = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${seconderyColor} !important;
  }

  hr {
    width: 40%;
    margin: 0.5rem 0;
    border: 0.063rem solid ${seconderyColor};
  }
`;
export const DeleteButton = styled.button`
  width: 5rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 1.25rem 1.125rem 0.938rem 1.125rem;
  background-color: #f5f5f5;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  transition: transform 300ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  :active {
    background-color: ${seconderyColor};
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
`;
