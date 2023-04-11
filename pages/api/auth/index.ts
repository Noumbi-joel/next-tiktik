import { client } from "@/utils/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const user = req.body;
    console.log("AFTER LOGIN... "+ JSON.stringify(user));
    client
      .createIfNotExists(user)
      .then(() => res.status(200).json({ message: "Login Success" }))
      .catch((err: any) => {
        res.status(400).json({ message: err?.message });
      });
  }
}
