import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputA: 0,
      inputB: 0,
      sum: 0
    }
    this.onInputAChange = this.onInputAChange.bind(this)
    this.onInputBChange = this.onInputBChange.bind(this)
  }

  onInputAChange(inputA) {
    this.setState({ inputA }, () => {
      this.updateSum()
    })
  }

  updateSum() {
    const { inputA, inputB } = this.state
    const sum = parseInt(inputA, 10) + parseInt(inputB, 10)
    console.log(inputA, inputB)
    this.setState({ sum })
  }

  onInputBChange(inputB) {
    this.setState({ inputB }, () => {
      this.updateSum()
    })
  }

  render() {
    const { sum, inputA, inputB } = this.state

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>InputA</Text>
          <TextInput
            editable
            maxLength={5}
            value={inputA.toString()}
            onChangeText={this.onInputAChange}
            testID= {"ButtonText"}
            accessibilityLabel= {"ButtonTextDesc"}
          />
          <Text>InputB</Text>
          <TextInput
            editable
            maxLength={5}
            value={inputB.toString()}
            onChangeText={this.onInputBChange}
          />
          <Text>Sum</Text>
          <TextInput
            editable={false}
            value={sum.toString()}
          />
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
