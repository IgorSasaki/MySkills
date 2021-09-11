// Bibliotecas Externas
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';

// Componentes
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills([...mySkills, newSkill]);
    setNewSkill('');
  };

  return (
    <View style={styled.container}>
      <Text style={styled.title}>Welcome, Igor Sasaki</Text>

      <TextInput
        style={styled.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styled.title, {marginVertical: 50}]}>My Skills</Text>

      {mySkills.map(skill => (
        <SkillCard skill={skill} key={`${skill}_${Math.random()}`} />
      ))}
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
