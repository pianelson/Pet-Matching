import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>

    <Separator />
    <View>
      <Text style={styles.title}>
        Welcome back!      </Text>
      <Button
        style={styles.button}
        title="Log In"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />

  </SafeAreaView>
);

     /* <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      /> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#F0AD4E',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText:{
    height:50,
    color:"white"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  forgot:{
    color:"peru",
    fontSize:11
  },
  button:{
    width:"80%",
    backgroundColor:"#F0AD4E",
    color:"#F0AD4E",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default App;
