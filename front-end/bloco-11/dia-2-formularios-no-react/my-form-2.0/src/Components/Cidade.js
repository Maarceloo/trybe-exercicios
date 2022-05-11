import React from 'react'

class Cidade extends React.Component {
    render() {
        const { funcao, value }= this.props
        return (
            <input 
            type="text"
            name="cidade"
            placeholder='Cidade'
            value={value}
            onChange={funcao}
            />
        )
    }
}

export default Cidade;
