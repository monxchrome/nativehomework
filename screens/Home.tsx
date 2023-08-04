import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  const NavigateToUsers = () => navigation.navigate('Users');

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title={'Users'} onPress={NavigateToUsers} />
    </View>
  );
};

export default Home;
