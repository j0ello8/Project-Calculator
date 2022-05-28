import Button from "./Button";
import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard(){
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null >(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10){
            setFirstNumber(firstNumber + buttonValue);
        }
    };
    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        switch(operation){
            case "+":
                clear();
                setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
                break;
            case "%":
                clear();
                setResult(parseFloat(secondNumber) % parseFloat(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
        setFirstNumber(result?.toString());
    };

    const firstNumberDisplay = () => {
        if (result !== null){
        return (
        <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, 
            {fontSize: 50, color: myColors.result}]}>{result?.toString()}
        </Text>
        //{setFirstNumber(result?.toString())}
        )
        }
        if (firstNumber && firstNumber.length < 6){
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === ""){
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        } 
        if (firstNumber.length > 5 && firstNumber.length < 8){
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7){
            return (
                <Text style = {[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
     };

    return (
        <View style={Styles.viewBottom} >
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            > 
                <Text style={Styles.secondNumberOnScreen}>
                    {secondNumber}
                    <Text style={{color: "purple", fontSize: 50, fontWeight: '500'}}> {operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>

            <View style={Styles.row}>
                <Button title="1" isGrey onPress={() => handleNumberPress("1")} />
                <Button title="2" isGrey onPress={() => handleNumberPress("2")} />
                <Button title="3" isGrey onPress={() => handleNumberPress("3")} />
                <Button title="+" isGrey onPress={() => handleOperationPress("+")} />          
            </View>
            <View style={Styles.row}>
                <Button title="4" isGrey onPress={() => handleNumberPress("4")} />
                <Button title="5" isGrey onPress={() => handleNumberPress("5")} />
                <Button title="6" isGrey onPress={() => handleNumberPress("6")} />
                <Button title="-" isGrey onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" isGrey onPress={() => handleNumberPress("7")} />
                <Button title="8" isGrey onPress={() => handleNumberPress("8")} />
                <Button title="9" isGrey onPress={() => handleNumberPress("9")} />
                <Button title="*" isGrey onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="0" isGrey onPress={() => handleNumberPress("0")} />
                <Button title="." isGrey onPress={() => handleNumberPress(".")} />
                <Button title="C" isGrey onPress={clear} />
                <Button title="/" isGrey onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="=" isGrey onPress={() => getResult()} />
            </View>
            
        </View>
    )
}
