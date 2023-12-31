import { useReducer } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MotiImage, MotiView } from 'moti';

function Shape() {
  return (
    <MotiImage
      from={{
        height: 400,
        scaleX: 1,
      }}
      animate={{
        height: 0,
        scaleX: 1,
      }}
      transition={{
        type: 'timing',
        duration: 2000
      }}
      style={styles.shape}
      source={require('./assets/KatoTraje.png')}
    />
  );
}

export default function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 450,
    width: 350,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
});
