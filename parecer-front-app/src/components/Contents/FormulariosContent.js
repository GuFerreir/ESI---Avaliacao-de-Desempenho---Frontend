import FormularioEnvioRelatorio from './TiposDeFormularios/FormularioEnvioRelatorio';
import FormularioAvaliacao from './TiposDeFormularios/FormularioAvaliacao';
import { Link } from 'react-router-dom';

function FormulariosContent({formType, relatorioID}) {  
    if (formType === "EnvioDeRelatorio") { 
        return (
            <div>
                <Link to="/relatorio">Voltar</Link>
                <FormularioEnvioRelatorio ID={relatorioID} />
            </div>
        )
    }
    else if (formType === "EnvioDeRelatorio") {
        return (
            <div>
                <Link to="/relatorio">Voltar</Link>
                <FormularioAvaliacao ID={relatorioID} />
            </div>
        )
    }
}

export default FormulariosContent;