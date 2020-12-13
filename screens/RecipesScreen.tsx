import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DrinkPreview from '../components/DrinkPreview';

import { Text, View } from '../components/Themed';

let drinks = [
  {key: 'Whiskey Sour', imageLink:'../img/whiskey_sour.jpg'},
  {key: 'Touchdown', imageLink:'../img/touchdown.jpg'},
  {key: 'Mojito', imageLink:'../img/mojito.jpg'},
  {key: 'White Russian', imageLink:'../img/white_russian.jpg'},
  {key: 'Margarita', imageLink:'../img/margarita.jpg'},
  {key: 'Appletini', imageLink:'../img/appletini.jpg'},
]

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
        <FlatList
          data={drinks}
          style={styles.flatList}
          numColumns={drinks.length / 2}
          renderItem={({item}) => <DrinkPreview name={item.key} imageLink={item.imageLink}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: '5%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
