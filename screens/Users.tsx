import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Users = () => {
  const [users, setUsers] = useState<any[]>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const navigateToUser = (userId: string) =>
    navigation.navigate('User', {
      userId,
    });

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigateToUser(item.id as string)}
        style={{
          backgroundColor: 'grey',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'blue',
        }}>
        <Text>
          ID: {item.id} --- Name: {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Users Screen</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default Users;
