import { preventAutoHide } from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DrinkPreview from '../components/DrinkPreview';

import { Text, View } from '../components/Themed';

let drinks = [
  {key: 'Whiskey Sour', imageLink: require('../img/whiskey_sour.jpg')},
  {key: 'Touchdown', imageLink: require('../img/touchdown.jpg')},
  {key: 'Mojito', imageLink: require('../img/mojito.jpg')},
  {key: 'White Russian', imageLink: require('../img/white_russian.jpg')},
  {key: 'Margarita', imageLink: require('../img/margarita.jpg')},
  {key: 'Appletini', imageLink: require('../img/appletini.jpg')},
]

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          data={drinks}
          renderItem={({item}) => <DrinkPreview name={item.key} imageReference={item.imageLink}/>}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    display: 'flex',
    paddingLeft: '4%',
    // alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
