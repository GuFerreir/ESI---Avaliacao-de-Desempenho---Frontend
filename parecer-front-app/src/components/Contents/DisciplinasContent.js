import '../../css/ContentsCss/DisciplinasContent.css';

function DisciplinasContent() {  
    return (
        <div className="Backgroung-disciplinas">
            <div className="Disciplina-student-filter-session">
                Student filter
            </div>

            <div className="Disciplina-type-session">
                <button className="Disciplina-type-session">Minhas disciplinas</button>
                <button className="Disciplina-type-session">Disciplinas antigas</button>
            </div>

            <div className="Disciplina-list-session">
                <div className="Disciplina-list-card">
                    <h2 className="Disciplina-list-title">Disciplina 1</h2>
                    <button className="Disciplina-list-bt">Acessar relatórios</button>
                </div>
            </div>
        </div>
    )
}

export default DisciplinasContent;