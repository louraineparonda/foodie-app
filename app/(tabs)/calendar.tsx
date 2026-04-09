import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

const SCREEN_WIDTH = Dimensions.get("window").width;

// FIX: Define the locale directly without spreading the existing one
LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"], // Your single letters
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

const foodLogs = {
  "2026-04-08": [
    "https://picsum.photos/seed/salad/200",
    "https://picsum.photos/seed/coffee/200",
  ],
  "2026-04-10": ["https://picsum.photos/seed/pizza/200"],
};

const FoodBlob = ({ uri }: { uri: string }) => (
  <View style={styles.blobContainer}>
    <Image source={{ uri }} style={styles.blobImage} />
  </View>
);

export default function CalendarTab() {
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendarFull}
        dayComponent={({ date, state }) => {
          const dateString = date?.dateString || "";
          const dayPhotos = foodLogs[dateString as keyof typeof foodLogs] || [];

          return (
            <View style={styles.dayContainer}>
              <Text
                style={[
                  styles.dayText,
                  state === "disabled"
                    ? { color: "#4b4b4b" }
                    : { color: "#ffffff" },
                ]}
              >
                {date?.day}
              </Text>

              <View style={styles.blobsRow}>
                {dayPhotos.map((uri, index) => (
                  <FoodBlob key={index} uri={uri} />
                ))}
              </View>
            </View>
          );
        }}
        theme={{
          calendarBackground: "#000000",
          textMonthFontSize: 22,
          textMonthFontWeight: "bold",
          textSectionTitleColor: "#ffffff",
          // @ts-ignore
          "stylesheet.calendar.main": {
            week: {
              marginTop: 0,
              marginBottom: 0,
              flexDirection: "row",
              justifyContent: "space-around",
              height: 110,
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 50,
  },
  calendarFull: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
  dayContainer: {
    width: SCREEN_WIDTH / 7,
    height: 110,
    alignItems: "center",
    backgroundColor: "#282828",
    borderWidth: 0.5,
    borderColor: "#222",
    borderRadius: 20,
    overflow: "hidden",
    paddingTop: 8,
    margin: 5,
  },
  dayText: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
  },
  blobsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: -12,
  },
  blobContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: "#000",
    backgroundColor: "#eee",
    overflow: "hidden",
  },
  blobImage: {
    width: "100%",
    height: "100%",
  },
});
