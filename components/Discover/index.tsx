// const
import { topics } from "@/utils/constants";

// next
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const Discover = (props: Props) => {
  const router = useRouter();
  const {
    query: { topic },
  } = router;
  const topicStyle =
    "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";

  const activeTopStyle =
    "xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#FF1997]";
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold mx-3 mb-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopStyle : topicStyle}>
              <span className="font-bold text-2xl xl:text-md">{item.icon}</span>
              <span className="font-medium text-md hidden xl:block capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
