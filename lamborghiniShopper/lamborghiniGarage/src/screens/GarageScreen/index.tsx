
import { View, Text } from "react-native";
import { styles } from "./style";
import CardView from "../../components/CardView";


export default function GarageScreen() {
    return(
            <View style={styles.container}>
                <View style={styles.cameraBox}>
                    <View style={styles.triangleCornerTopLeft}/>
                    <View style={[styles.triangleCornerTopLeft, styles.triangleCornerTopRight]}/>
                    <View style={[styles.triangleCornerTopLeft, styles.triangleCornerBottomLeft]}/>
                    <View style={[styles.triangleCornerTopLeft, styles.triangleCornerBottomRight]}/>
                    <CardView></CardView>
                </View>
                <Text>
                    Works
                </Text>
            </View>
    )
}