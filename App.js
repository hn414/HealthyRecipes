import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet,TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bruschetta from './assets/bruschetta.png'

function HomeScreen({ navigation }) {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image source={bruschetta} style={styles.bruschetta} />
      <TextInput 
        style={styles.input}
        placeholder="Enter the Number of Servings"
        onChangeText = {newText => setInput(newText)}
        
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Recipe', {
            input: input,
            plumTomatoes: 4,
            basilLeaves: 6,
            garlicCloves: 3,
            oliveOil: 3 
        });
      }}
      >
        <Text style={styles.buttonText}>View Recipe</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsRecipe({route}) {
  const {input} = route.params;
  const {plumTomatoes} = route.params;
  const {basilLeaves} = route.params;
  const {garlicCloves} = route.params;
  const {oliveOil} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta </Text>
      <Text style={styles.heading}>Ingredients</Text>
      <Text style={styles.text}>{input * plumTomatoes} plum tomatoes</Text>
      <Text style={styles.text}>{input * basilLeaves} basil leaves</Text>
      <Text style={styles.text}>{input * garlicCloves} garlic cloves, chopped</Text>
      <Text style={styles.text}>{input * oliveOil} TB olive oil</Text>
      <Text style={styles.heading}>Directions</Text>
      <Text style={styles.text}>Combine the ingredients add salt to taste. Top French bread slices with mixture</Text>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Healthy Recipes' }}
        />
        <Stack.Screen 
        name="Recipe" 
        component={DetailsRecipe}
        options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  bruschetta:{
    width: 411, 
    height: 292, 
    marginTop:10,
  },
  input: {
    height: 40,
    padding: 10,
    color: 'gray',
    marginBottom: 10,
    marginTop: 10,
  },
  button:{
    height: 50,
    width: 150,
    alignItems: "center",
    backgroundColor:'gray',
    margin: 20,
  },
  buttonText: {
    color: 'ffffff',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  heading:{
    marginTop: 20,
    fontSize: 30,
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  text:{
    fontSize: 24,
    paddingLeft: 45,
    alignSelf: "flex-start",
    
  },

})

export default App;