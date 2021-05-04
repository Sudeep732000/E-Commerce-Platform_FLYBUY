import React from 'react'
import styled from 'styled-components';
import { db } from './firebase';

function Product({ title, image, price, rating, id }) {
    const addtoCart = ()=>{
        const cartitems = db.collection("cartitems").doc(id);
        cartitems.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartitems.update({
                    quantity: doc.data().quantity + 1
                })
            }else{
                db.collection("cartitems").doc(id).set({
                    title: title,
                    price: price,
                    image: image,
                    quantity: 1
                })
            }
        })  
    }
    
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                Rs {price}/-
            </Price>
            <Rating>
                {rating}
            </Rating>
            <Image src= {image} />
            <CartSection>
                <AddCart onClick={addtoCart}>
                    Added to Cart
                </AddCart>
            </CartSection>    
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    max-height:400px;
    border-radius:10px;
    flex:1;
    padding:20px;
    margin 10px;
    display:flex;
    flex-direction: column;
`
const Title = styled.span`
`
const Price = styled.span`
    font-weight: 500;
    margin-top:3px;
`
const Rating = styled.div`
    color:#30c416;
    font-weight:500;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddCart = styled.button`
    width: 100px;
    height: 40px;
    :hover{
        background:#ddb347;
    }
    background-color: black;
    border-radius: 5px;
    border:2px solid white;
    color:white;
    cursor:pointer;
`
const CartSection = styled.div`
    display: flex;
    margin-top: 12px;
    place-items:center;
`