//import imagemHome from '../imgs/.jpg';
import '../../css/ContentsCss/RelatoriosContent.css';

function RelatoriosContent() {  
    return (
        <div className="Backgroung-relatorios">
            <div className="Relatorios-proximas-entregas-session">
                <div className="Relatorios-proximas-entregas-box-title">
                    <h2 className="Relatorios-proximas-entregas-title">Próximas entregas</h2>
                </div>

                <table className="Relatorios-proximas-entregas-table">
                    <thead className="Relatorios-proximas-entregas-thead">
                        <tr className="Relatorios-proximas-entregas-thead-tr">
                            <th>Avaliação</th>
                            <th>Semestre</th>
                            <th>Vencimento</th>
                            <th>Entregar</th>
                        </tr>
                    </thead>
                    <tbody className="Relatorios-proximas-entregas-tbody">
                        <tr className="Relatorios-proximas-entregas-tbody-tr">
                            <td>Lorem</td>
                            <td>2 sem</td>
                            <td>15/12</td>
                            <td>icon</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Relatorios-meus-relatorios-session">
                <div className="Relatorios-meus-relatorios-box-title">
                    <h2 className="Relatorios-meus-relatorios-title">Meus relatórios</h2>
                </div>

                <table className="Relatorios-meus-relatorios-table">
                    <thead className="Relatorios-meus-relatorios-thead">
                        <tr className="Relatorios-meus-relatorios-thead-tr">
                            <th>Avaliação</th>
                            <th>Semestre</th>
                            <th>Vencimento</th>
                            <th>Entregar</th>
                        </tr>
                    </thead>
                    <tbody className="Relatorios-meus-relatorios-tbody">
                        <tr className="Relatorios-meus-relatorios-tbody-tr">
                            <td>Lorem</td>
                            <td>2 sem</td>
                            <td>15/12</td>
                            <td>icon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RelatoriosContent;