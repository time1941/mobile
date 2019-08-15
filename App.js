import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  Button,  TouchableHighlight, ScrollView, Image,  Alert} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <ScrollView>
      
      <View style={styles.character}>
          <Text style={styles.titleText} >Character</Text>
          
          <View style={styles.container}>          
          <Image style={styles.inputIcon} source={require('./src/male.png')} />
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
          </View>
          
        
        
        <View style={styles.inputContainer}>
          
          <Text style={styles.inputs}>detail
              </Text>
              {/* placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/> */}
              
        </View>
        <Image style={styles.NBbutton } source={require('./src/next.png')} />
        {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}> */}
          {/* <Text style={styles.loginText}>Login</Text> */}
        {/* </TouchableHighlight>                 */}
        {/* <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener('register')}> */}
        {/* <Text style={styles.registerText}>Register</Text> */}
        {/* </TouchableHighlight> */}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    justifyContent: 'center',    
    backgroundColor: 'white',
  },
  character:{
    flex: 1,   
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#DCDCDC',
      borderRadius:5,
      borderBottomWidth: 1,
      width:300,
      height:200,
      marginTop:10,
      flexDirection: 'row',
      //alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:12,
      marginTop:10,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  NBbutton:{
    width:70,
    height:50,
    marginLeft:300,
    marginRight:25,
    marginTop: 5,
    
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    
  },
  inputIcon:{
    width:270,
    height:290,
    marginLeft:30,
    marginRight:25,
    marginTop: 20,    
      
    
    // justifyContent: 'space-between'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  registerText: {
    fontSize: 14,
    marginTop:-12,    
  },
  titleText:{
    marginTop:10,  
    fontSize: 30,
     
  },
  loginText: {
    color: 'white',
  }
});