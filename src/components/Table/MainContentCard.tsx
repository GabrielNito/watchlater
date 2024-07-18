import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

interface MainContentCardProps {
  link: string;
}

export function MainContentCard({ link }: MainContentCardProps) {
  const video_id = link.split("=")[1];

  return (
    <Card className="w-fit p-4">
      <a href={link} target="_blank">
        <img
          src={`https://img.youtube.com/vi/${video_id}/0.jpg`}
          className="aspect-video object-cover w-[250px]"
        />
      </a>
      <div className="hidden items-top flex space-x-2 mt-4">
        <Checkbox id={video_id} onCheckedChange={() => console.log("a")} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Select to delete
          </label>
        </div>
      </div>
    </Card>
  );
}

export default MainContentCard;
