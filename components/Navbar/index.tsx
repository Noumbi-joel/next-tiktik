// next
import Link from "next/link";
import Image from "next/image";

// icons
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

// store
import useAuthStore from "../../store/authStore";

// oauth
import { GoogleLogin, googleLogout } from "@react-oauth/google";

// utils
import { createOrGetUser } from "@/utils";

const Navbar = () => {
  const {
    userProfile,
    addUser,
    removeUser,
  }: { userProfile: any; addUser: Function; removeUser: Function } =
    useAuthStore();
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
        {userProfile ? (
          <div className="flex items-center gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile?.image && (
              <Link href="/">
                <>
                  <Image
                    alt="profile photo"
                    className="rounded-full cursor-pointer"
                    width={40}
                    height={40}
                    src={userProfile?.image}
                  />
                </>
              </Link>
            )}
            <button
              onClick={() => {
                googleLogout();
                removeUser(userProfile);
              }}
            >
              <AiOutlineLogout
                color="red"
                fontSize={21}
                className="animate-ping"
              />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => createOrGetUser(res, addUser)}
            onError={(err: any) => {
              alert("ERROR: " + err?.message);
            }}
            useOneTap
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
