import React, { useState, useEffect } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import CurrentForecast from '../components/CurrentForecast';
import DailyForecast from '../components/DailyForecast';
import styled from 'styled-components/native';
import bgImg from '../../../assets/4.png';
import { StatusBar } from 'expo-status-bar';

export default function WeatherDetails(props) {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    setWeather(props.route.params);
  });
  return (
    <Container>
      <StatusBar style='auto' />
      <ImageBackground source={bgImg} style={{ width: '100%', height: '100%' }}>
        <CurrentForecast
          currentWeather={props.route.params}
          timezone={weather.timezone}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <FutureForecastContainer>
            {weather.daily ? (
              weather.daily.map((day, index) => {
                if (index !== 0) {
                  return <DailyForecast key={day.dt} day={day} index={index} />;
                }
              })
            ) : (
              <NoWeather>No Weather to show</NoWeather>
            )}
          </FutureForecastContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
