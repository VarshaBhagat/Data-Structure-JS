import styled from "styled-components";
import useToast from "./useToast";
const Select = styled.select`
    height: 40px
}`;
const Input = styled.input`
    height: 40px
}`;
const ToastItem = styled.div`
    position: absolute;
`;
const Content = styled.div`
    position: relative;
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 550px;
    gap: 10px;
}`;

const Button = styled.button`
  background-color: #0ff;
  border: 1px solid;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  margin: 0 auto;
`;
const ToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToastPopup = () => {
  const {
    horizontalPosition,
    verticalPosition,
    type,
    msg,
    duration,
    setHorizontalPosition,
    setVerticalPosition,
    setType,
    setMsg,
    setDuration,
    showToast,
    toasMsg,
    removeToast,
  } = useToast();
  console.log(toasMsg);
  const onChangeHorizontalPostion = (e) => {
    setHorizontalPosition(e.target.value);
  };
  const onChangeVerticalPostion = (e) => {
    setVerticalPosition(e.target.value);
  };
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeText = (e) => {
    setMsg(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(Number(e.target.value));
  };

  return (
    <Content className="flex column">
      <h1>Toast Popup</h1>
      <Form>
        <Select
          id="horizontalPostion"
          onChange={onChangeHorizontalPostion}
          value={horizontalPosition}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </Select>
        <Select
          id="verticalPostion"
          onChange={onChangeVerticalPostion}
          value={verticalPosition}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </Select>
        <Select id="type" onChange={onChangeType} value={type}>
          <option value="normal">Normal</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </Select>
        <Input
          type="text"
          id="text"
          onChange={onChangeText}
          value={msg}
        ></Input>
        <div className="flex">
          <label htmlFor="duration">Duration</label>
          <Input
            type="range"
            value={duration}
            min={0}
            max={10}
            id="duration"
            onChange={onChangeDuration}
          ></Input>
        </div>
        <Button onClick={showToast} id="btn">
          Show Toast
        </Button>
      </Form>
      <ToastContainer>
        {toasMsg.map((item, index) => {
          return (
            <ToastItem
              key={index}
              className={`flex ${item.type} ${item.horizontalPosition} ${item.verticalPosition}`}
            >
              <p>{item.msg}</p>
              <button onClick={() => removeToast(item.msg)}>&#x2715;</button>
            </ToastItem>
          );
        })}
      </ToastContainer>
    </Content>
  );
};
export default ToastPopup;
