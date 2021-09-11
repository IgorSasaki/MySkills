// Bibliotecas Externas
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styled.button} activeOpacity={0.7} {...rest}>
      <Text style={styled.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
