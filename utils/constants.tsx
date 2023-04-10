import { BsCode, BsEmojiSunglasses } from "react-icons/bs";
import { GiCakeSlice, GiGalaxy, GiLipstick } from "react-icons/gi";
import { FaPaw, FaMedal, FaGamepad } from "react-icons/fa";

export const topics = [
  {
    name: "development",
    icon: <BsCode />,
  },
  {
    name: "comedy",
    icon: <BsEmojiSunglasses />,
  },
  {
    name: "gaming",
    icon: <FaGamepad />,
  },
  {
    name: "food",
    icon: <GiCakeSlice />,
  },
  {
    name: "dance",
    icon: <GiGalaxy />,
  },
  {
    name: "beauty",
    icon: <GiLipstick />,
  },
  {
    name: "animals",
    icon: <FaPaw />,
  },
  {
    name: "sports",
    icon: <FaMedal />,
  },
];

export const footerList1 = [
  "About",
  "Newsroom",
  "Store",
  "Contact",
  "Carrers",
  "ByteDance",
  "Creator Directory",
];
export const footerList2 = [
  "TikTik for Good",
  "Advertise",
  "Developers",
  "Transparency",
  "TikTik Rewards",
];
export const footerList3 = [
  "Help",
  "Safety",
  "Terms",
  "Privacy",
  "Creator Portal",
  "Community Guidelines",
];

export const dummy_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbInfeqe6iChHNdBqtlSuu2VH5oJfSX4BvPt3sNYWPw&s"
export const google_img = "data:image/png;base64,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"