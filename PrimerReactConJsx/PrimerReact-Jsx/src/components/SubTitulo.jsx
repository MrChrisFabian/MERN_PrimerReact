
import propTypes from 'prop-types'

const SubTitulo = ({ Texto }) => {
    return (
        <h2>{Texto}</h2>
    )
}
SubTitulo.propTypes = {
    Texto: propTypes.string.isRequired,
}

export default SubTitulo