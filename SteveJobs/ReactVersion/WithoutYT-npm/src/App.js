// App.js
import './App.css';
import myImage from './components/assets/steve1.jpg';
import './components/Info.js';
import Info from './components/Info.js';
import Resources from './components/Resources.js';
import Videos from './components/Videos.js';

function App() {

const videos = {
    video1: {
        link: "https://www.youtube.com/embed/jcFbGsl8DDI", 
        title: "Steve Job's Vision of the World"
      },
    video2: {
        link: "https://www.youtube.com/embed/upzKj-1HaKw",
        title: "Steve Jobs on Microsoft"
      },
    video3: {
        link: "https://www.youtube.com/embed/5fI3zz2cp3k",
        title: "Steve Jobs on programming"
      },
  }

  return (
  <div>
    <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
    <img src={myImage} alt="Steve Jobs" />
    <Info />
    <Resources />
    <Videos videos={videos}/>
  </div>
  )
}

export default App;
