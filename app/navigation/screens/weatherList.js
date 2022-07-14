import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import ExpoConstants from 'expo-constants';
import * as Location from 'expo-location';

import { colors } from '../../utils/colors';
// import APIError from '../components/errorModal';
// import NoConnectionServerError from '../components/NoConnectionServerError';
import Styles from '../../utils/styles';
import { getWeatherList } from '../../api/WeatherAPIs';
import WeatherItem from '../components/WeatherItem';

export default function WeatherList({ navigation }) {
  const controller = new AbortController();
  const signal = controller.signal;

  // const [modalVisible, setModalVisible] = useState(false);
  // const [networkErrorStatus, setNetworkErrorStatus] = useState(false);

  const [lat, setLat] = useState(43.6532);
  const [long, setLong] = useState(-79.3832);
  const [weatherList, setWeatherList] = useState({});

  //updates the weather when lat long changes
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
    })();

    getWeatherList(lat, long)
      .then((response) => {
        setWeatherList(
          response.map((apiResponse) => {
            return {
              timezone: apiResponse.data.timezone,
              current: apiResponse.data.current,
              daily: apiResponse.data.daily,
            };
          })
        );
      })
      .catch((error) => {
        console.log('error: ', error);
      });

    return () => controller.abort();
  }, [lat, long]);

  return (
    <View style={styles.mainView}>
      <StatusBar style='auto' />
      {/* <APIError
        visible={modalVisible}
        error={apiError}
        onButtonPress={setModalVisible}
      />
      <NoConnectionServerError
        visible={networkErrorStatus}
        errorStatus={errorStatus}
        onButtonPress={() => {
          setNetworkErrorStatus(false);
          setModalVisible(false);
        }}
      /> */}
      <FlatList
        style={styles.subContainer}
        data={weatherList}
        renderItem={(weather) => {
          return (
            <WeatherItem
              key={weather.index}
              weather={weather.item}
              onPress={(weather) => {
                navigation.navigate('WeatherDetails', { ...weather });
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
    paddingTop: ExpoConstants.statusBarHeight,
  },
  subContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  boldText: { fontWeight: 'bold' },
  cardTitleView: {
    flexDirection: 'row',
    marginHorizontal: '8%',
    paddingTop: 40,
  },
  cardTitle: {
    ...Styles.textBold,
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
  },
  cardTitleIcon: { marginLeft: 24 },
});
