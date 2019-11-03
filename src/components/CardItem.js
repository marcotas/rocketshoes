import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { currency } from '../utils/format';

class CardItem extends React.Component {
  state = {
    formatedPrice: '',
  };

  componentDidMount() {
    const product = this.props;
    this.setState({ formatedPrice: currency(product.price) });
  }

  render() {
    const product = this.props;
    const { style, onAddToCart, cart } = this.props;
    const { formatedPrice } = this.state;
    const productOnCart = cart.find(p => p.id === product.id);

    return (
      <Card style={style}>
        <Image source={{ uri: product.image }} />
        <Description>{product.title}</Description>
        <Price>{formatedPrice}</Price>

        <Button onPress={onAddToCart}>
          <IconWrapper>
            <MaterialIcons name="add-shopping-cart" color="#fff" size={20} />
            <Counter>{(productOnCart && productOnCart.amount) || 0}</Counter>
          </IconWrapper>

          <ButtonText>Adicionar</ButtonText>
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => {
    return { ...product, formatedPrice: currency(product.price) };
  }),
});

export default connect(mapStateToProps)(CardItem);

const Card = styled.View`
  background-color: white;
  display: flex;
  padding: 10px;
  max-width: 240px;
  border-radius: 4px;
`;
const Image = styled.Image`
  width: 100%;
  height: 200px;
`;
const Description = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 0 10px;
`;
const Price = styled.Text`
  font-size: 21px;
  color: #333;
  font-weight: bold;
  margin: 6px 10px;
`;
const Button = styled.TouchableOpacity`
  background-color: #7f19c1;
  color: white;
  text-transform: uppercase;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;
const IconWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Counter = styled.Text`
  color: #fff;
  margin-left: 6px;
`;
const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
