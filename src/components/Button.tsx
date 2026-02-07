import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label : String
}

export function Button({label, ... rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8}{...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        width: "100%",
        height: 48,
        backgroundColor: "#073bac",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    label: {
        color:"#FFFF",
        fontSize: 16,
        fontWeight: "600",
    }
})

