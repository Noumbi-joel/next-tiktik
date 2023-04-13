import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";

import jwt_decode from "jwt-decode";

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const createOrGetUser = async (
  response: CredentialResponse,
  addUser: Function
) => {
  const decoded = jwt_decode(response.credential!);

  const { name, picture, sub }: any = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  addUser(user);

  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`, user);
};
