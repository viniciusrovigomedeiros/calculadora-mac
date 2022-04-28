import React from "react";
import './Button.css'

export default props => {//disponibilizar conteudos para outros metodos
    
    let classes = 'button '
    classes += props.operation ? 'operation' : ''//se a propriedade .operation for passada para o botao eu vou usar a classe operation, senao vou deixar sem classe
    classes += props.operation2 ? 'operation2' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    

    return (
        <button 
            onClick={e => props.click(props.label)}
            className={classes}> 
            {props.label}
        </button>
    )    
}