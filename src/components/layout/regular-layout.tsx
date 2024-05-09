import { PropsWithChildren } from "react";
import { Header } from "./header";
import { ScrollArea } from "../elements/scroll-area";

export const RegularLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={"py-20 container mx-auto max-w-[768px]"}>
        <ScrollArea>{children}</ScrollArea>
      </main>
    </>
  );
};
