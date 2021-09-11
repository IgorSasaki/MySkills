// Bibliotecas Externas
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface SkillCardProps {
  skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({skill}) => {
  return (
    <TouchableOpacity style={styled.buttonSkill}>
      <Text style={styled.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
