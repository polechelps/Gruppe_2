import  React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Control from "./kontroll";
import { displayTime } from "./tid";
import Plussknapp from './plussknapp';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults([]);
      setTime(0);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Plussknapp/>
      <View style={styles.formContainer}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
        <View style={styles.control}>
          <Control isRunning={isRunning}handleLeftButtonPress={handleLeftButtonPress}handleRightButtonPress={handleRightButtonPress}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderColor: '#353748',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 30,
    margin: 20,
    flex: 2.5 / 5, 
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: Constants.statusBarHeight,
  },
  displayText: {
    color: "#353748",
    fontSize: 65,
  },
  control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: { flex: 2 / 5 },
});
