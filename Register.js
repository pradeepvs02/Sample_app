import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  isEyefocus,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';

function Register({navigation}) {
  const passwordInputRef = createRef();
  const [chosenOption, setchosenOption] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [email, setemail] = useState('');
  const [passwordRegis, setpasswordRegis] = useState('');
  const [conpasswordRegis, setconpasswordRegis] = useState('');
  const [passwordvisible, setpasswordvisible] = useState(true);
  const [passwordvisiblecon, setpasswordvisiblecon] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            fontSize: 18,
            margin: 25,
          }}>
          Register Now
        </Text>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            onChangeText={firstname => setfirstname(firstname)}
            selectionColor={'#000'}
            underlineColor="transparent"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            mode="outlined"
            label="First name"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            onChangeText={lastname => setlastname(lastname)}
            selectionColor={'#000'}
            underlineColor="transparent"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            mode="outlined"
            label="Last name"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            onChangeText={mobileno => setmobileno(mobileno)}
            selectionColor={'#000'}
            underlineColor="transparent"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            mode="outlined"
            label="Mobile no"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            onChangeText={email => setemail(email)}
            selectionColor={'#000'}
            underlineColor="transparent"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            mode="outlined"
            label="E-mail ID"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            secureTextEntry={passwordvisible}
            onChangeText={passwordRegis => setpasswordRegis(passwordRegis)}
            mode="outlined"
            label="Password"
            placeholderTextColor="#a6a6a6"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            right={
              <TextInput.Icon
                icon={passwordvisible ? 'eye' : 'eye-off'}
                onPress={() => setpasswordvisible(!passwordvisible)}
                iconColor="#a6a6a6"
              />
            }
            autoCapitalize="none"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            returnKeyType="next"
          />
        </View>

        <View style={styles.containerRegis}>
          <TextInput
            style={styles.inputRegis}
            secureTextEntry={passwordvisiblecon}
            onChangeText={conpasswordRegis =>
              setconpasswordRegis(conpasswordRegis)
            }
            mode="outlined"
            label="Confirm Password"
            theme={{
              roundness: 20,
              colors: {primary: '#000', underlineColor: 'transparent'},
            }}
            right={
              <TextInput.Icon
                icon={passwordvisiblecon ? 'eye' : 'eye-off'}
                onPress={() => setpasswordvisiblecon(!passwordvisiblecon)}
                iconColor="#a6a6a6"
              />
            }
            placeholderTextColor="#a6a6a6"
            autoCapitalize="none"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            returnKeyType="next"
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            margin: 10,
          }}>
          <BouncyCheckbox
            size={25}
            fillColor="#a6a6a6"
            text=" I agree to terms and conditions"
            innerIconStyle={{borderWidth: 1, backgroundColor: '#a6a6a6'}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              color: '#000',
              textDecorationLine: 'none',
            }}
            onPress={value => {
              setchosenOption(value);
            }}
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>{errortext}</Text>
        ) : null}
        {/* <Text>name:{user.firstname}</Text> */}

        <TouchableOpacity
          style={[styles.SubmitRegis]}
          onPress={() =>
            navigation.navigate('Home', {
              firstname: firstname,
              lastname: lastname,
              mobileno: mobileno,
              email: email,
              passwordRegis: passwordRegis,
            })
          }>
          <Text style={styles.textStyleSubmitRegis}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Register;

const styles = StyleSheet.create({
  containerRegis: {
    width: '80%',
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },

  inputRegis: {
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 13,
    color: '#7aef93',
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: '#7aef93',
    paddingTop: 8,
  },
  SubmitRegis: {
    backgroundColor: '#7aef93',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textStyleSubmitRegis: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
