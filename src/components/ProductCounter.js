import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const ProductCounter = ({ product }) => {
  return (
    <Container>
      <Icon>
        <Ionicons name="ios-remove-circle-outline" color="#7f19c1" size={24} />
      </Icon>

      <Input>{product.amount}</Input>

      <Icon>
        <Ionicons name="ios-add-circle-outline" color="#7f19c1" size={24} />
      </Icon>
    </Container>
  );
};

export default ProductCounter;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Input = styled.Text`
  width: 40px;
  height: 26px;
  text-align: center;
  padding: 3px;
  margin: 0 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
  border-radius: 4px;
`;
const Icon = styled.TouchableOpacity``;
