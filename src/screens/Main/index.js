import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import CardItem from '../../components/CardItem';

import api from '../../services/api';

class Main extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await api.get('/products');

    this.setState({ products });
  }

  addToCart = product => {
    const { dispatch } = this.props;
    dispatch({ type: '@cart/ADD', product });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ScrollView horizontal>
          {products.map((product, index) => (
            <Product
              key={String(product.id)}
              style={{
                marginRight: index >= products.length - 1 ? 30 : 0,
                marginLeft: index === 0 ? 30 : 20,
              }}
            >
              <CardItem
                onAddToCart={() => this.addToCart(product)}
                style={{ height: '100%' }}
                {...product}
              />
            </Product>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Main);

const Container = styled.View`
  background-color: #191920;
  flex: 1;
  height: 100%;
  padding: 0;
`;
const Product = styled.View`
  width: 240px;
  height: 370px;
`;
