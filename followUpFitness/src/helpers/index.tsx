import { AsyncStorage } from "react-native";
import moment, { MomentInput } from 'moment';

export const generateUniqueId = (): string => {
    return Date.now().toString(36) +  Math.random().toString(36).substring(2);
};

export const filterIsToday = (date: MomentInput, currentDate: MomentInput): boolean => {
    return moment(currentDate).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD');
};

export const setLocalStorage = async (list: Item[]) => {
    const jsonValue = JSON.stringify(list)
    await AsyncStorage.setItem('@listItems', jsonValue)
    return;
};

export const getLocalStorage = async () => {
    const jsonValue = awayt AsyncStorage.getItem('@listItems')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
};