import { Emoji, GitHub, InsName, TagWrapper } from "./styles";
const InstructorTag = (props) => {
  return (
    <>
      <TagWrapper
        onClick={() =>
          window.open(`https://github.com/${props.gitHubUserName}`)
        }
      >
        <Emoji>{props.emoji}</Emoji>
        <InsName>{props.name}</InsName>
        <GitHub>Go to GitHub</GitHub>
      </TagWrapper>
    </>
  );
};

export default InstructorTag;
