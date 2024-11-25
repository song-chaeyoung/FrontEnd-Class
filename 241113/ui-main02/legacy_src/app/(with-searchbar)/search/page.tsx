import React from "react";
// import ClientComponent from "@/components/client-component";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  // console.log(q);
  return (
    <div>
      Search Page
      {/* <ClientComponent>
        <></>
      </ClientComponent> */}
    </div>
  );
};

export default Page;
