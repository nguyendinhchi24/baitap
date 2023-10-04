import './App.css';
import React, {useEffect} from "react";
import axios from "axios";

function App() {

  const [licenseName, setLicenseName] = React.useState("")

  useEffect(() => {
    async function getWordOrigin() {
      const res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
      setLicenseName(res.data[0].license.name)
    }
  
    getWordOrigin()
  }, []);

  // render
  return (
      <p>License name: {licenseName}</p>
  );
}

export default App;
