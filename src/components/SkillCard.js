import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        { skill }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  buttonSkill: {
    padding: 20,
    backgroundColor: '#1f1e25',
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 6
  },
})