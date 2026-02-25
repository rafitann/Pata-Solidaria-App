import { Button } from "@/components/Button"
import { ButtonSocial } from "@/components/ButtonSocial"
import { Input } from "@/components/Input"
import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function Login(){
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios: "padding",android:"height"})}>
        <ScrollView 
        contentContainerStyle ={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
     <View style={style.container }>
        <Image
        source={require("@/assets/pata.png")}
        style={style.ilustration}
       />

       <Text style ={style.title}>Bem Vindo</Text>

       <View style={style.form}>
         <Input placeholder="E-mail" keyboardType="email-address"/>
         <Input placeholder="Senha" secureTextEntry/>
          <Text style ={style.subtitle}>Esqueceu a senha?{"  "}
            <Link href="/signup" style= {style.footerLink} >
            Crie uma nova senha aqui
            </Link>
            </Text>
         <Button label={"Entrar"} />
         <Text style = {style.footer}> Ou faça login com </Text>
         <Button label={"Entrada Rápida"} />
         <ButtonSocial label={"Continue com Google"} />
         <ButtonSocial label={"Continue com Facebook"} />
       </View>

       <Text style ={style.footerText}>
        Ainda não possui uma conta? {"  "}
        <Link href="/anonymouslogin" style= {style.footerLink} >
        Crie aqui.</Link> 
        </Text>
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
        fontWeight: 900,
         color:"#15104D",
    },
       subtitle: {
        color: "#15104D",
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
        color:"#15104D",
        fontWeight: 700,
    },
    footer:{
        textAlign: "center",
        color:"#15104D",
    
    },
})