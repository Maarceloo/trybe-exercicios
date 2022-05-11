import React from 'react'

class Estado extends React.Component {
    render() {
        const { value, funcao } = this.props
        return (
            <input 
            type='text'
            name='estado'
            placeholder='Estado'
            value={value}
            onChange={funcao}
            />
        )
    }
}

export default Estado;
