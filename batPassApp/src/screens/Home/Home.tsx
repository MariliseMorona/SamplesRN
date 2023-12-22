import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
    return (
        
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <BatLogo></BatLogo>
            </View>
            
            <View>
                <BatButton>
                </BatButton>
            </View>
            <StatusBar style="light"/>
        </View>
    )
}