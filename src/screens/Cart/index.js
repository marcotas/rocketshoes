import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProductCounter from '../../components/ProductCounter';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { currency } from '../../utils/format';

function Cart({ cart, total }) {
  return (
    <Container>
      <Card>
        {cart.map(product => (
          <CartItem key={String(product.id)}>
            <ProductDetails>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />

              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductInfo>

              <TouchableOpacity>
                <Ionicons name="ios-remove-circle" size={24} color="#7f19c1" />
              </TouchableOpacity>
            </ProductDetails>

            <ProductSubTotal>
              <ProductCounter product={product} />

              <ProductPrice>{product.subtotal}</ProductPrice>
            </ProductSubTotal>
          </CartItem>
        ))}

        {cart.length ? (
          <>
            <TotalText>Total</TotalText>
            <TotalPrice>{total}</TotalPrice>

            <Button>
              <ButtonText>Finalizar Pedido</ButtonText>
            </Button>
          </>
        ) : (
          <EmptyCart>
            <EmptyIconWrapper>
              <MaterialIcons
                name="remove-shopping-cart"
                color="#ccc"
                size={100}
              />
            </EmptyIconWrapper>

            <EmptyText>Seu carrinho está vazio</EmptyText>
          </EmptyCart>
        )}
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => {
    return {
      ...product,
      priceFormatted: currency(product.price),
      subtotal: currency(product.amount * product.price),
    };
  }),
  total: currency(
    state.cart.reduce(
      (total, product) => product.amount * product.price + total,
      0
    )
  ),
});

export default connect(mapStateToProps)(Cart);

const Container = styled.ScrollView`
  height: 100%;
  background-color: #191920;
  padding: 0 30px;
`;
const Card = styled.View`
  background-color: white;
  border-radius: 4px;
  padding: 10px;
`;
const CartItem = styled.View`
  padding: 5px;
`;
const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #999;
  text-transform: uppercase;
  margin-top: 20px;
`;
const TotalPrice = styled.Text`
  color: #111;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;
const Button = styled.TouchableOpacity`
  background-color: #7f19c1;
  height: 42px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

// Products
const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;
const ProductInfo = styled.View`
  margin-right: auto;
  width: 180px;
`;
const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
  width: 100%;
`;
const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const ProductSubTotal = styled.View`
  margin-top: 10px;
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;
const EmptyCart = styled.View`
  align-items: center;
`;
const EmptyIconWrapper = styled.View`
  align-items: center;
  justify-content: flex-end;
  height: 150px;
`;
const EmptyText = styled.Text`
  font-size: 30px;
  color: #999;
  margin-bottom: 50px;
  font-weight: bold;
  text-align: center;
  max-width: 200px;
`;
