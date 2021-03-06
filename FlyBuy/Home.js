/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Product from './Product';
import  { db } from './firebase';
import ImgSlider from './ImgSlider';
function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () =>{
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []
            tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }));
            setProducts(tempProducts);
        })
    }
    useEffect(() => {
        getProducts();
    }, [])
    
    return (
         
        <Container>
            <ImgSlider />
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                            title = {data.product.title}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                            id = {data.id}
                        />
                    ))
                }
            </Content>
            <Content1>
                <Product 
                    title = "LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz,HDR 10, IPS Gaming Monitor,HDMI x 2(Black)"
                    price = {44999}
                    rating = "In Stock"
                    image = "http://www.lgnewsroom.com/wp-content/uploads/2018/08/LG-UltraGear-Gaming-Monitor-scaled.jpg"
                />
                <Product 
                    title = "Mi Power Bank 3i 20000mAh (Sandstone Black) Triple Output and Dual Input Port | 18W Fast Charging | Power Delivery | Shock Proof layer"
                    price = {1999}
                    rating = "In Stock"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg"
                />
                <Product 
                    title = "Dell XPS 13 (9310), 13.4- inch FHD+ Touch Laptop - Intel Core i7-1185G7, 16GBRAM, 512GB SSD, Iris Xe Graphics, Windows 10 Pro-Platinum"
                    price = {149990}
                    rating = "In Stock (Limited Edition)"
                    image = "https://asiatech.com.mm/wp-content/uploads/2020/11/9310.png"
                />
            </Content1>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width:1500px;
    margin: 0 auto;
    overflow-x:hidden;
` 
const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 50px;
    z-index:100;
    display:flex;
`
const Content1 = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    z-index:100;
    display:flex;
`
