import { useSelector, useDispatch } from 'react-redux'


export default function Lista() {
    const pais = useSelector(state => state.pais.data)
    const pessoa = useSelector(state => state.pessoa.data)
    
    /// ACTION START
    const dispatch = useDispatch()
    
    function adicionar() {
        dispatch({ type: 'add-pais', titulo: 'Brazil' })
    }

    /// ACTION END
    
    return (
        <>
            <ul>
                {pais.map(item => <li>{item}</li>)}
            </ul>

            <ul>
                {pessoa.map(item => <li>{item}</li>)}
            </ul>
            
            <button onClick={adicionar}>Adicionar Pais</button>
            <button onClick={()=> dispatch({type: 'add-pessoa', nome: 'Antonio'})}>Adicionar Pessoa</button>
        </>
    )
}