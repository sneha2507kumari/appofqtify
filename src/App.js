import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";
import { fetchTopAlbums,fetchNewAlbum,fetchAllSongs } from "./components/api/api";
import { useEffect,useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumData,setTopAlbumData]=useState([])
  const [topNewAlbum,setTopNewAlbum]=useState([])
  const [songsData,setSongsData]=useState([])
  const [value,setValue]=useState([0])
  const [filteredDataValues,setFilteredDataValues] = useState([])
  const[toggle,setToggle]=useState(false)

  const handleToggle=()=>{
    setToggle(!toggle);
  }
  const handleChange=(event,newValue)=>{
    setValue(newValue);
  }

  const genratefetchAllSongs = async()=>{
    try{
      const data= await fetchAllSongs();
      setSongsData(data);
      setFilteredDataValues(data);
    }catch(err){
      console.error(err);
    }
  }
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

  const generateSongsData=(value)=>{
    let key;
    if(value===0){
      setFilteredDataValues(songsData);
      return;
    }
    else if(value===1){
      key="rock"
    }else if(value===2){
      key="pop"
  }else if(value===3){
    key="jazz"
  }else if(value===4){
    key="blues"
  }
  const res= songsData.filter(item => item.genre.key===key);
  setFilteredDataValues(res);;
}
  const filteredData=(value)=>{
    setFilteredDataValues(value)
  }

  useEffect(()=>{
    generateSongsData(value);
  },[value])


  useEffect(()=>{
    generateTopAlbumData();
    generatefetchNewAlbum();
    genratefetchAllSongs();
  },[])
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className={styles.sectionWrapper}>
    <Section type="album" title="Top Album" data={topAlbumData} filteredDataValues={topAlbumData} /> 
    <Section type="album" title="New Album" data={topNewAlbum} filteredDataValues={topAlbumData} /> 
    <Section type="song" title="Songs" data={songsData}  filteredData={filteredData} filteredDataValues={filteredDataValues} value={value}  handleToggle={handleToggle} handleChange={handleChange}toggle={toggle} /> 
    </div>
    </>
  );
}

export default App;
