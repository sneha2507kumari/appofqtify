import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums,fetchNewAlbum } from "./components/api/api";
import { useEffect,useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumData,setTopAlbumData]=useState([])
  const [topNewAlbum,setTopNewAlbum]=useState([])
  const generateTopAlbumData = async()=>{
    try{
      const data = await fetchTopAlbums();
    setTopAlbumData(data);
    }catch(err){
        console.error(err);
    }
  }
  const generatefetchNewAlbum = async()=>{
    try{
      const data = await fetchNewAlbum();
    setTopNewAlbum(data);
    }catch(err){
        console.error(err);
    }

  }
  useEffect(()=>{
    generateTopAlbumData();
    generatefetchNewAlbum();

  },[])
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className={styles.sectionWrapper}>
    <Section type="album" title="Top Album" data={topAlbumData}  /> 
    <Section type="album" title="New Album" data={topNewAlbum}  /> 

    </div>
    </>
  );
}

export default App;
