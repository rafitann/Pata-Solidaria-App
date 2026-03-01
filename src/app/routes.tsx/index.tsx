import { NavigationContainer } from "@react-navigation/native";
import TabRoute from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  );
}