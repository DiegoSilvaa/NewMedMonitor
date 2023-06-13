import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import { useTheme, Divider } from 'react-native-paper';
import {
  LineChart,
} from 'react-native-chart-kit';
import background from '../../assets/back.png';
import { ImageBackground } from 'react-native';

export default function Home({ navigation }) {
    const theme = useTheme();
    const [activeChartIndex, setActiveChartIndex] = React.useState(0);

    const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 20
    },
    chartContainer: {
        height: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginBottom: '30%',
        width: Dimensions.get('window').width - 40, // Ajusta el ancho del contenedor de la gráfica
        justifyContent: 'center', // Centra la gráfica verticalmente
        marginHorizontal: 20,
    },
    customDivider: {
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        marginVertical: 10,
    },
    midChartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    downChartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'lightgray', // Cambia el color del indicador según tus necesidades
    },
    scrollView: {
        width: '100%',
        height: '70%'
    }
    });
    const [symptoms, setSymptoms] = React.useState([]);
    React.useEffect(() => {
        fetchData();  
    }, []);

    const fetchData = () => {
        fetch('https://med-monitor-api.herokuapp.com/api/v1/sintomas/1', {
        method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            setSymptoms(responseData)
        })
        .catch((error) => {
            console.error(error);
        });
    };


    const handleChartScroll = (event) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const activeIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
      setActiveChartIndex(activeIndex);
    };

  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={styles.mainContainer}>
      <View style={styles.scrollView}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={handleChartScroll}
      >
      {symptoms.map((symptom, index) => {
         if (symptom.terminarSintoma === false) {
          return (
            <View style={styles.chartContainer} key={symptom.id}>
              <>
                <Text style={styles.header}>{symptom.name}</Text>
                {Array.isArray(symptom.intensidad) && symptom.intensidad.length > 1 ? (
                  <LineChart
                    data={{
                      labels: symptom.intensidad.map((_, i) => String(i)),
                      datasets: [
                        {
                          data: symptom.intensidad.map((i) => String(i)),
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width - 100}
                    height={220}
                    chartConfig={{
                      backgroundColor: '#1cc910',
                      backgroundGradientFrom: '#eff3ff',
                      backgroundGradientTo: '#efefef',
                      decimalPlaces: 2,
                      color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                ) : (
                  <Text>No hay datos disponibles</Text>
                )}
                <Divider style={styles.customDivider} />
                <View style={styles.midChartContainer}>
                  <Image
                    source={require('../../assets/health-and-care.png')}
                    style={styles.logo}
                  />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.text}>Promedio nivel de Sintoma:</Text>
                    <Text> Promedio </Text>
                  </View>
                </View>
                <Divider style={styles.customDivider} />
                <View style={styles.downChartContainer}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.text}>Mas Alto:</Text>
                    <Text> Dia y Nivel </Text>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.text}>Mas Bajo:</Text>
                    <Text> Dia y Nivel </Text>
                  </View>
                </View>
              </>
            </View>
          );
        } else {
          return null; // O puedes reemplazarlo con otro componente o vista según tus necesidades
        }
      })}
      </ScrollView>
      </View>
      <View style={styles.indicatorContainer}>
        {symptoms.map((symptom, index) => {
          if (symptom.terminarSintoma === false) {
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === activeChartIndex && { backgroundColor: theme.colors.quinto }, // Cambia el color del indicador activo
                ]}
              />
            )}else {
              return null; // O puedes reemplazarlo con otro componente o vista según tus necesidades
            }
        })}
      </View>
    </View>
    </ImageBackground>
  );
}
