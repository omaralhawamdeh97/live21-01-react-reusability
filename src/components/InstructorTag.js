import { Emoji, Github, Name, TagWrapper } from "./styles";
const InstructorTag = (props) => {
  // Create the InstructorTag component here
  // const mappedInstrucors = Instructors.
  return (
    <>
      <TagWrapper
        onClick={() => window.open(`https://github.com/${props.github}`)}
      >
        <Emoji>{props.emoji}</Emoji>
        <Name>{props.name}</Name>
        <Github>Go to GitHub</Github>
      </TagWrapper>
    </>
  );
};

export default InstructorTag;
