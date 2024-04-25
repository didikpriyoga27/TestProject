import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

@inject('Main')
@observer
class InitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View className={'flex-1 items-center justify-center'}>
        <Text className="text-red-500">ajhdakljxleajdioa</Text>
      </View>
    );
  }
}

export default InitScreen;
