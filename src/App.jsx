import "./styles/App.css";
import { useState } from "react";
import BaseWrapper from "./wrappers/base";
import NavWrapper from "./wrappers/nav";
import MainWrapper from "./wrappers/main";
import PanelWrapper from "./wrappers/panel";
import Navbar from "./sections/navbar/navbar";
import Panel from "./sections/panel/panel";
import Today from "./pages/today/today";
function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  return (
    <>
      <BaseWrapper>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <MainWrapper panelOpen={panelOpen}>
          <Today setPanelOpen={setPanelOpen} />
        </MainWrapper>
        <PanelWrapper panelOpen={panelOpen}>
          <Panel
            heading={"Task"}
            List={true}
            Tags={true}
            setPanelOpen={setPanelOpen}
          />
        </PanelWrapper>
      </BaseWrapper>
    </>
  );
}

export default App;
