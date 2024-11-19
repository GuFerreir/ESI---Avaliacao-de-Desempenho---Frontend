import '../css/Contents.css';
import HomeContent from './Contents/HomeContent';
import FormulariosContent from './Contents/FormulariosContent';
import PerfilContent from './Contents/PerfilContent';
import RelatoriosContent from './Contents/RelatoriosContent';

function Contents({content, formType, relatorioID}) {  
    if (content === "HomeContent"){ 
        return (<HomeContent />)
    }
    else if (content === "Formularios") {
        return <FormulariosContent formType={formType} relatorioID={relatorioID} />;
    }
    else if (content === "Perfil") {
        return (<PerfilContent />)
    }
    else if (content === "Relatorios") {
        return (<RelatoriosContent />)
    }
}

export default Contents;