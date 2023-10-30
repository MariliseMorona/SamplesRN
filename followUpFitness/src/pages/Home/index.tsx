import React from 'react';
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { FlatList } from 'react-native'
import { FAB } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import { Container, HeaderContainer, HeaderContainerHighlight, HeaderTextCounterHighlight, HeaderTextHighlight, HeaderTitle, BodyContainer} from './styles';
import ItemList from '../../components/itemList';




function Home() {

    const navigation = useNavigation();


const data = [{
    id: 'testando',
    name: 'teste',
    kcal: 400,
    date: moment() 
    },
    {
        id: 'testando2',
    name: 'outroTeste',
    kcal: 300,
    date: moment() 
    }
]


const handleOneNewItem = (): void => {
    navigation.navigate("NewItem");
};
    return (
        <Container>
            <HeaderContainer>
                <CalendarStrip
                daySelectionAnimation={{
                    type: "border",
                    duration: 200,
                    borderWidth: 1,
                    borderHighlightColor: "white",
                }}
                style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
                calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
                dateNumberStyle={{ color: "white" }}
                dateNameStyle={{ color: "white" }}
                scrollable={true}
                highlightDateNumberStyle={{ color: "yellow" }}
                highlightDateNameStyle={{ color: "yellow" }}
                disabledDateNameStyle={{ color: "grey" }}
                disabledDateNumberStyle={{ color: "grey" }}
                iconContainer={{ flex: 0.1 }}
                onDateSelected={()=> null}
                startingDate={moment().subtract(3, "days")}
                selectedDate={moment()}
                scrollerPaging={true}
                iconLeft={require("../../assets/icons/arrow_left.png")}
                iconRight={require("../../assets/icons/arrow_right.png")}
            />
            <HeaderTitle>Consumido no dia</HeaderTitle>
            <HeaderContainerHighlight>
                <HeaderTextCounterHighlight>
                    100
                </HeaderTextCounterHighlight>
                <HeaderTextHighlight>
                     /kcal
                </HeaderTextHighlight>
            </HeaderContainerHighlight>
            </HeaderContainer>
            <BodyContainer>
                <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ItemList item={item}/>}>
                </FlatList>
                <FAB
                icon={<Feather name="plus" size={24} color="white" />}
                visible={true}
                color="#1e3ba1"
                style={{ marginRight: 20, right: 20, bottom: 20 }}
                onPress={handleOneNewItem}/>
            </BodyContainer>
        </Container>
    );
};

export default Home;