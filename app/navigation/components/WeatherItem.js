import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const WeatherItem = ({ weather, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(weather)}>
      <DayContainer>
        <IconTempView>
          <WeatherIcon
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`,
            }}
            resizeMode={'contain'} // cover or contain its upto you view look
          />
          <Text>{weather.current.weather[0].description}</Text>
        </IconTempView>
        <DegreeView>
          <Degree>{Math.round(weather.current.temp)}°C</Degree>
          <FeelsLike>
            Feels {Math.round(weather.current.feels_like)}°C
          </FeelsLike>
        </DegreeView>
      </DayContainer>
    </TouchableOpacity>
  );
};

const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 478px;
`;

const IconTempView = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  flex: 2;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const DegreeView = styled.View`
  text-align: center;
  flex: 1;
`;

const Degree = styled.Text`
  font-size: 24px;
`;

const FeelsLike = styled.Text`
  font-size: 14px;
`;

export default WeatherItem;
