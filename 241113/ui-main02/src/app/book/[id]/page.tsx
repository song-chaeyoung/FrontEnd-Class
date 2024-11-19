import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // console.log(id);
  return <div>Page/[id] page : {id}</div>;
};

export default Page;
