import { PropsWithChildren } from "react";
import { Header } from "./header";

export const RegularLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={"py-20 container mx-auto max-w-[768px]"}>
        {children}
      </main>
    </>
  );
};
