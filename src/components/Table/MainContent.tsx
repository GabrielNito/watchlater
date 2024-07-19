import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import MainContentCard from "./MainContentCard";
import MainContentCardContextMenu from "./MainContentCardContextMenu";

const watch = JSON.parse(localStorage.getItem("watchlater") || "[]");
const watched = JSON.parse(localStorage.getItem("watched") || "[]");

export function MainContent() {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <TabsList>
          <TabsTrigger value="watchlater">Watch Later</TabsTrigger>
          <TabsTrigger value="watched">Watched</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="watchlater" className="flex gap-4 flex-wrap mt-8">
        {watch.map((link: string, index: number) => {
          return (
            <MainContentCardContextMenu link={link}>
              <MainContentCard link={link} key={index} />
            </MainContentCardContextMenu>
          );
        })}
      </TabsContent>
      <TabsContent value="watched" className="flex gap-4 flex-wrap mt-8">
        {watched.map((link: string, index: number) => {
          return (
            <MainContentCardContextMenu link={link} watched>
              <MainContentCard link={link} key={index} />
            </MainContentCardContextMenu>
          );
        })}
      </TabsContent>
    </>
  );
}

export default MainContent;
