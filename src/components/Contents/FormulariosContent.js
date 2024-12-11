import FormularioEnvioRelatorio from './TiposDeFormularios/FormularioEnvioRelatorio';
import FormularioAvaliacao from './TiposDeFormularios/FormularioAvaliacao';
import { Link } from 'react-router-dom';

function FormulariosContent({ formType, relatorioID }) {
    if (formType === "EnvioDeRelatorio") {
        return (
            <div>
                <Link to="/relatorios">Voltar</Link>
                <FormularioEnvioRelatorio relatorioId={relatorioID} />
            </div>
        );
    } else if (formType === "AvaliacaoDeRelatorio") {
        return (
            <div>
                <Link to="/relatorios">Voltar</Link>
                <FormularioAvaliacao relatorioId={relatorioID} />
            </div>
        );
    } else {
        return <p>Tipo de formulário não especificado.</p>;
    }
}

export default FormulariosContent;
