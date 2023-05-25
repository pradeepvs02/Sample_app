import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Modal,
  BackHandler,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageLoad from 'react-native-image-placeholder';
import QRCode from 'react-native-qrcode-svg';
import {navigation, useRoute} from '@react-navigation/native';

function Profile({navigation}) {
  const route = useRoute();
  const firstname = route.params?.firstname;
  const lastname = route.params?.lastname;
  const mobileno = route.params?.mobileno;
  const email = route.params?.email;
  const passwordRegis = route.params?.passwordRegis;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    navigation.replace('Home', {
      firstname: firstname,
      lastname: lastname,
      mobileno: mobileno,
      email: email,
      passwordRegis: passwordRegis,
    });
    return true;
  };

  const passwordInputRef = createRef();
  const [modalVisibleTopup, setModalVisibleTopup] = useState(false);
  const [modalVisibleTopup1, setModalVisibleTopup1] = useState(false);
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState(
    firstname,
    lastname,
    mobileno,
    email,
    passwordRegis,
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
        {/*Topup button Style...*/}

        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            alignSelf: 'center',
            justifyContent: 'center',
            fontSize: 18,
            margin: 10,
          }}>
          My profile
        </Text>

        <TouchableOpacity onPress={() => setModalVisibleTopup(true)}>
          <ImageLoad
            style={{
              width: '55%',
              height: 100,
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              marginLeft: 90,
            }}
            loadingStyle={{
              size: 'large',
              color: 'blue',
            }}
            source={require('./assets/placeholder.png')}
          />
          <View style={[styles.btncapture]}>
            <View style={styles.cardRow4}>
              <View style={styles.cardRigthColumn4}>
                <AntDesign2 name="camera" size={18} color="#000" />
              </View>
              <Text style={styles.cardLeftColumn4}> Capture my image </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.cardRow3}>
          <View style={styles.cardRigthColumn3}>
            <Entypo name="share" size={18} color="#29323c" marginLeft={65} />
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisibleTopup1(true, {
                firstname: firstname,
                lastname: lastname,
                mobileno: mobileno,
                email: email,
                passwordRegis: passwordRegis,
              });
            }}>
            <Text style={styles.cardLeftColumn3}>
              Share my profile details via Qr code
            </Text>
          </TouchableOpacity>
        </View>

        {/*Topup open Modal Style...*/}
        <View style={styles.cardRow2}>
          <Text style={styles.cardLeftColumn2}>Registered first name</Text>
          <View style={styles.cardRigthColumn2}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={firstname} //dummy@abc.com
                placeholderTextColor="#29323c"
                editable={false}
                blurOnSubmit={false}
              />
              <View style={styles.Icon1}>
                <MaterialCommunityIcons
                  name="shield-lock"
                  size={20}
                  color="#29323c"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardRow2}>
          <Text style={styles.cardLeftColumn2}>Registered last name</Text>
          <View style={styles.cardRigthColumn2}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={lastname} //dummy@abc.com
                placeholderTextColor="#29323c"
                editable={false}
                blurOnSubmit={false}
              />
              <View style={styles.Icon1}>
                <MaterialCommunityIcons
                  name="shield-lock"
                  size={20}
                  color="#29323c"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardRow2}>
          <Text style={styles.cardLeftColumn2}>Registered mobile no</Text>
          <View style={styles.cardRigthColumn2}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={mobileno} //dummy@abc.com
                placeholderTextColor="#29323c"
                editable={false}
                blurOnSubmit={false}
              />
              <View style={styles.Icon1}>
                <MaterialCommunityIcons
                  name="shield-lock"
                  size={20}
                  color="#29323c"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardRow2}>
          <Text style={styles.cardLeftColumn2}>Registered E-mail ID</Text>
          <View style={styles.cardRigthColumn2}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={email} //dummy@abc.com
                placeholderTextColor="#29323c"
                editable={false}
                blurOnSubmit={false}
              />
              <View style={styles.Icon1}>
                <MaterialCommunityIcons
                  name="shield-lock"
                  size={20}
                  color="#29323c"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardRow2}>
          <Text style={styles.cardLeftColumn2}>Registered Password</Text>
          <View style={styles.cardRigthColumn2}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={passwordRegis} //12345
                placeholderTextColor={'#000'}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                editable={false}
              />
              <View style={{marginRight: 15}}>
                <View>
                  <Icon name="eye" size={20} color={'#29323c'} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Modal for capture image */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTopup}
        onRequestClose={() => {
          setModalVisibleTopup(!modalVisibleTopup);
        }}>
        <ImageBackground style={styles.blur}>
          <View style={styles.TopupcenteredView}>
            <View style={styles.TopupmodalView}>
              {/*Topup Card View Style...*/}
              <View style={styles.cardRow1}>
                <Text style={styles.cardLeftColumn1}>My Profile Picture</Text>
                <View style={styles.cardRigthColumn1}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisibleTopup(!modalVisibleTopup);
                    }}>
                    <AntDesign
                      name="closecircleo"
                      size={25}
                      color="#29323c"
                      marginRight={-25}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  margin: 10,
                }}>
                Your captured image
              </Text>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisibleTopup(!modalVisibleTopup);
                  }}>
                  <ImageLoad
                    style={{
                      width: '85%',
                      height: 100,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      alignContent: 'center',
                      marginLeft: 10,
                      marginBottom: 0,
                    }}
                    loadingStyle={{
                      size: 'large',
                      color: 'blue',
                    }}
                    source={require('./assets/placeholder.png')}
                  />
                  <View style={[styles.Retake]}>
                    <Text style={styles.textStyleRetake}>Retake another</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/*Topup close button Style...*/}
                <TouchableOpacity
                  style={[styles.Submit]}
                  onPress={() => {
                    setModalVisibleTopup(!modalVisibleTopup);
                  }}>
                  <Text style={styles.textStyleSubmit}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Modal>

      {/* Modal for profile share */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTopup1}
        onRequestClose={() => {
          setModalVisibleTopup1(!modalVisibleTopup1);
        }}>
        <ImageBackground style={styles.blur}>
          <View style={styles.TopupcenteredView}>
            <View style={styles.TopupmodalView}>
              {/*Topup Card View Style...*/}

              <View style={styles.cardRow1}>
                <Text style={styles.cardLeftColumn1}>My QR Code</Text>

                <View style={styles.cardRigthColumn1}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisibleTopup1(!modalVisibleTopup1);
                    }}>
                    <AntDesign
                      name="closecircleo"
                      size={25}
                      color="#29323c"
                      marginRight={-25}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  margin: 10,
                  fontWeight: 'bold',
                }}>
                Registered your first and last name
              </Text>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 5,
                  padding: 8,
                }}>
                <QRCode
                  //QR code value
                  value={qrvalue ? qrvalue : 'NA'}
                  //size of QR Code
                  size={100}
                  //Color of the QR Code (Optional)
                  color="black"
                  //Background Color of the QR Code (Optional)
                  backgroundColor="white"
                  //Logo of in the center of QR Code (Optional)
                  logo={{
                    url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                  }}
                  //Center Logo size  (Optional)
                  logoSize={10}
                  //Center Logo margin (Optional)
                  logoMargin={2}
                  //Center Logo radius (Optional)
                  logoBorderRadius={15}
                  //Center Logo background (Optional)
                  logoBackgroundColor="#000"
                />
              </View>

              <View style={styles.SectionStyleQr}>
                <TextInput
                  style={styles.inputStyleQr}
                  placeholder={firstname} //dummy@abc.com
                  placeholderTextColor="#29323c"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  editable={false}
                  onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.SectionStyleQr}>
                <TextInput
                  style={styles.inputStyleQr}
                  placeholder={lastname}
                  placeholderTextColor="#29323c"
                  returnKeyType="next"
                  editable={false}
                  blurOnSubmit={false}
                />
              </View>

              <TouchableOpacity style={styles.buttonStyleQr} onPress={() => {}}>
                <Text style={styles.buttonTextStyleQr}>Share my profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </ScrollView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  mainBody: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  blur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

  Icon1: {
    marginRight: 15,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    margin: 5,
    elevation: 5,
    borderColor: '#a6a6a6',
    backgroundColor: '#d9d9d9',
    marginLeft: 15,
    marginRight: 15,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingLeft: 15,
  },

  SectionStyleQr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderRadius: 30,
    margin: 10,
    elevation: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
  },
  inputStyleQr: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingLeft: 15,
  },

  btncapture: {
    backgroundColor: '#7aef93',
    borderRadius: 40,
    width: '50%',
    alignSelf: 'center',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  Topuptxt: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },

  Actionbtnview: {
    backgroundColor: '#2196F3',
    borderRadius: 3,
    width: '43%',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  TopupcenteredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },

  TopupmodalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    width: '85%',
  },

  buttonClose: {
    backgroundColor: '#ec2F4B',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '30%',
    alignSelf: 'center',
  },

  Retake: {
    backgroundColor: '#7aef93',
    borderRadius: 25,
    elevation: 2,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
    height: 50,
  },

  Submit: {
    backgroundColor: '#7aef93',
    borderRadius: 25,
    height: 50,
    elevation: 2,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  textStyleclose: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleRetake: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textStyleSubmit: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  AmountSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: '30%',
    borderRadius: 15,
    margin: 6,
    borderColor: '#000',
    width: '50%',
  },

  AmountSectionStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    margin: 6,
    marginLeft: 15,
    marginRight: 15,
  },

  AmountSectionStyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    margin: 6,
    marginLeft: 15,
    marginRight: 15,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingLeft: 15,
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    margin: 5,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardLeftColumn: {width: '43%', margin: 5},

  cardRigthColumn: {
    width: '43%',
    margin: 5,
  },

  cardRow1: {
    flexDirection: 'row',
    marginTop: 2,
  },
  cardLeftColumn1: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    fontSize: 14,
    margin: 5,
    marginLeft: 12,
  },

  cardRigthColumn1: {
    fontSize: 14,
    color: '#000',
    marginRight: 10,
  },
  cardRow2: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLeftColumn2: {
    width: '30%',
    fontSize: 12,
    color: '#000',
    margin: 2,
    marginLeft: 20,
  },

  cardRigthColumn2: {
    width: '65%',
    fontSize: 14,
    color: '#000',
    margin: 2,
    marginRight: 10,
  },

  cardRow3: {
    flexDirection: 'row',
    marginTop: 2,
  },
  cardLeftColumn3: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    margin: 5,
  },

  cardRigthColumn3: {
    color: '#000',
    marginLeft: 12,
    margin: 5,
  },

  cardRow4: {
    flexDirection: 'row',
    marginTop: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardLeftColumn4: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },

  cardRigthColumn4: {
    color: '#000',
    margin: 5,
  },

  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  buttonStyleQr: {
    backgroundColor: '#7aef93',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
    padding: 8,
    width: '80%',
    height: 50,
  },
  buttonTextStyleQr: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
