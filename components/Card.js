import React,{Component} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

class Card extends Component{
render(){
  const web = this.props.website
  return (
    
      <View style={styles.container}>
    <View style={{flexDirection:'row',width:'80%'}}>
      <Text style={styles.Name}>Name:</Text>  
      <Text style={styles.namevalue}>{this.props.name}</Text>
    </View>
    <View style={{flexDirection:'row',width:'80%'}}>
      <Text style={styles.Name}>Country:</Text>  
      <Text style={styles.namevalue}>{this.props.country}</Text>
    </View>
    <View style={styles.button}>
    <Button
    onPress={()=>Linking.openURL(web)}
    // onPress={()=>{console.log(web)}}
    title="Website"
    color="#00917c"/>
    </View>
    </View>
  );
}
};

const styles = StyleSheet.create({
container:{
  marginLeft:wp('7%'),
  width:wp('86%'),
  // height:hp('30%'),
  backgroundColor:'#edffec',
  marginTop:hp('4%'),
  borderRadius:hp('4%'),
},Name:{
  fontSize:hp('3%'),
  alignSelf:'center',
  padding:wp('4%')
},
namevalue:{
fontSize:hp('3%'),
alignSelf:'center',
paddingTop:wp('4%'),
paddingBottom:wp('4%'),
paddingRight:wp('8%')
},button:{
  paddingHorizontal:wp('15%'),
  paddingVertical:hp('2%')
}
})





export default Card;