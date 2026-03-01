import { StyleSheet, Text, View } from "react-native";
import Map, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";


const coordinates = {
  latitude: -23.531686949113073,
  longitude: -46.78977225857759,
} 

export default function Maps() {
  return (
    <View style={styles.container}>
      <Map style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE}
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
            <Text style = {styles.title}>ONG Pata Solidaria</Text>
             <Text style = {styles.address}>ONG Pata Solidaria</Text>
          </View>
        </Callout>
      </Map>
    </View>
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
  }
})
  
