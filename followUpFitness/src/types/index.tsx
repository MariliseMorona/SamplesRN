import { MomentInput } from "moment";

export interface Item {
    id: string;
    name: string;
    kcal: number;
    date: MomentInput;
}

export interface DateProvideDate {
    currentDate: MomentInput;
    currentKcal: number;
    currentList: Item[];
    handleChangeDate: (date: MomentInput) => void;
    addItem: (item: Item) => void;
}