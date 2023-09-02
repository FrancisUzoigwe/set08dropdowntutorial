import { useState } from "react";
import styled from "styled-components";
const App = () => {
  const [drop, setDrop] = useState(false);
  const onDrop = () => {
    setDrop(!drop);
  };

  return (
    <div>
      <Button onMouseEnter={onDrop} onMouseLeave={onDrop}>
        Helo
      </Button>
      {
        drop? <div> <Card style={{}}>Hello World</Card></div> : null
      }
    </div>
  );
};

export default App;


const Card = styled.div`
width:  100px;
height:  100px;
background-color: red;
`;

const Button = styled.button`
  padding: 15px 40px;
`;
