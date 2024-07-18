import { ModeToggle } from "../mode-toggle";
import MainNavBarAddVideo from "./MainNavBarAddVideo";

const MainNavBar = () => {
  return (
    <div className="flex justify-between">
      <ModeToggle />

      <MainNavBarAddVideo />
    </div>
  );
};

export default MainNavBar;
