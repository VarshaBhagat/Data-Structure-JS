import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 700px;
  height: 35px;
  margin-bottom: 10px;
  outline: 0;
  border: 3px solid black;
  border-radius: 4px;
  padding: 0 10px;
`;

const Button = styled.button`
  background: blue;
  color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    border-color: #ddd;
  }
`;

const EditButton = styled(Button)`
  background: green;
`;

const DeleteButton = styled(Button)`
  background: red;
`;

const ListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
`;

const TodoList = () => {
  const [val, setVal] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [isShowUpdateBtn, setShowUpdateBtn] = useState<boolean>(false);
  const [indexVal, setIndex] = useState<number>(0);
  let isDisable = useMemo(() => val.length == 0, [val]);

  const onDelete = useCallback(
    (index: number) => {
      setList(list.filter((item, i) => i != index));
    },
    [list]
  );
  const onEdit = useCallback(
    (index: number) => {
      setVal(list.filter((item, i) => i == index)[0]);
      setIndex(index);
      setShowUpdateBtn(true);
    },
    [list]
  );
  return (
    <Container>
      <h1>TodoList</h1>
      <Input
        type="text"
        placeholder="todo"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></Input>
      <div>
        {isShowUpdateBtn ? (
          <Button
            onClick={() => {
              list[indexVal] = val;
              setList(list);
              setVal("");
              setShowUpdateBtn(false);
            }}
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={() => {
              setList([...list, val]);
              setVal("");
            }}
            disabled={isDisable}
          >
            Submit
          </Button>
        )}
        <Button
          onClick={() => {
            setVal("");
          }}
          disabled={isDisable}
        >
          Cancel
        </Button>
      </div>

      {list.map((item, index) => {
        return (
          <ListContent key={index}>
            <p>{item}</p>
            <div>
              <EditButton onClick={() => onEdit(index)}>Edit</EditButton>
              <DeleteButton onClick={() => onDelete(index)}>
                Delete
              </DeleteButton>
            </div>
          </ListContent>
        );
      })}
    </Container>
  );
};

export default TodoList;
function SetStateAction<T>(arg0: string) {
  throw new Error("Function not implemented.");
}
