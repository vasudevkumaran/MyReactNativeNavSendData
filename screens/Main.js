import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title:'Home'
    };

    constructor(props) {
        super(props);
        this.state = {textValue:''}
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput style={{width:200,height:40,borderWidth:1,borderColor:'blue',borderRadius:4, margin:10}} 
                value={this.state.textValue} keyboardType='default' onChangeText={(text)=> this.setState({textValue:text})}
                placeholder="Type here"
                />
                <Button title="Click this" onPress={() => { this.props.navigation.navigate('Next',{text:this.state.textValue})}}  />
            </View>
        );
    }
}
