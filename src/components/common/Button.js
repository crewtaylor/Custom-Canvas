import React, { Component } from 'react';
import { Text } from 'react-native';
import { MKButton } from 'react-native-material-kit';

class Button extends Component {
  constructor(props) {
    super(props);
    if (this.props.centerText) {
      this.state = {
        centerText: 'center'
      };
    } else {
      this.state = {
        centerText: 'left'
      };
    }
  }
  render() {
    return (
      <MKButton
        backgroundColor={this.props.backgroundColor}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.7}
        onPress={this.props.onPress}
      >
          <Text
            pointerEvents="none"
            style={{
              color: this.props.textColor || 'white',
              fontWeight: 'bold',
              padding: 10,
              textAlign: this.state.centerText || ''
             }}
          >
            {this.props.text}
          </Text>
        </MKButton>
    );
  }
}
export { Button };
