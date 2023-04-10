import { IUser } from "@/typing";
import axios from "axios";
import { Session } from "next-auth";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IProps {
  session: Session | null;
}

export const createOrGetUser = async ({ session }: IProps) => {
  await axios.post(`${BASE_URL}/api/auth`, session?.user);
};
