// next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// icons
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            alt=""
            className="cursor-pointer"
            src="/tiktik.png"
            width={200}
            height={200}
          />
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
