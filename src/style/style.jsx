import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-radius: 10px;
  margin: 20px;
`;

export const Item = styled.div`
  margin: 10px;
  width: 80%;
  padding: 8px;
  background-color: #c3e7ee;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border-color: #2d889b;
  box-shadow: 1px 8px 11px -6px rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
`;

export const MainContainer = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
`;

export const MainInput = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  border-color: #ece2e2;
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  width: 100px;
  height: 30px;
  background: aquamarine;
  border-radius: 5px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  font-weight: 500;

  &:hover{
    cursor: pointer;
    background: #1cffb3 ;

  }
`;
