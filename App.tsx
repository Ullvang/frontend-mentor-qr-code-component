import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar as SBRN,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";

export default function App() {
  const _linkToFrontendMentor = async () => {
    WebBrowser.openBrowserAsync("https://www.frontendmentor.io?ref=challenge");
  };
  const _linkToMyGitHub = async () => {
    WebBrowser.openBrowserAsync("https://github.com/Ullvang");
  };

  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
        <View style={styles.card}>
          <Image
            style={styles.imageQRCode}
            source={require("./assets/images/image-qr-code.png")}
          />
          <View style={styles.cardText}>
            <Text style={styles.title}>
              Improve your front-end skills by building projects
            </Text>
            <Text style={styles.paragraph}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Challenge by{" "}
            <Text onPress={_linkToFrontendMentor} style={styles.link}>
              Frontend Mentor
            </Text>
            .{"\n"}Coded by{" "}
            <Text onPress={_linkToMyGitHub} style={styles.link}>
              Jon Erik Ullvang
            </Text>
            .
          </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const paddingContainer = 24;
let padding = paddingContainer * 2 + 16 * 2;
const win = Dimensions.get("window");

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? SBRN.currentHeight : 0,
  },
  container: {
    padding: paddingContainer,
    flex: 1,
    backgroundColor: "hsl(212, 45%, 89%)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "hsl(0, 0%, 100%)",
    marginVertical: 64,
    padding: 16,
    paddingBottom: 32,
    borderRadius: 16,
    maxWidth: 375 - paddingContainer * 2,
  },
  cardText: {
    paddingHorizontal: 16,
  },
  footer: {
    position: "absolute",
    bottom: 8,
  },
  footerText: {
    textAlign: "center",
    lineHeight: 24,
    color: "hsl(218, 44%, 22%)",
    fontFamily: "Outfit_400Regular",
  },
  imageQRCode: {
    width: win.width < 375 ? win.width : win.width - padding,
    height: win.height < 375 ? win.width : win.width - padding,
    maxWidth: 375 - padding,
    maxHeight: 375 - padding,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 16,
    color: "hsl(218, 44%, 22%)",
    fontFamily: "Outfit_700Bold",
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
    color: "hsl(220, 15%, 55%)",
    fontFamily: "Outfit_400Regular",
  },
  link: {
    textDecorationLine: "underline",
    color: "#3e52a3",
    fontFamily: "Outfit_400Regular",
  },
});
