import React, { useCallback, useState } from "react";
import styled from "styled-components";

const CircularButton = styled.button`
  width: 40px;
  height: 40px;
  background: grey;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const Button = styled.button`
  height: 50px;
  width: 100px;
  background: lightgrey;
  border-radius: 9px;
  border: 0;
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Hr = styled.div`
  border: 2px solid;
  left: 3%;
  position: absolute;
  width: 95%;

  top: 32%;
  z-index: -1;
`;
const Content = styled.div`
  position: relative;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.div`
  font-weight: bold;
  margin: 20px 0;
  font-size: 28px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Stepper = () => {
  const [count, setCount] = useState(0);
  const [isFinished, setFinished] = useState(false);
  const STEPPER_DATA = [
    {
      name: "Contact Details",
      Component: () => (
        <Text>Add contact details for further communications.</Text>
      ),
    },
    {
      name: "Shipping Address",
      Component: () => (
        <Text>Add shipping address for successful delivery.</Text>
      ),
    },
    {
      name: "Payment",
      Component: () => <Text>Complete Payment to complete the order.</Text>,
    },
    {
      name: "Delivered",
      Component: () => <Text>Ready to get delivered!</Text>,
    },
  ];

  const onFinish = useCallback(() => {
    document.querySelector("#finish").disabled = true;
    document.getElementById("3").classList.remove("active");
    document.getElementById("3").classList.add("done");
    setFinished(true);
  }, []);

  const onClickPrevious = () => {
    setCount(count - 1);
    setFinished(false);
  };

  return (
    <>
      <Content>
        <Container>
          {STEPPER_DATA.map((i, key) => {
            let classNameEvaluate = "count";
            if (count == key) {
              classNameEvaluate = "active";
            } else if (key < count) {
              classNameEvaluate = "done";
            }
            return (
              <Item key={i.name}>
                <CircularButton
                  id={key}
                  onClick={() => setCount(key)}
                  className={classNameEvaluate}
                >
                 {key<count || isFinished ? <span>&#10003;</span> : key + 1}
 
                </CircularButton>
                <div id={key}>{i.name}</div>
              </Item>
            );
          })}
        </Container>
        <Hr></Hr>
      </Content>
      {isFinished ? (
        <Text>Order Delivered successfully!🎉</Text>
      ) : (
        STEPPER_DATA[count].Component()
      )}
      <BtnContainer>
        <Button onClick={onClickPrevious} disabled={count == 0}>
          Previous
        </Button>
        {count < 3 ? (
          <Button
            id="next"
            onClick={() => setCount(count + 1)}
            disabled={count == 3}
          >
            Next
          </Button>
        ) : (
          <Button id="finish" onClick={onFinish}>
            Finish
          </Button>
        )}
      </BtnContainer>
    </>
  );
};

export default Stepper;
