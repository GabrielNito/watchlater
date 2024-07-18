import { Tabs } from "../ui/tabs";
import { ReactNode } from "react";
import MainNavBar from "./MainNavBar";

interface MainRootProps {
  children: ReactNode;
}

export function MainRoot({ children }: MainRootProps) {
  return (
    <section className="border rounded-xl w-[50%] relative left-[25%] top-[5rem] p-8">
      <MainNavBar />

      <Tabs defaultValue="watchlater">{children}</Tabs>
    </section>
  );
}

export default MainRoot;
