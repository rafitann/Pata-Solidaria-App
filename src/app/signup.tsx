
import { Button } from "@/components/Button"
import { Input } from "@/components/input"
import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function Signup(){
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios: "padding",android:"height"})}>
        <ScrollView 
        contentContainerStyle ={{flexGrow: 1}} 
        keyboardShouldPersistTaps="handled" 
        showsVerticalScrollIndicator={false}>
            
     <View style={style.container }>
        <Image
        source={require("@/assets/pata.png")}
        style={style.ilustration}
       />

       <Text style ={style.title}>Cadastrar</Text>

       <View style={style.form}>
         <Input placeholder="Nome Completo" />
         <Input placeholder="E-mail" keyboardType="email-address" />
         <Input placeholder="Senha" secureTextEntry />

         <Button label={"Cadastrar"} />
       </View>

       <Text style ={style.footerText}>
       Já tem uma conta? {"  "}
        <Link href="/" style= {style.footerLink} >
        Entre aqui.</Link>
        </Text>
       </View>
       </ScrollView>
       </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FDFDFD",
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
        fontWeight: 900,
         color:"#f36d95",
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
        fontWeight: 700,
    },
})