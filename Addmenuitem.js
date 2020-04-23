import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Addmenu from "./AddMenu";

const AddMenuPage = () => (
  <View>
    <Addmenu />
  </View>
);


const Stack = createStackNavigator();
const AddMenuStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="AddMenu" component={AddMenuPage} />
  </Stack.Navigator>
)

function Addmenuitem ({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigation.navigate("AddMenu")}>
          <Entypo name="circle-with-plus" size={37} color='#17A589'/>
        </TouchableOpacity>
        <View style={styles.collectButton}>
          <Button color ='#fff' title="Collect Order" onPress={() => alert('Collect Order')} />
        </View>
      </View>
      <View style={styles.itemMenu}>
        <ScrollView>
          <Text> Put Item List Here WIth Scroll View </Text>
          <Text> Put Item List Here WIth Scroll View </Text>
          <Text> Put Item List Here WIth Scroll View </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flexDirection: 'column',
  },
  menuButton:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5
  },
  itemMenu: {
    flexDirection: 'column',
    backgroundColor: '#EAECEE'
  },
  collectButton: {
    backgroundColor: '#2E86C1',
    borderRadius: 30,
    height: 40
  },
});
export default Addmenuitem;
