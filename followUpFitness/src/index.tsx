import React from 'react';
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Routes from "./routes";


const Main: React.FC = () => {
    return (
        <>
            <StatusBar style='auto'></StatusBar>
            <Routes/>
        </>
    );
};

export default Main;