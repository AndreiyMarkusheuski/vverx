import { NextPage, NextPageContext } from "next";

type TProps = {
  post: string;
};

// export const getStaticPaths = () => {
//   return {
//     paths: [
//       { params: { id: "1" } }, // See the "paths" section below
//     ],
//     fallback: false,
//   };
// };

// export const getStaticProps = (ctx: NextPageContext) => {
  // const { id } = context.params;
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`
  // );
  // const data = await response.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

//   const post: string = "data";

//   return { post };
// };

const Page = (props: any) => {
  return <h1 className="text-3xl font-bold underline">but_type</h1>;
};

export default Page;
