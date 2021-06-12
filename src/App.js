import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorTag
        emoji={"🌚"}
        name={"Hamza"}
        gitHubUserName={"DarthHamza"}
      />
      <InstructorTag emoji={"🐥"} name={"Laila"} gitHubUserName={"Lailz"} />
      <InstructorTag
        emoji={"🦍"}
        name={"Hasan"}
        gitHubUserName={"thehasanas"}
      />
    </AppWrapper>
  );
};

export default App;
