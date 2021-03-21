import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export class HeaderHome extends Component {
  gotoNotif = () => {
    this.props.navigation.navigate('Notification');
  };
  render() {
    return (
      <View style={styles.wrapHeader}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Image
              source={{
                uri:
                  'https://matamatamusik.com/wp-content/uploads/2020/01/Niall-Horan-nov-7-2019-bbc-radio-one-billboard-1548.jpg',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View style={styles.descAvatar}>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.title}>Niall Horan</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.gotoNotif}>
          <Icon name="bell" size={24} color="#4D4B57" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapHeader: {
    padding: 10,
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
  },
  descAvatar: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  hello: {
    fontFamily: 'NunitoSans-Regular',
    color: '#646464',
    fontSize: 16,
  },
  title: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
});

export default HeaderHome;
