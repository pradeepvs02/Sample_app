import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = Props => {
  return (
    <View style={styles.containerFooter}>
      <View style={styles.bottomtabbox}>
        <View style={styles.bottomtabinnerstyle}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 70,
              justifyContent: 'center',
            }}>
            <View style={styles.Footer}>
              {/* openDrawer  View Style .... */}
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <TouchableOpacity onPress={Props.onPress}>
                  <Ionicons
                    name="person"
                    size={27}
                    style={{
                      flexDirection: 'column',
                      marginLeft: 20,
                      color: '#808080',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                  />
                  <Text
                    style={{
                      color: '#808080',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginLeft: 20,
                      fontWeight: 'bold',
                    }}>
                    Profile
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: '#7aef93',
                  width: 70,
                  height: 70,
                  borderWidth: 1,
                  borderColor: '#7aef93',
                  elevation: 15,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginBottom: 35,
                  borderTopColor: '#808080',
                }}>
                <TouchableOpacity>
                  <Entypo
                    name="home"
                    size={27}
                    style={{
                      flexDirection: 'column',
                      color: '#000',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      margin: 2,
                      fontWeight: 'bold',
                    }}>
                    Home
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <TouchableOpacity>
                  <Fontisto
                    name="equalizer"
                    size={27}
                    style={{
                      flexDirection: 'column',
                      marginRight: 20,
                      color: '#808080',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                  />

                  <Text
                    style={{
                      color: '#808080',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginRight: 20,
                      margin: 2,
                      fontWeight: 'bold',
                    }}>
                    Settings
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  containerFooter: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },

  Footer: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopRightRadius: 35,
    marginBottom: 0,
  },

  bottomtabbox: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 0,
  },
  bottomtabinnerstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
