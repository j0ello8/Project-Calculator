import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";


interface ButtonProps {
    onPress: () => void;
    title: string;
    isGrey: Boolean;
}

export default function Button({title, onPress, isGrey}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
       <TouchableOpacity
        style={
            isGrey
            ? Styles.btnGrey
            : theme === "light"
            ? Styles.btnGrey
            : Styles.btnGrey
        }
        onPress ={onPress}>
        <Text
            style={
                isGrey || isGrey
                ? Styles.textDark
                : theme === "dark"
                ? Styles.textLight
                : Styles.textDark
            } >

            {title}

         </Text>
        </TouchableOpacity>
    );

}
