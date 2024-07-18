import { Main } from ".";

function Table() {
  const db = JSON.parse(localStorage.getItem("watchlater-react") || "[]");

  return (
    <Main.Root>
      {/* <Main.Tabs content={db}> */}
      <Main.TabsContent content={db}></Main.TabsContent>
      {/* </Main.Tabs> */}
    </Main.Root>
  );
}

export default Table;
