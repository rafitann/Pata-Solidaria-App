import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function Index(){
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios: "padding",android:"height"})}>
        <ScrollView 
        contentContainerStyle ={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
     <View style={style.container }>
        <Image
        source={require("@/assets/pata.png")}
        style={style.ilustration}
       />

       <Text style ={style.title}>Seja Bem Vindo</Text>
       <Text style ={style.subtitle}> Entre com seu email e senha</Text>

       <View style={style.form}>
         <Input placeholder="E-mail" keyboardType="email-address"/>
         <Input placeholder="Senha" secureTextEntry/>
         <Button label={"Entrar"} />
       </View>

       <Text style ={style.footerText}>
        Não tem uma conta? {"  "}
        <Link href="/signup" style= {style.footerLink} >
        Cadastre-se aqui.</Link>
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