import type { NextApiRequest, NextApiResponse } from "next";

// functions
import { allPostsQuery } from "@/utils/queries";
import { client } from "@/utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allPostsQuery();

    try {
      const data = await client.fetch(query);
      res.status(200).json(data);
    } catch (err: any) {
      res.status(400).json({ msg: err?.message });
    }
  } else if (req.method === "POST") {
    const document = req.body;

    client
      .create(document)
      .then(() => res.status(201).json({ message: "Video created!" }));
  }
}
