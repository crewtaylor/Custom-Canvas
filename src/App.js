import React, { Component } from 'react';
import { View } from 'react-native';
import { MKTextField, MKColor } from 'react-native-material-kit';
import { Button } from './components/common';

class App extends Component {
  constructor() {
    super();
    this.state = {
      works: true
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 50, borderRadius: 10 }} >
          <Button
            backgroundColor={'#3a5bb1'}
            text='Submit Token'
            centerText
          />
        </View>
        <View style={{ flex: 1, padding: 20, borderRadius: 10 }}>
          <MKTextField
            style={{
              height: 28,  // have to do it on iOS
              marginTop: 32,
            }}
            text='test'
            textInputStyle={{ fontColor: 'black' }}
            tintColor={MKColor.Lime}
            textInputStyle={{ color: MKColor.Orange }}
            placeholder='text'
          />
        </View>
      </View>
    );
  }
}
export default App;
