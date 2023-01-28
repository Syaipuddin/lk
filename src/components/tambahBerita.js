import axios from 'axios';
import {React, useRef, useState} from 'react';
import styled from 'styled-components';

const Button = styled.div`
cursor: pointer;
background-color: red;
`


function TambahBerita (){
    const [judul, setJudul] = useState('');
    const [desc, setDesc] = useState('');
    const [konten, setKonten] = useState('');
    const [gambar, setGambar] = useState('');

    
    const PostBerita = (e)=>{
        e.preventDefault()
        const newForm = new FormData();
        newForm.append('judul', judul)
        newForm.append('desc', desc)
        newForm.append('konten', konten)
        newForm.append('gambar', gambar)

        console.log(newForm)
        axios.post('http://besm.herokuapp.com/berita/new', newForm, {
            "content-type" : "multipart/form-data"
        })
            .then((response)=>{
                console.log(response)
                    alert("Berita Berhasil Di Buat")
            })
                .catch((error)=>{
                    console.log(error)
                        alert("Pembuatan Berita Gagal")
                })
    }

    return(
        <>
        <div>
            <h1>Tambah Berita</h1>
        </div>
        <form onSubmit={PostBerita} encType="multipart/form-data">
            <label>
                Judul<br/>
                <input type="text" id="judul" name="Judul" onChange={(evt)=>setJudul(evt.target.value)}/>
            </label><br/>
            <label>
                Deskripsi<br/>
                <input type="text" id="desc" name="desc"  onChange={(evt)=>setDesc(evt.target.value)}/>
            </label><br/>
            <label>
                Isi Berita<br/>
                <input type="text" id="konten" name="konten" onChange={(evt)=>setKonten(evt.target.value)}/>
            </label><br/>
            <label>
                Gambar<br/>
                <input type="file" id="gambar" name="gambar" alt="gambar" onChange={(evt)=>setGambar(evt.target.files[0])}/>
            </label><br/>   
            <input type="submit" name="submit" />
        </form>
        {/* <Button onClick={()=>{setJudul(judul); setDesc(desc); setKonten(konten); setGambar(gambar); PostBerita()}}>Submit</Button> */}
        </>
    )
}

export default TambahBerita;