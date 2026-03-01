import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnonymousLogin from "../screens/anonymouslogin";
import Login from "../screens/login";
import Maps from "../screens/maps";
import Signup from "../screens/signup";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="AnonymousLogin" component={AnonymousLogin} />
    </Tab.Navigator>
    
  );
}