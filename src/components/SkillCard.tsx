// Bibliotecas Externas
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styled.buttonSkill} {...rest}>
      <Text style={styled.textSkill}>{title}</Text>
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
