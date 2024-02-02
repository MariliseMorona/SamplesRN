import React from 'react';
import { View, Text ,Button, Image } from 'react-native'
import { styles } from '../../components/CardView/style';
import Logo from '../../../assets/logo.png';

export default function CardView() {
    return(
<View style={styles.imageContainer}>
    <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={Logo}></Image>
    </View>
    <Text>
        CardView Works
    </Text>
</View>
    )
}