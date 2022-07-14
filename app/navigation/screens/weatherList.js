import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground, FlatList } from 'react-native';
import * as Location from 'expo-location';
import styled from 'styled-components/native';
import bgImg from '../../../assets/4.png';
import { getWeatherList } from '../../api/WeatherAPIs';
import WeatherItem from '../components/WeatherItem';
import * as SQLite from 'expo-sqlite';

export default function WeatherList({ navigation }) {
  const openDatabase = () => {
    if (Platform.OS === 'web') {
      return {
        transaction: () => {
          return {
            executeSql: () => {},
          };
        },
      };
    }

    const db = SQLite.openDatabase('weather-db.db');
    return db;
  };

  const db = openDatabase();

  const [lat, setLat] = useState(43.6532);
  const [long, setLong] = useState(-79.3832);
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(`select * from weathers`, [], (tx, results) => {
        if (weatherList.length === 0) {
          console.log('result response');
          setWeatherList(results.rows._array);
        }
      });
    });

    return () => {
      if (weatherList.length > 0 && weatherList[0].daily) {
        const valuesToPush = [];
        var len = weatherList.length;

        for (let i = 0; i < len; i++) {
          const values = {
            lat: weatherList[i].lat,
            lon: weatherList[i].lon,
            icon: weatherList[i].icon,
            timezone: weatherList[i].timezone,
            temp: weatherList[i].temp,
            feels_like: weatherList[i].feels_like,
            description: weatherList[i].description,
          };
          0;
          valuesToPush.push(...Object.values(values));
        }
        db.transaction((tx) => {
          tx.executeSql(
            'create table if not exists weathers (id integer primary key not null, lat real, lon real,icon text, timezone text, temp text, feels_like text,description text);'
          );
          tx.executeSql(`delete * from weathers`);
          tx.executeSql(
            'insert into weathers (lat,lon,icon,timezone,temp,feels_like,description) values (?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?),(?,?,?,?,?,?,?)',
            valuesToPush
          );
        });
      }
    };
  }, [db]);

  const getWeather = () => {
    getWeatherList(lat, long)
      .then((response) => {
        setWeatherList(
          response.map((apiResponse) => {
            return {
              ...apiResponse.data.current,
              ...apiResponse.data.current.weather[0],
              timezone: apiResponse.data.timezone,
              lat: apiResponse.data.lat,
              lon: apiResponse.data.lon,
              daily: apiResponse.data.daily,
            };
          })
        );
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  useEffect(() => {
    getWeather();
    const interval = setInterval(() => {
      getWeather();
    }, 60000);

    return () => clearInterval(interval);
  }, [long]);

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
  }, []);

  return (
    <Container>
      <StatusBar style='auto' />
      <ImageBackground source={bgImg} style={{ width: '100%', height: '100%' }}>
        <FlatList
          style={styles.list}
          data={weatherList}
          keyExtractor={(item, index) => String(index)}
          renderItem={(weather) => {
            return (
              <WeatherItem
                weather={weather.item}
                onPress={(weather) => {
                  navigation.navigate('WeatherDetails', { ...weather });
                }}
              />
            );
          }}
        />
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 16,
    width: '100%',
    height: '100%',
  },
});

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;
