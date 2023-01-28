import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Raleway from '../fonts/Raleway.ttf';
import axios from 'axios';

const Img = styled.img`
width: 302px;
height: 230px;
border-radius: 15px;
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
`
const Box1 = styled.div`
margin-left: 20px;
display: flex;
flex-direction : column; 
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
`
const Judul = styled.h3`
font-size: 32px;
margin-top: 0;
height: 35px;
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
const Text1 = styled(Text)`
color: white;`

const Box3 = styled.div`
display: flex;
flex-direction: row;
column-gap: 4px;
`

const Hapus = styled.div`
cursor: pointer;
width: 165px;
height: 55px;
background-color: red;
border-radius: 15px;
color: white
`

function adminberitaCard(props){
const Delete =(id)=>{
    axios.delete(id)
            .then((response)=>{
                console.log(response)
            }) 
                .catch((err)=>{console.log(err)})
}
const Berita = (props) => {  
    const databerita = props.props;
    console.log(databerita)
    if(databerita.length > 0){
            return(
                databerita.map((card, k)=>{
                    const link =  card._id;
                    const dlink = 'http://besm.herokuapp.com/berita/delete/id?id=' + card._id;
                        return(
                            <Box key={k}>
                                <Img src={card.gambar} />
                                <Box1>
                                    <Judul>{card.judul}</Judul>
                                    <Desc>{card.desc}</Desc>
                                    <Box3>
                                        <Tombol to={link}>
                                            <Text>Selengkapnya</Text>
                                        </Tombol>
                                        <Hapus onClick={()=>{Delete(dlink)}}>
                                            <Text1>Hapus</Text1>
                                        </Hapus>
                                    </Box3>
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


export default adminberitaCard;