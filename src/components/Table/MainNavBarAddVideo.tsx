import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const MainNavBarAddVideo = () => {
  const [link, setLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddVideo = (event: any) => {
    event.preventDefault();
    setIsOpen(false);

    const db = JSON.parse(localStorage.getItem("watchlater-react") || "[]");
    db.push(link);
    localStorage.setItem("watchlater-react", JSON.stringify(db));
    window.location.reload();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <Plus className="ml-[-.25rem] mr-2" />
          Add video
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add video</AlertDialogTitle>
          <AlertDialogDescription>
            Insert the url for the video you want to save
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="p-4">
          <form onSubmit={handleAddVideo}>
            <Label htmlFor="link">Link</Label>
            <Input
              type="text"
              placeholder="Link"
              id="link"
              className="mt-2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </form>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAddVideo}>
            <Plus className="ml-[-.25rem] mr-2" />
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MainNavBarAddVideo;
