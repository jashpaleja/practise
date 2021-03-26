import React,{Component, useState} from 'react';
import {
  StyleSheet,View,FlatList,ActivityIndicator
} from 'react-native';
import Card from './Card';
import {fetchData} from './action';
import {connect} from 'react-redux';
class University extends Component{
  componentDidMount(){
    this.props.fetchData()
    // this.closeActivityIndicator()
  }
  render(){
if(this.props.loader){
  return (
    <View style = {styles.loader}>
    <ActivityIndicator
    color = '#bc2b78'
    size = "large"
    style = {styles.activityIndicator}/>
  </View>)
} 
    return (
    <View style={{backgroundColor:'#caf7e3'}}>
      <FlatList
      data={this.props.university}
      keyExtractor={item=>item.id}
      renderItem={itemdata=><Card
      name={itemdata.item.name}
      country={itemdata.item.country}
      website={itemdata.item.web_pages[0]}
      />}
      />
    </View>
  );

}
};

const styles = StyleSheet.create({
loader:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
})

function mapStateToProps(state) {  
  return {
    university: state.data.unidata,
    loader:state.data.loader
  };
}

export default connect(mapStateToProps, {
  fetchData,
})(University);