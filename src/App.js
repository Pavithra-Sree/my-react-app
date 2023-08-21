import {Route, Routes} from "react-router-dom";
import './App.css';
import axios from "axios";
import Nav from "./Components/Nav";
import Feed from "./Components/Video/Feed";
import Player from "./Components/Video/Player";
import Create from "./Components/Video/Create";
import { useEffect, useState } from "react";
import NewData from "./Components/Music/NewData";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Edit from "./Components/Video/Edit";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://648bfc4a8620b8bae7ec01dc.mockapi.io/users"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Feed data={data} />} />
        <Route path="/play/:id" element={<Player />} />
        <Route
          path="/create"
          element={<Create data={data} setData={setData} />}
        />

        <Route path="/music" element={<NewData />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
//checking 
//git pull checking
