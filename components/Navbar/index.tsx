import { MouseEvent, useState } from "react";

// next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (searchValue.length > 1) {
      router.push(`/search/${searchValue}`);
    }
  };
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

      <div className="relative hidden md:block">
        <form className="absolute md:static top-10 -left-20 bg-white">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search accounts and videos"
            className="bg-primary p-3 font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0 "
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
          >
            <BiSearch />
          </button>
        </form>
      </div>

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
            onError={() => alert("Error: Google login failed")}
            useOneTap
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
