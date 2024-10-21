//import imagemHome from '../imgs/.jpg';
import '../css/Contents.css';
import HomeContent from './Contents/HomeContent';

function Contents({content}) {  
    if (content === "HomeContent") return (
        <HomeContent />
    )
}

export default Contents;