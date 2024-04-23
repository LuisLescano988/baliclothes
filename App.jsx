import { Text, View } from 'react-native';
import CarouselComponent from './components/CarouselComponent';

export default function App() {
  return (
    <View className='flex bg-slate-100 h-full relative items-center'>
      <View className=' h-1/4 w-screen bg-green-500 relative flex justify-center'>
        <Text className='bg-yellow-200 text-slate-600 rounded-3xl left-1/4 h-12 w-1/2 text-center text-base pt-3 mt-9'>
          Mis puntos cliente Shawa
        </Text>
      </View>
      <View className=' bg-white h-1/3 w-5/6 -mt-12 rounded-2xl border border-zinc-200'>
      </View>
        <View className='pt-10'>
          <CarouselComponent/>
        </View>
    </View>
  );
}
