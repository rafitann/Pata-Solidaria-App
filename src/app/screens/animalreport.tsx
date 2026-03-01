
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function AnimalReport(){
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios: "padding",android:"height"})}>
        <ScrollView 
        contentContainerStyle ={{flexGrow: 1}} 
        keyboardShouldPersistTaps="handled" 
        showsVerticalScrollIndicator={false}>
            
     <View style={style.container }>
        <Image
        source={require("@/assets/choro.png")}
        style={style.ilustration}
       />

       <Text style ={style.title}>Reportar animal abandonado </Text>

       <View style={style.form}>
         <Input placeholder="Descrição do animal" />
         <Input placeholder="Localização" />
         <Input placeholder="Data de registro" keyboardType="numeric" />
         <Input placeholder="Hora de Registro" keyboardType="number-pad"/>
         <Button label={"Cadastrar"} />
       </View>
       </View>
       </ScrollView>
       </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F2F1FA",
        padding:32,

    },
    ilustration: {
        alignSelf: "center",
        width: "50%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62
    },
    title: {
        fontSize: 32,
        fontWeight: "900",
         color:"#15104D",
    },
       subtitle: {
        fontSize: 16,

    },
    form:{
        marginTop:24,
        gap: 18,
    },
    footerText:{
        textAlign: "center",
        marginTop:24,
        color:"#000000"
    },
    footerLink:{
        color:"#f36d95",
        fontWeight: "700",
    },
})