import React from "react";
//ptop type
interface Props {
  text: string;
}
const MessageTag: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h2> {text}</h2>
    </div>
  );
};

export default MessageTag;
