import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Button,
  Cell,
  
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import bridge from "@vkontakte/vk-bridge"
bridge.send("VKWebAppInit");
bridge.subscribe((e) => console.log(e));
let info = bridge.send("VKWebAppGetUserInfo");
console.log(info)
const App = () => {
  const [activePanel, setActivePanel] = React.useState("main");
  return (
    <AppRoot>
          <View activePanel={activePanel}>
            <Panel id="main">
              <PanelHeader>Приложение</PanelHeader>
                <Cell onClick={() => setActivePanel("panel2")}>Hello</Cell>
                <SimpleCell>World</SimpleCell>
            </Panel>
            <Panel id="panel2">
            <SimpleCell onClick={() => setActivePanel("main")}>sdcsdcsc</SimpleCell>
            </Panel>
          </View>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
  ,
  document.getElementById("root")
);