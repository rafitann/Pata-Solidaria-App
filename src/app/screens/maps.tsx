import { Feather } from "@expo/vector-icons";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Map, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";


const coordinates = {
  latitude: -23.531686949113073,
  longitude: -46.78977225857759,
} 

export default function Maps() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>
        <Feather name="search" 
        size={20} 
        color="#333333" 
        style={styles.searchIcon} />
        <TextInput placeholder="Pesquisar" 
        clearButtonMode="always" 
        style={styles.searchInput} 
        placeholderTextColor="#333333"
        multiline={true}
        textAlignVertical="center"
        returnKeyType="search"
        onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    
      <Map style={StyleSheet.absoluteFillObject} provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
      }}
      >
        <Marker coordinate={coordinates} />
        <Callout style={styles.callout}>
          <View>
            <Text style = {styles.title}></Text>
             <Text style = {styles.address}></Text>
          </View>
        </Callout>
      </Map>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Procurar ONGS próximas</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callout:{
    padding:12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color:"#20201e"
  },
  address:{
    fontSize: 14,
    color:"#20201e"
  },
  searchContainer:{
    position: "absolute",
    top: 10,
    left:10,
    right:10,
    zIndex: 1000,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor:"#ccc"
    
  },
  searchInput:{
    flex:1,
    backgroundColor:"#fff",
    paddingHorizontal:10,
    paddingVertical:0,
    borderColor:"#ccc",
  },
  searchIcon:{
    marginLeft: 10,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: "#15104D",
    position: "absolute",
    bottom: 24, 
    left: 24,
    right: 24, 
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
})
  
