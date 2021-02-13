import "./App.css";
import TabComponent from "../src/components/TabComponent";
import TabItem1 from "./components/TabItem1";
import TabItem2 from "./components/TabItem2";
import TabItem3 from "./components/TabItem3";

function App() {
  return (
    <div className="App">
      <TabComponent
        links={[
          { component: TabItem1, name: "TabItem1", path: "/tab1" },
          { component: TabItem2, name: "TabItem2", path: "/tab2" },
          { component: TabItem3, name: "TabItem3", path: "/tab3" },
        ]}
      />
    </div>
  );
}

export default App;
