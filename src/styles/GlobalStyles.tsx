import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
//Styling my Buttons
btnGrey:{
    height: 65,
    width: 75,
    borderRadius: 30,
    backgroundColor: myColors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
},

//Styinig the "=" button
btnEqualto:{
    height: 65,
    width: 75,
    borderRadius: 30,
    backgroundColor: myColors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    alignSelf: 'stretch'
},

//Styling the text on my buttons
textDark: {
    fontSize: 40,
    color: myColors.dark,
},

textLight: {
    fontSize: 30,
    color: myColors.light,
},


//Styling my Keyboard
row: {
    maxWidth: "100%",
    flexDirection: "row",
},

//Styling the display
viewBottom: {
    position: 'absolute',
    bottom: 40,
},

//Styling the first number displayed on the screen
screenFirstNumber: {
    fontSize: 80,
    color: myColors.black,
    fontWeight: "200",
    alignSelf: "flex-end",
},

//Styling the Second number on the screen
secondNumberOnScreen: {
    fontSize: 80,
    color: myColors.black,
    fontWeight: "200",
    alignSelf: "flex-end",
},

})