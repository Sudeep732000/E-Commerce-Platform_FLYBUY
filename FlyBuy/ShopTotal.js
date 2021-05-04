import React from 'react'
import styled from 'styled-components';

function ShopTotal({ signOut, GetTotalPrice }) {
    return (
        <Container>
            <SubTotal>SubTotal : {GetTotalPrice()} /-</SubTotal>  
            <CheckoutButton onClick={signOut}>Proceed to Checkout</CheckoutButton>
            <Details>
                <h2>Returns Are Easy: </h2>
                <p> 7-30 days of returns on most items as per the FlyBuy return policy.</p>
            </Details>   
            <Tags>
                <h2>SuperOffers:</h2>
                <p>You can view your GiftCoins in the Vouchers Section of FlyBuy </p>
            </Tags>    
        </Container>
    )
}

export default ShopTotal

const Container = styled.div`
    height:350px;
    border-radius:10px;
    flex:0.2;
    padding:20px;
    background-color: white;
`
const CheckoutButton = styled.button`
    background-color: black;
    color:white;
    width:100%;
    height:40px;
    padding:4px 8px;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background:#ddb347;
    }
    border:2px solid white;
    font-size:16px;

`
const SubTotal = styled.h2`
    font-size:25px;
    margin-bottom:16px;
`
const Details = styled.div`
    margin-top:15px;
    h2{
        font-size:20px;
        font-weight:700;
    }
    p{
        font-size:18px;
    }
`
const Tags = styled.div`
    margin-top:15px;
    h2{
        font-size:20px;
        font-weight:700;
    }
    p{
        font-size:18px;
    }
`