import { useState } from "react";

// next
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// net
import axios from "axios";

// comp
import { VideoCard, NoResults } from "@/components";

// types
import { User, Video, ProfileData } from "@/typing";

// store
import useAuthStore from "@/store/authStore";

const SearchPage = ({ videos }: { videos: Video[] }) => {
  const { allUsers } = useAuthStore();
  const router = useRouter();
  const { searchTerm }: any = router.query;
  const [isAccounts, setIsAccounts] = useState(false);
  const accounts = isAccounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !isAccounts ? "border-b-2 border-black" : "text-gray-400";
  const searchedAccounts = allUsers?.filter((user: User) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Tiktik | Search - {searchTerm}</title>
        <meta name="description" content="Generated by @nkjy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <p
            className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`}
            onClick={() => setIsAccounts(true)}
          >
            Accounts
          </p>
          <p
            className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`}
            onClick={() => setIsAccounts(false)}
          >
            Videos
          </p>
        </div>
        {isAccounts ? (
          <div className="md:mt-16">
            {searchedAccounts?.length > 0 ? (
              searchedAccounts?.map((user: User, index: number) => (
                <Link href={`/profile/${user._id}`} key={index}>
                  <div className="flex p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200 gap-3">
                    <div>
                      <Image
                        className="rounded-full"
                        alt="user profile"
                        width={50}
                        height={50}
                        src={user?.image}
                      />
                    </div>

                    <div>
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
              ))
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
            {videos?.length > 0 ? (
              videos?.map((video: Video, i: number) => (
                <VideoCard post={video} key={i} />
              ))
            ) : (
              <NoResults text={`No video results for ${searchTerm}`} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchTerm}`
  );

  return {
    props: {
      videos: res.data,
    },
  };
};