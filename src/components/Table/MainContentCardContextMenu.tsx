import { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

interface MainContentCardDeleteProps {
  children: ReactNode;
  link: string;
}

const MainContentCardDelete = ({
  children,
  link,
}: MainContentCardDeleteProps) => {
  function handleDelete() {
    const db = JSON.parse(localStorage.getItem("watchlater-react") || "[]");

    const index = db.indexOf(link);
    if (index !== -1) {
      db.splice(index, 1);
    } else {
      console.log(`URL not found: ${link}`);
    }
    localStorage.setItem("watchlater-react", JSON.stringify(db));
    window.location.reload();
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash className="ml-[-.25rem] mr-2" />
            Delete Item
          </Button>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default MainContentCardDelete;
