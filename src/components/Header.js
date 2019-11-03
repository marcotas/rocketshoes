import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import Logo from '../../assets/logo.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Header({ cart, navigation }) {
  function navigateTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => navigateTo('Main')}>
        <Logo />
      </TouchableOpacity>

      <BasketWrapper onPress={() => navigateTo('Cart')}>
        <MaterialIcons color="#fff" size={32} name="shopping-basket" />

        {cart.length ? (
          <CartCounter>
            <CounterText>{cart.length}</CounterText>
          </CartCounter>
        ) : null}
      </BasketWrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);

const Container = styled.View`
  padding: 30px;
  padding-top: 50px;
  background-color: #191920;
  flex-direction: row;
  justify-content: space-between;
`;
const CartCounter = styled.View`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: #7f19c1;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CounterText = styled.Text`
  color: white;
`;
const BasketWrapper = styled.TouchableOpacity``;
