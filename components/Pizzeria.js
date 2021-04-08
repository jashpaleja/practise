import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {set_email,set_number} from './action';


class Pizzeria extends Component{
  //   state = { 
//       email: '',
//       number: ''
//  }
  render(){ 
    const NumberChecker=(number,email)=>{
      // var {number} = this.props.number;
      // var {email} = this.props.email;
      // var regPhone = /^[0]?[123456789]\d{9}$/;
      if(this.props.number==true){
        alert("Check inputs")
        console.log(number.length)
      }
      else{
      // this.props.navigation.navigate('University')
      console.log(email)
       }}
    return (
  <SafeAreaView style={{flex:1,backgroundColor:"#ede6d4"}}>
<KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-500} style={{felx:1}}>
    <ScrollView>
      <View style={styles.pictureContainer}>
      <Image
      style={styles.pic} 
      source={require('./plogo.png')} />
    </View>
    <Text style={styles.login}>Log In</Text>
      <TextInput style={styles.button}
      value={this.props.number}   
      onChangeText={(value)=>this.props.set_number(value)}
      placeholder="Phone Number"
      keyboardType="numeric"
      placeholderTextColor="black"
      />
      <TextInput style={styles.button}   
      value={this.props.email}
      onChangeText={(value)=>this.props.set_email(value)}
      placeholder="Email"
      keyboardType="email-address"
      placeholderTextColor="black"
      />
 <TouchableOpacity
      style={styles.button2}
      onPress={NumberChecker}>
      <Text style={styles.text2}>Send OTP</Text>
 </TouchableOpacity>
 <Text style={{paddingLeft:80,fontSize:15,marginTop:10,marginLeft:2}}>Don't have an account? <Text style={{color:"#0f974f"}}>Signup</Text></Text>
 <TouchableOpacity
      style={styles.button3}>
      <Text style={styles.text3}>Skip</Text>
 </TouchableOpacity>
 </ScrollView>
</KeyboardAvoidingView>
</SafeAreaView>
  );
}
};

const styles=StyleSheet.create({
    button:{
    backgroundColor:'white',
    height:40,
    width:'100%',
    marginBottom:15,
    marginLeft:80,
    paddingLeft:20,
    marginTop:10,
    borderRadius:8
  },
  pictureContainer:{
    paddingTop:60,
    paddingLeft:95
  },text:{
    paddingLeft:20,
    paddingTop:10,
    fontSize:15
  },text2:{
      paddingLeft:20,
      paddingTop:10,
      fontSize:15,
      color:'white'
  },
  pic:{
    width:180,
    height:180
  },
  button2:{
    height:40,
    marginBottom:5,
    marginLeft:80,
    marginTop:10,
    width:'100%',
    backgroundColor:"#0f974f",
    borderRadius:8
  },text3:{
    paddingLeft:20,
    paddingTop:5,
    fontWeight:'bold',
    color:'#0f974f',
    fontSize:16,
    fontFamily:"monospace"
  },
  button3:{
    height:32,
    marginBottom:5,
    marginLeft:140,
    marginTop:100,
    width:80,
    backgroundColor:"#fff",
    borderRadius:15
  },
  body:{
  flex:1,
  },login:{
    paddingLeft:85,
    paddingTop:60,
    fontFamily:"monospace",
    fontSize:17,
    fontWeight:"bold"
  }  
});

function mapStateToProps(state) {  
  return {
    number:state.data.number,
    email:state.data.email
  };
}

export default connect(mapStateToProps, {
  set_number,
  set_email
})(Pizzeria);
