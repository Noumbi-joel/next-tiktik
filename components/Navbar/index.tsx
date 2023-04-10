// next
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// icons
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

// utils
import { google_img } from "@/utils/constants";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <header className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <img
            alt=""
            className="cursor-pointer w-[130px] h-[36px] object-contain"
            src="/tiktik.png"
          />
        </div>
      </Link>

      <div>Search</div>

      <div>
        {session ? (
          <div className="flex items-center gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {session?.user?.image && (
              <Link href="/">
                <>
                  <img
                    alt="profile photo"
                    src={session?.user?.image}
                    className="rounded-full w-[40px] h-[40px] cursor-pointer"
                  />
                </>
              </Link>
            )}
            <button onClick={() => signOut()}>
              <AiOutlineLogout
                color="red"
                fontSize={21}
                className="animate-ping"
              />
            </button>
          </div>
        ) : (
          <button
            className="md:flex xl:hidden bg-white hover:bg-gray-100 border border-gray-200 p-3 rounded-md"
            onClick={() => signIn()}
          >
            <img
              src={google_img}
              alt="Google"
              className="inline-flex w-6 h-6"
            />
            {"  "} Sign In With Google
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
