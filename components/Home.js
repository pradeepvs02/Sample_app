import React, {useState, Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import CardView from 'react-native-cardview';
import {navigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

function Home({navigation}) {
  const route = useRoute();
  const firstname = route.params?.firstname;
  const lastname = route.params?.lastname;
  const mobileno = route.params?.mobileno;
  const email = route.params?.email;
  const passwordRegis = route.params?.passwordRegis;

  return (
    <View style={styles.containerHome}>
      <Header />
      <ScrollView>
        <View style={{flex: 1}}>
          <CardView
            cardElevation={10}
            cardMaxElevation={25}
            cornerRadius={5}
            borderWidth={2}
            style={styles.cardStyle}></CardView>
          <CardView
            cardElevation={10}
            cardMaxElevation={25}
            cornerRadius={5}
            borderWidth={2}
            style={styles.cardStyle1}></CardView>
          <CardView
            cardElevation={10}
            cardMaxElevation={25}
            cornerRadius={5}
            borderWidth={2}
            style={styles.cardStyle2}></CardView>
          <CardView
            cardElevation={10}
            cardMaxElevation={25}
            cornerRadius={5}
            borderWidth={2}
            style={styles.cardStyle3}></CardView>
          <CardView
            cardElevation={10}
            cardMaxElevation={25}
            cornerRadius={5}
            borderWidth={2}
            style={styles.cardStyle4}></CardView>
        </View>
      </ScrollView>

      <Footer
        style={{marginBottom: 0}}
        onPress={() => {
          navigation.replace('Profile', {
            firstname: firstname,
            lastname: lastname,
            mobileno: mobileno,
            email: email,
            passwordRegis: passwordRegis,
          });
        }}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#808080',
    marginBottom: 0,
  },
  cardStyle: {
    alignSelf: 'center',
    width: '90%',
    height: 140,
    margin: 10,
  },

  cardStyle1: {
    alignSelf: 'center',
    width: '90%',
    height: 140,
    margin: 10,
  },

  cardStyle2: {
    alignSelf: 'center',
    width: '90%',
    height: 150,
    margin: 10,
  },

  cardStyle3: {
    alignSelf: 'center',
    width: '90%',
    height: 140,
    margin: 10,
  },

  cardStyle4: {
    alignSelf: 'center',
    width: '90%',
    height: 140,
    margin: 10,
  },
});
