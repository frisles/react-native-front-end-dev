import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Pressable,
    View,
    Image,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SearchComponent = ({searchPhrase, setSearchPhrase, placeHolder}) => {
    // console.log('searchPhrase', searchPhrase, 'setSearchPhrase', setSearchPhrase)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
                source={require('../assets/images/search-icon.png')}/>
            </View>
            <TextInput
                style={styles.inputContainer}
                placeholder={placeHolder}
                value={searchPhrase}
                onChangeText={setSearchPhrase}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        width: '100%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer:{
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer:{
        width: '85%'
    }
})

export default SearchComponent;