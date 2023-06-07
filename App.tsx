import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (): JSX.Element => {
  const [users, setUsers] = useState<any>([]);
  const [posts, setPosts] = useState<any>([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => setUsers(value));
  };

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(value => setPosts(value));
  };

  const hideUsers = () => {
    setUsers([]);
  };

  const hidePosts = () => {
    setPosts([]);
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <Text key={`item ${index}`}>
      {item.id} --- {item.title}
    </Text>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!users.length ? (
              <TouchableOpacity onPress={fetchUsers} style={styles.button}>
                <Text>Get users</Text>
              </TouchableOpacity>
            ) : (
              <Button title={'Hide users'} onPress={hideUsers} />
            )}
          </View>
          {!!users.length && <Text style={styles.title}>Users</Text>}
        </View>
        <View style={styles.flatList}>
          {!!users.length &&
            users.map((item: any, index: number) => (
              <Text key={`item ${index}`}>
                {item.name} --- {item.username}
              </Text>
            ))}
        </View>

        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!posts.length ? (
              <TouchableOpacity onPress={fetchPosts} style={styles.button}>
                <Text>Get posts</Text>
              </TouchableOpacity>
            ) : (
              <Button title={'Hide posts'} onPress={hidePosts} />
            )}
          </View>
          {!!posts.length && <Text style={styles.title}>Posts</Text>}
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={posts}
            renderItem={renderItem}
            style={styles.flatList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerItem: {
    width: '40%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#64A6FA',
  },
  flatList: {
    height: 500,
  },
});

export default App;
