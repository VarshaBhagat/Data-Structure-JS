import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  height: 40px;
  width: 800px;
  padding: 5px 20px;
`;

const ChipContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Chip = styled.div`
  padding: 0.5em 0.75em;
  background-color: #eee;
  border: 1px solid lightgrey;
  border-radius: 1em;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  color: red;
`;

const Chips = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState<string[]>([]);
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    setValue("");
    setList((prev) => [...prev, value]);
    e.preventDefault();
  };
  const onClick = (index: number) => {
    setList(list.filter((item, i) => i != index));
  };
  return (
    <Container>
      <h1>Chips</h1>
      <form id="form" onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Type & hit Enter"
          value={value}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e?.target?.value || "")
          }
        ></Input>
      </form>
      <ChipContainer>
        {list.map((i, index) => {
          return (
            <Chip key={index}>
              {i}
              <Button onClick={() => onClick(index)}>&#x2715;</Button>
            </Chip>
          );
        })}
      </ChipContainer>
    </Container>
  );
};

export default Chips;
