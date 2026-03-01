import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimalReport from "../screens/animalreport";
import Maps from "../screens/maps";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Mapa" 
      component={Maps} 
      options={{tabBarIcon: ({size, color}) => <Feather name="home" size={size}  color={color}/>}} />
      <Tab.Screen name="Relatar Animal" component={AnimalReport} options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="dog" size={size} color={color} />}} />
      <Tab.Screen name="Perfil" component={Profile} options={{tabBarIcon: ({size, color}) => <Feather name="user" size={size} color={color} />}} />
      
    </Tab.Navigator>
    
  );
}