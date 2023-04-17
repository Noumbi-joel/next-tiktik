// icons
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

type Props = {
  text: string;
};

const NoResults = ({ text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        {text === "No comments yet" ? <BiCommentX /> : <MdOutlineVideocamOff />}
      </p>

      {text}
    </div>
  );
};

export default NoResults;
