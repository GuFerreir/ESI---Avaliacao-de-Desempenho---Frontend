import '../../css/ContentsCss/PerfilContent.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function PerfilContent() {  
    const { user } = useContext(UserContext);

    return (
        <div className="Backgroung-Perfil">
            Perfil {user.name}
        </div>
    )
}

export default PerfilContent;