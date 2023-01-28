import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Raleway from '../fonts/Raleway.ttf'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const Img = styled.img`
border-radius: 15px;
width=480px; 
height=360px;
@media only screen and (max-width: 480px){
    width: 360px;
    height: 240px;
}`

const Konten = styled.div`
width: 720px;
@font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
  };
  font-family: Raleway;
@media only screen and (max-width: 480px){
    width: 360px;
}
`
const Judul = styled.h1``

const Isi = styled.div`
overflow: hidden;
text-align: justify`

function IsiBerita (){
    const [berita, setBerita] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
        function getBerita(){
            let query = searchParams.get("id")
            const link = 'http://besm.herokuapp.com/berita/id?id=' + query
            axios.get(link)
                .then((response)=>{
                    console.log(("success"))
                    setBerita(response.data)
                })
                        .catch((error)=>{
                            console.log({'message': error})
                        })
        }
        getBerita()
    }, [searchParams])
    return(
        <Container>
            <Navbar />
            <Img src={berita.gambar} />
            <Konten>
                <Judul>{berita.judul}</Judul>
                <Isi>{berita.konten}</Isi>
            </Konten>
            <Footer />
        </Container>
    )
}

export default IsiBerita;