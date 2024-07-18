import MainContentCard from "./MainContentCard";
import MainContentCardContextMenu from "./MainContentCardContextMenu";

interface MainContentProps {
  content: string[];
}

export function MainContent({ content }: MainContentProps) {
  return (
    <div className="flex gap-4 flex-wrap mt-8">
      {content.map((link, index) => {
        return (
          <MainContentCardContextMenu link={link}>
            <MainContentCard link={link} key={index} />
          </MainContentCardContextMenu>
        );
      })}
    </div>
  );
}

export default MainContent;
