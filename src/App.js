import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Links";
import Sarmal from "./components/Sarmal";
const App = () => {
  return (
    <>
      {" "}
      <Sarmal bg="#bebe">
        <HeaderText>Styled-components</HeaderText>
        <HeaderText color>Styled-components</HeaderText>
        <HeaderText color="hotpink">Styled-components</HeaderText>
        <HeaderText
          color="#765234
"
          bgrenk="#eee"
        >
          Styled-components
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button react>CALIS</FS13Button>
        <FS13Button>DİNLEN</FS13Button>
      </Sarmal>
      <Sarmal>
        <Links href="https://www.clarusway.com" target="_blank">
          Clarusway Web Site
        </Links>
        <Links small href="https://www.reactjs.org" target="_blank">
          ReactJS
        </Links>
        <Links small href="https://www.npm.org" target="_blank">
          NPM
        </Links>
      </Sarmal>
    </>
  );
};
export default App;
