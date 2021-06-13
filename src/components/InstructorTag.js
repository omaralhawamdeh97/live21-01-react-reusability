import { Emoji, Github, Name, TagWrapper } from "./styles";
import Instructors from "../Instructors";
const InstructorTag = (props) => {
  // Create the InstructorTag component here
  const mappedInstrucors = Instructors.map((instructor) => (
    <TagWrapper onClick={() => window.open(`${instructor.gitHub}`)}>
      <Emoji>{`${instructor.Emoji}`}</Emoji>
      <Name>{instructor.name}</Name>
      <Github>Go to GitHub</Github>
    </TagWrapper>
  ));
  return <>{mappedInstrucors}</>;
};

export default InstructorTag;
