//import imagemHome from '../imgs/.jpg';
import FormularioEnvioRelatorio from './TiposDeFormularios/FoumularioEnvioRelatorio';

function Formularios({formType}) {  
    if (formType === "EnvioDeRelatorio") return (
        <FormularioEnvioRelatorio />
    )
}

export default Formularios;