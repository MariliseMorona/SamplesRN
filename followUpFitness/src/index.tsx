import React from 'react';
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Routes from "./routes";
import { DataProvider } from './hooks/data';


const Main: React.FC = () => {
    return (
        <DataProvider>
            <StatusBar style='auto'></StatusBar>
            <Routes/>
        </DataProvider>
    );
};

export default Main;