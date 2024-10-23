import './App.css'
import {Avatar} from './components/Avatar'

function App() {
  return (
    <>
    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Simpsons_Logo.svg/2560px-The_Simpsons_Logo.svg.png"/>
    <audio id="monAudio">
        <source src="./assets/simpsons-sax.mp3" type="audio/mpeg"/>
    </audio>
    
    <div className="avatar">
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2256-the-simpsons-04-sticker.png"
          firstName="The"
          lastName= "Simpsons"
          link="https://simpsons.fandom.com/wiki/Simpson_family"
        />
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png"
          firstName="Homer"
          lastName= "Simpson"
          link="https://simpsons.fandom.com/wiki/Homer_Simpson"
        />
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png"
          firstName="Marge"
          lastName= "Simpson"
          link="https://simpsons.fandom.com/wiki/Marge_Simpson"
        />
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
          firstName="Bart"
          lastName= "Simpson"
          link="https://simpsons.fandom.com/wiki/Bart_Simpson"
        />
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png"
          firstName="Lisa"
          lastName= "Simpson"
          link="https://simpsons.fandom.com/wiki/Lisa_Simpson"
        />
        <Avatar 
          image="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png"
          firstName="Maggie"
          lastName= "Simpson"
          link="https://simpsons.fandom.com/wiki/Maggie_Simpson"
        />
    </div>
    </>
  )
  
}

export default App
