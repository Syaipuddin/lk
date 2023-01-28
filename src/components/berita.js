import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Footer from './footer';
import Navbar from './navbar';
import bgpw from '../assets/bgpw.svg';
import BeritaCard from './beritaCard.js';


const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const MainContent = styled.div`
flex: 1;
justify-content: center;`

const ProgramContainer = styled.div`
display: flex;
justify-content: center;
margin: 12px;`

const ProgramBox = styled.div`
background: url(${bgpw}) no-repeat;
border-radius: 30px;
width: 1262px;
height: 230px;
@media only screen and (max-width: 480px){
    height: 200px;
}
`
const DescContainer = styled.div`
display: flex;
justify-content: center;
column-gap: 12px;
`

const Img = styled.img`
width: 642px;
height: 489px;
border-radius:30;`

const DescBox = styled.div`
`

const Header = styled.p`
font-family: Raleway;

font-weight: bold;
font-size: 60px;
`

const Desc = styled.p`
font-family: Raleway;
width: 575px;
height: 213px;
font-weight: semi-bold;
font-size: 28px;`

const TextBox = styled.div`
padding-left: 32px;
font-family: Raleway;
font-size: 35px;
margin: -4px;
color: white;
@media only screen and (max-width: 480px){
    font-size: 24px;
}
`

const TextBox2 = styled(TextBox)`
font-size: 32px;
@media only screen and (max-width: 480px){
    font-size: 24px;
}
`
const ContentContainer = styled.div`
display: flex;
justify-content: center;`

const ContentBox = styled.div`
`
const HeaderContent = styled(Header)`
padding-right: 660px;
@media only screen and (max-width:480px){
    padding-right: 0px;
    font-size: 32px;
    display: flex;
    justify-content: center;
}
`

function Berita () {
    const [berita, setBerita] = useState('');
    
    useEffect(()=>{
        getData()
    }, []);
    
        const getData = () => {
            axios.get('http://besm.herokuapp.com/berita')
                .then((response =>{
                    const dataBerita = response.data;
                    setBerita(dataBerita)
                    console.log(dataBerita)
                    
                }))
                    .catch((err)=>{console.log(err)})
        }
        

        return(
            <Container>
                <Navbar/>
                
                <MainContent>
                    <ProgramContainer>
                        <ProgramBox>
                            <TextBox>
                                <h1>Berita</h1>
                            </TextBox>
                            <TextBox2>
                                <p>Berita Lubuk Kaseh dan Sekitarnya</p>
                            </TextBox2>
                        </ProgramBox> 
                    </ProgramContainer>
                    <br/>
                    <ContentContainer>
                        <ContentBox>
                            <HeaderContent>Berita Terbaru</HeaderContent>
                                <BeritaCard props={berita}/>
                        </ContentBox>
                    </ContentContainer>
                </MainContent>
                <Footer/>
            </Container>
        )
        
    }

export default Berita;