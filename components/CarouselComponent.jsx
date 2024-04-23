// import React from 'react';
// import { View, Text, } from 'react-native';

// const CarouselComponent = () => {
//     const data = [
//         {
//             title: 'Item 1',
//             discount: '20%',
//             icon: ''
//         },
//         {
//             title: 'Item 2',
//             discount: '20%',
//             icon: ''
//         },
//         {
//             title: 'Item 3',
//             discount: '20%',
//             icon: ''
//         },
//         {
//             title: 'Item 4',
//             discount: '20%',
//             icon: ''
//         },
//         {
//             title: 'Item 5',
//             discount: '20%',
//             icon: ''
//         }
//     ];

//     return (
//         <View className='flex flex-row ' >
//             {data.map(item => {
//                 return <View className=' bg-white w-1/5 h-1/6 rounded-xl'>
//                     <Text >{item.title}</Text>
//                 </View>
//             })}
//         </View>
//     );
// };

// export default CarouselComponent;
import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay={false}
      autoplayLoop={true}
      index={0}
      showPagination
      data={colors}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 0.5, height:'2%', backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.1, textAlign: 'center' },
});

export default App;