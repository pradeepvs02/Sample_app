import React, {useState, useEffect, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesomeheader from 'react-native-vector-icons/FontAwesome';
import Ioniconsheader from 'react-native-vector-icons/Ionicons';
import Ioniconsheader2 from 'react-native-vector-icons/Ionicons';

function Header({navigation}) {
  useEffect(() => {
    // getUsers();
  }, []);
  const passwordInputRefheader = createRef();
  const [usernameheader, setusernameheader] = useState('');
  return (
    <View style={styles.header}>
      <View>
        <FontAwesomeheader
          name="image"
          size={30}
          color="#808080"
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 25,
            marginRight: -35,
            marginLeft: 15,
          }}
        />
      </View>

      <View style={styles.cardRowheader}>
        <View style={styles.cardRigthColumnheader}>
          <View style={styles.SectionStyleheader}>
            <TouchableOpacity
              style={{alignSelf: 'center', justifyContent: 'center'}}>
              <Ioniconsheader
                name="ios-search-outline"
                size={25}
                color="#000"
                style={{
                  flexDirection: 'column',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.inputStyleheader}
              onChangeText={usernameheader => setusernameheader(usernameheader)}
              placeholder="Search your product here" //dummy@abc.com
              placeholderTextColor="#808080"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRefheader.current &&
                passwordInputRefheader.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
        </View>
      </View>

      <View>
        <Ioniconsheader2
          name="ios-person-circle-outline"
          size={35}
          color="#808080"
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginRight: 15,
            marginLeft: -35,
          }}
        />
        <View style={{}}>
          <Text style={styles.text_header}>username</Text>
        </View>
      </View>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    elevation: 25,
  },
  text_header: {
    marginTop: 3,
    marginBottom: 30,
    color: '#808080',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 8,
    marginRight: 15,
    marginLeft: -35,
  },

  cardRowheader: {
    flexDirection: 'row',
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardRigthColumnheader: {
    width: '85%',
    fontSize: 14,
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: -15,
  },

  SectionStyleheader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    height: 40,
    borderRadius: 20,
    margin: 5,
    elevation: 5,
    borderColor: '#a6a6a6',
    backgroundColor: '#ffff',

    elevation: 14,
  },
  inputStyleheader: {
    flex: 1,
    color: '#000',
    fontSize: 12,
    paddingLeft: 15,
  },
});
