import { ToolsList } from "@/components/tools/tools-list";

const Page = () => {
  return (
    <div className={"space-y-8"}>
      <div className={"space-y-4"}>
        <h1 className={"title-1"}>Tools I use on a daily basis</h1>
        <p>
          As a developer, I&apos;m constantly on the lookout for tools and
          resources that can simplify my workflow, improve my productivity and
          stimulate my creativity. However, my quest for efficiency is not
          limited to the field of development; I also enjoy discovering tools
          that can make other aspects of my daily life easier.
        </p>
        <p>
          Here, I present these tools and resources and how I use them. I hope
          it will inspire some of you.
        </p>
      </div>
      <ToolsList />
    </div>
  );
};

export default Page;
