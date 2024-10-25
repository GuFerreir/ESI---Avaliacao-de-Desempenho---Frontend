import FormularioEnvioRelatorio from './TiposDeFormularios/FormularioEnvioRelatorio';
import FormularioAvaliacao from './TiposDeFormularios/FormularioAvaliacao';

function FormulariosContent({formType}) {  
    if (formType === "EnvioDeRelatorio") { 
        return (<FormularioEnvioRelatorio />)
    }
    else if (formType === "EnvioDeRelatorio") {
        return (<FormularioAvaliacao />)
    }
}

export default FormulariosContent;