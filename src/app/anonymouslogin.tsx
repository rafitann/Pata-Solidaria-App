import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function AnonymousLogin(){
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios: "padding",android:"height"})}>
        <ScrollView 
        contentContainerStyle ={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
     <View style={style.container }>
         <View style={style.retangulo}>
       <Text style ={style.subtitle}>Para Realizar o Login anônimo solicitamos que informe seu número.</Text>
       <Text style ={style.subtitle}>Enviaremos um código de verificação por SMS para confirmar seu número.</Text>
       </View>
       <View style={style.form}>
          <Input placeholder="Telefone"/>
          <Button label={"Receber Código"} />
       </View>
       </View>
       </ScrollView>
       </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: "#F2F1FA",
        padding:32,
    },
     retangulo: {
    width: '97%',            
    height: 150,
    padding:15,
    backgroundColor: '#D9D9D9', 
    borderRadius: 15,
  },
    title: {
        fontSize: 32,
        fontWeight: 900,
         color:"#15104D",
    },
       subtitle: {
        padding:10,
        textAlign: "center",
        color: "#000000",
        fontWeight: 600,
        fontSize: 16,

    },
    form:{
        marginTop:24,
        gap: 10,
    },
    footerText:{
        textAlign: "center",
        marginTop:24,
        color:"#000000"
    },
})