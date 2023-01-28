import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Raleway from '../fonts/Raleway.ttf'

const Img = styled.img`
width: 302px;
height: 230px;
border-radius: 15px;
@media only screen and (max-width: 480px){
    width: 162px;
    height: 120px;
}
`
const Box = styled.div`
width: 1262px;
height: 230px;
display: flex;
flex-direction: row;
@font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
  };
  font-family: Raleway;
  margin: 20px;
@media only screen and (max-width: 480px){
    width : 300px;
    height: 200px;
    margin-left: 0px;
}
`
const Box1 = styled.div`
margin-left: 20px;
display: flex;
flex-direction : column; 
@media only screen and (max-width: 480px){
    margin-left: 5px;
}
`

const Desc = styled.p`
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
font-size: 24px;
margin-top: 0;
line-height: 1em;
height: 3em;
@media only screen and (max-width: 480px){
    font-size: 18px;
    text-align: justify;
}

`
const Judul = styled.h3`
font-size: 32px;
margin-top: 0;
height: 35px;
@media only screen and (max-width:480px){
    font-size: 24px;
}
`

const Tombol = styled(Link)`
background-color: #1C8621;
width: 165px;
height: 55px;
border-radius: 15px;
padding-bottom: 0;
margin-bottom: 0;
text-decoration: none;
`

const Text = styled.h1`
font-size: 21px;
color: white;
text-align: center;
`

function programCard(props){
const Berita = (props) => {  
    const dataprogram = props.props;
    console.log(dataprogram)
    
    if(dataprogram.length > 0){
            return(
                dataprogram.map((card, k)=>{
                    const link =  card._id;
                    return(
                        <Box key={k}>
                            <Img src={card.gambar} />
                            <Box1>
                                <Judul>{card.judul}</Judul>
                                <Desc>{card.desc}</Desc>
                                <Tombol to={link}>
                                    <Text>Selengkapnya</Text>
                                </Tombol>
                            </Box1>
                        </Box>
                    )
                
            })
        )
    }
    else{
        <h1>Tidak ada Berita yang tersedia </h1>
    }
}

    return(
        <>
            {Berita(props)}
        </>
    )

}


export default programCard;