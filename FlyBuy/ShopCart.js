import React from 'react'
import styled from 'styled-components';
import ShopItems from './ShopItems';
import ShopTotal from './ShopTotal';

function ShopCart({ signOut, cartitems }) {
    const GetTotalPrice = () =>{
        let total = 0;
        cartitems.forEach((item) => {
            total += (item.product.price * item.product.quantity)
        });
        return total;
    } 
    return (
        <Container>
            <ShopItems cartitems={cartitems}/>
            <ShopTotal signOut={signOut} GetTotalPrice = {GetTotalPrice}/>
        </Container>
    )
}

export default ShopCart

const Container = styled.div`
    display:flex;
    padding: 15px 20px 0 20px;
    align-items: flex-start;
`
