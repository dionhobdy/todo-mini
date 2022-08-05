import { StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_300Light} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

import plusTask from './assets/plusTask.png';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["#1f1e1e", "#2b2b2b", "#3d3d3d", "#454443"]}
    >
      <StatusBar style="light"/>


      <Text style={fonts.header}>Todo-Mini</Text>
      <TouchableOpacity
        onPress = {() =>{
          
          }}
      >
          <Image source={plusTask} style={images.plusTask}/>
      </TouchableOpacity>
      <Text style={fonts.subHeader}>The Minimalist Secretary</Text>

      <Text style={fonts.subBody}>Tap plusTask Button To Add Task</Text>


      <Text style={fonts.footer}>Todo-Mini written by Dion Hobdy</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const fonts = StyleSheet.create({
  header: {
    color: "#fff", 
    flexDirection: 'row',
    fontSize: 40,
    fontFamily: 'Inter_300Light',
    position: 'absolute', left: 20, top: 40,
    borderBottomColor: "#69f5d9",
    borderBottomWidth: 1,
  },
  subHeader: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'Inter_300Light',
    position: 'absolute', left: 20, top: 100,
  },
  subBody: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Inter_300Light',
    left: 55,
    opacity: .85,
  },
  footer: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Inter_300Light',
    opacity: .5,
    top: 365,
    right: 75,
  },
});

const images = StyleSheet.create({
  plusTask: {
    flexDirection: 'row',
    width: 65,
    height: 65,
    opacity: .95,
    left: 335,
    bottom: 280,
  }
});