import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#353748" : "#353748" },
        ]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "white" : "white" }}>
            {isRunning ? "Nullstill" : "Nullstill"}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#de5833" : "#65bc46" },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "white" : "white" }}>
            {isRunning ? "Stopp" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 100,
    height: 65,
    margin: 25,
    borderRadius: 15,
  },
});

export default React.memo(Control);
