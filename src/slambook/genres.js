import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Pressable,
    View,
    Dimensions,
    ImageBackground,
    TouchableHighlight,
    VirtualizedList,
    Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
const Genres = ({navigation, genres}) => {
    return (
        <View style={styles.genres}>
          {genres.map((genre, i) => {
            return (
              <View key={genre} style={styles.genre}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'column'
    }
});

export default Genres;