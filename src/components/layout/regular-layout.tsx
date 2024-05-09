import { PropsWithChildren } from "react";
import { Header } from "./header";
import { ScrollArea } from "../elements/scroll-area";

export const RegularLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={"pb-20 pt-6 sm:pt-12 container mx-auto max-w-[768px]"}>
        <ScrollArea>{children}</ScrollArea>
      </main>
    </>
  );
};
