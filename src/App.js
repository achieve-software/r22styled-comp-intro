import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
    <Sarmal bg="#bebe">
    <HeaderText color>Styled Components</HeaderText>
    <HeaderText color="hotpink">Styled Components</HeaderText>
    <HeaderText color="#765234" bgrenk="#eee">Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <FS13Button react>CALIS</FS13Button>
      <FS13Button>DAHA ÇOK ÇALIS</FS13Button>
      </Sarmal>
    </>
  );
};

export default App;
