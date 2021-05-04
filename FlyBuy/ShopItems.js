import React from 'react'
import styled from 'styled-components';
import CartItem from './CartItem';

function ShopItems({cartitems}) {
    return (
        <Container>
            <Title>Your FlyBuy Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartitems.map((item)=>(
                        <CartItem 
                            id ={item.id}
                            item = {item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default ShopItems

const Container = styled.div`
    flex:0.8;
    padding: 20px;
    margin-right: 20px;
    border-radius:10px;
    background-color:white;
`
const Title = styled.span`
    font-weight:700;
    font-size: 30px;
`
 const ItemsContainer = styled.div`
 `
