import React, { useState } from "react";
import "./App.css";
import { Form } from "semantic-ui-react";
import {
  Container,
  Item,
  MainContainer,
  MainInput,
  SearchButton,
} from "./style/style";

export const App = () => {
  const [userSearch, setUserSearch] = useState([]);
  const [word, setWord] = useState("");

  const token = { Authorization: `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` };

  const searchWord = async () => {
    await fetch(
      `https://api.github.com/search/issues?q=repo:facebook/react+${word}:in:title`,
      { headers: token }
    )
      .then((res) => res.json())
      .then((data) => {
        setUserSearch(data.items);
        console.log(data.items);
      });
  };

  const handleSearch = (e) => {
    setWord(e.target.value);
  };

  return (
    <MainContainer>
      <Form onSubmit={searchWord}>
        <Form.Group>
          <MainInput
            placeholder="Enter the word ..."
            name="name"
            onChange={handleSearch}
            value={word}
          />

          <SearchButton> Search </SearchButton>
        </Form.Group>
      </Form>

      <Container>
        {userSearch?.map((item) => (
          <Item key={item.id}>
            {" "}
            {word}: {item.title}
          </Item>
        ))}
      </Container>
    </MainContainer>
  );
};

export default App;
