import { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { Eye, EyeOff, Trash } from "lucide-react";

interface MainContentCardDeleteProps {
  children: ReactNode;
  link: string;
  watched?: boolean;
}

const MainContentCardDelete = ({
  children,
  link,
  watched,
}: MainContentCardDeleteProps) => {
  function handleDelete() {
    const db = JSON.parse(localStorage.getItem("watchlater") || "[]");

    const index = db.indexOf(link);
    if (index !== -1) {
      db.splice(index, 1);
    } else {
      console.log(`URL not found: ${link}`);
    }
    localStorage.setItem("watchlater", JSON.stringify(db));
    window.location.reload();
  }

  function handleWatched() {
    const watch = JSON.parse(localStorage.getItem("watchlater") || "[]");
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");

    const index = watch.indexOf(link);
    if (index !== -1) {
      watch.splice(index, 1);
      watched.push(link);
    } else {
      console.log(`URL not found: ${link}`);
    }
    localStorage.setItem("watchlater", JSON.stringify(watch));
    localStorage.setItem("watched", JSON.stringify(watched));
    window.location.reload();
  }

  function handleWatchLater() {
    const watch = JSON.parse(localStorage.getItem("watchlater") || "[]");
    const watched = JSON.parse(localStorage.getItem("watched") || "[]");

    const index = watched.indexOf(link);
    if (index !== -1) {
      watched.splice(index, 1);
      watch.push(link);
    } else {
      console.log(`URL not found: ${link}`);
    }
    localStorage.setItem("watchlater", JSON.stringify(watch));
    localStorage.setItem("watched", JSON.stringify(watched));
    window.location.reload();
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {watched ? (
          <ContextMenuItem
            onClick={handleWatchLater}
            className="flex justify-between gap-2"
          >
            Set to Watch Later
            <EyeOff size={20} />
          </ContextMenuItem>
        ) : (
          <ContextMenuItem
            onClick={handleWatched}
            className="flex justify-between gap-2"
          >
            Set as Watched
            <Eye size={20} />
          </ContextMenuItem>
        )}
        <ContextMenuItem
          onClick={handleDelete}
          className="flex justify-between gap-2"
        >
          Delete Item
          <Trash size={20} />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default MainContentCardDelete;
