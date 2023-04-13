import { useRouter } from "next/router";

const Details = () => {
  const { query } = useRouter();
  return <div>{query?.id}</div>;
};

export default Details;
