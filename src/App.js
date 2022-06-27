import {useState} from "react";
import './App.css'

//import Components
import data from './components/Star/data.json'
import ColorList from "./components/Star/ColorList";
import Form from "./components/Form/Form";
import { v4 } from "uuid";
import Check from "./components/Check/Check";
import Useeffect from "./components/Check/useeffect";
import Handle from "./components/button/handle";
import MouseTracker from "./components/useLayoutEffect/mouseTracker";
import GithubFetch from "./components/Fetch/GithubFetch";
import Render_props from "./components/Render_props/render_props";
import Bigitem from "./components/Virtualized/Bigitem";
import Github from "./components/Multirequest/github";



const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 }
];

function App() {
    const [colors,setColors] = useState(data)
    const onRemove = (id) => {
        setColors(colors.filter(color=>{
            return color.id !== id
        }))
    }
    const onRate = (id,rating) => {
        setColors(colors.map(color=> {
            return color.id === id ? {...color, rating} : color
        }))
    }
    const onNewColor = (title,color) => {
        console.log(title,color)
        setColors([...colors,{
            id : v4(),
            title,
            color,
            rating : 0
        }])
    }

  return (
    <div className="App">
        {/*<Form onNewColor={onNewColor}/>*/}
        {/*<ColorList colors={colors} onRemove={onRemove} onRate={onRate}/>*/}
        {/*<Check/>*/}
        {/*<Useeffect/>*/}
        {/*<Handle/>*/}
        {/*<MouseTracker/>*/}
        {/*<GithubFetch username={'KaungSatt22'}/>*/}
        {/*<Render_props data={tahoe_peaks}*/}
        {/*              render_error={<p>No Item found</p>}*/}
        {/*              render_prop={item => (*/}
        {/*                  <>*/}
        {/*                      {item.name} - {item.elevation.toLocaleString()}ft*/}
        {/*                  </>*/}
        {/*              )}*/}
        {/*/>*/}
        {/* <Bigitem/>*/}
        <Github login={"mrthetkhine"}/>


    </div>
  );
}

export default App;
