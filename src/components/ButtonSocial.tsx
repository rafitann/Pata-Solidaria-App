import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label : String
}

export function ButtonSocial({label, ... rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8}{...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        width: "100%",
        height: 48,
        borderColor: "#15104D",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 2,

    },
    label: {
        color:"#15104D",
        fontSize: 16,
        fontWeight: "600",
    }
})
