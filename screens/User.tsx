import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import { useRoute } from "@react-navigation/native";

const User = () => {
  const [user, setUser] = useState<any>(null);
  const { params } = useRoute<any>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then(res => res.json())
      .then(json => setUser(json));
  }, [params.userId]);

  if (!user) {
    return null;
  }

  return (
    <View>
      <Text>Current user is:</Text>
      <Text>
        ID: {user.id} --- Name: {user.name}
      </Text>
    </View>
  );
};

export default User;
