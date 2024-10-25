import '../css/Contents.css';
import DisciplinasContent from './Contents/DisciplinasContent';
import HomeContent from './Contents/HomeContent';
import FormulariosContent from './Contents/FormulariosContent';
import PerfilContent from './Contents/PerfilContent';
import RelatoriosContent from './Contents/RelatoriosContent';

function Contents({content}) {  
    if (content === "HomeContent"){ 
        return (<HomeContent />)
    }
    else if (content === "Disciplinas") {
        return (<DisciplinasContent />)
    }
    else if (content === "Formularios") {
        return (<FormulariosContent formType="" />)
    }
    else if (content === "Perfil") {
        return (<PerfilContent userID="" />)
    }
    else if (content === "Relatorios") {
        return (<RelatoriosContent userID="" />)
    }
}

export default Contents;