import styled from "styled-components";
import {
  seconderyColor,
  standartColor,
  primaryColor,
  neutralColor,
} from "./constans/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 5rem;

  @media screen and (max-width: 768px) {
    margin: 5rem 5rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${standartColor};
  font-size: 3.125rem;
  text-shadow: 4px 6px 3px rgba(0, 0, 0, 0.16);

  @media screen and (max-width: 425px) {
    font-size: 2.8rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    place-items: center;
  }

  @media screen and (max-width: 425px) {
    align-items: center;
    margin: 1rem 0;
  }
`;

export const ContainerInputTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  background-color: ${seconderyColor};
  color: ${neutralColor};

  ${({ error }) => error && `border: 0.125rem solid orangered;`}

  :hover {
    background-color: ${primaryColor};
    transition: background-color 700ms ease-in-out;
  }

  :focus {
    background-color: ${primaryColor};
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 4.5rem;
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

export const ContainerError = styled.div`
  color: orangered;
  font-size: 0.8rem;
  height: 1.5rem;
  width: 100%;
  padding-left: 0.5rem;
`;

export const Icon = styled.img`
  width: 3rem;
`;

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  position: fixed;
  border: 0.25rem solid ${standartColor};
`;
