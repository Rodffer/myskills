import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';

export function Home() {
  const [ newSkill, setNewSkill] = useState(''); // estado e função
  const [ mySkills, setMySkills ] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() { // handle quando a função é disparada por uma interação do usuário
    setMySkills(oldState => [... oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12 ){
      setGreeting('Bom dia!');
    } else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde!');
    } else {
      setGreeting('Boa noite!');
    }

    setGreeting
  },[]); //recebe 2 parâmetros 1 função e 1 array de dependência

  return (
    <>
      <View style={styles.container}>
        
        <Text style={styles.title}>
          Bem vindo, Rodffer
        </Text>

        <Text style={styles.greetings}>
        {greeting}
        </Text>
        <TextInput 
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#c3c3c3'
          onChangeText={setNewSkill}
        />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 32 }]}>
        My Skills
      </Text>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={mySkills}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <SkillCard skill={ item }/>
      )}
    />
 
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fffe32',
  },
})