import React from 'react'
import styled from 'styled-components'; 
import { db } from './firebase';

function CartItem({ id , item }) {
    let options = []
    for(let i = 1; i< Math.max(item.quantity + 1 ,6);i++){
        options.push(<option value = {i}> Qty: {i}</option>)
    }
    const DelCart = ()=>{
        const delitems = db.collection("cartitems").doc(id);
        delitems.delete().then(()=>{
            console.log('deleted');
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <Container>
            <ImageContainer img src= {item.image} alt="value" />
            <CartInfo>
                <CartInfoTop>
                    <h2>{item.title}</h2>
                </CartInfoTop>
                <CartInfoBottom>
                    <CartInfoQuantity>
                        <select value={item.quantity}>
                                {options}
                        </select>
                    </CartInfoQuantity>
                    <CartInfoDel onClick={DelCart}>Delete</CartInfoDel>
                </CartInfoBottom>
                <Deliveryarea>
                    <h2>FlyBuy Delivery Service:</h2>
                    <h2>Free Delivery: Get it by Monday, June 7</h2>
                </Deliveryarea>
            </CartInfo>
            <CartItemPrice>{item.price}/-</CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top:15px;
    padding-bottom:15px;
    display:flex;
    border-bottom: 1px solid #DDD;
`
const ImageContainer  = styled.img`
    width:180px;
    height: 180px;
    margin-right:15px;
    flex-shrink: 0;
    flex-grow: 0;
    img{
        height:100px;
        width:100px;
        object-fit:contain;
    }
`
const CartInfo = styled.div`
    flex-grow: 1;
`
const CartInfoTop = styled.div`
    color:#007185;
    h2{
        font-size:20px;
    }
`
const CartInfoBottom = styled.div`
    display:flex;
    margin-top: 5px;
    align-items:center;
`
const CartInfoQuantity = styled.div`
    select{
        border-radius:8px;
        background-color:#fab041;
        padding:5px;
        :focus{
            outline:none;
        }
    }
`
const CartInfoDel = styled.div`
    color:#fa0c0c;
    margin-left:15px;
    font-size:20px;
    font-weight:500;
    cursor:pointer;
`

const CartItemPrice = styled.div`
    font-weight:700;
    font-size:20px;
    margin-left:15px;
`
const Deliveryarea = styled.div`
    h2{
        color:#9c8a8b;
        font-size:20px;
        font-weight:500;
    }
    padding:10px;
    margin-top:25px;
`   