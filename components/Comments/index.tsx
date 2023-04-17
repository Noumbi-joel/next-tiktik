// next
import Image from "next/image";
import Link from "next/link";

// icons
import { GoVerified } from "react-icons/go";

// store
import useAuthStore from "@/store/authStore";

// comp
import { NoResults } from "..";
// types
import { IComment, User } from "@/typing";
import {
  Dispatch,
  FormEventHandler,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
} from "react";

type Props = {
  isPostingComment: boolean;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  comments: IComment[];
  comment: string;
};

const Comments = ({
  isPostingComment,
  addComment,
  comment,
  comments,
  setComment,
}: Props) => {
  const { userProfile, allUsers } = useAuthStore();
  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      <div className="overflow-scroll lg:h-[475px]">
        {comments?.length > 0 ? (
          <div>
            {comments?.length
              ? comments?.map((item, index) => (
                  <>
                    {allUsers.map(
                      (user: User) =>
                        user._id ===
                          (item.postedBy._id || item.postedBy._ref) && (
                          <div className="p-2 items-center" key={index}>
                            <Link href={`/profile/${user._id}`}>
                              <div className="flex gap-3">
                                <div className="w-8 h-8">
                                  <Image
                                    className="rounded-full"
                                    alt="user profile"
                                    width={34}
                                    height={34}
                                    src={user?.image}
                                  />
                                </div>

                                <div className="hidden xl:block">
                                  <p className="flex gap-1 items-center font-bold text-primary lowercase">
                                    {user?.userName?.replaceAll(" ", "")}
                                    <GoVerified className="text-blue-400" />
                                  </p>
                                  <p className="capitalize text-gray-400 text-xs">
                                    {user?.userName}
                                  </p>
                                </div>
                              </div>
                            </Link>

                            <div>
                              <p>
                                {item.comment}
                              </p>
                            </div>
                          </div>
                        )
                    )}
                  </>
                ))
              : null}
          </div>
        ) : (
          <NoResults text="No comments yet" />
        )}
      </div>

      {userProfile && (
        <div>
          <form className="flex gap-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment..."
              className="bg-primary px-6 py-4 font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
            />
            <button
              type="submit"
              className="text-gray-400"
              onClick={(e) => addComment(e)}
            >
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;
