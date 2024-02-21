import propTypes from 'prop-types'

const Titulo = ({texto}) => {
  return (
    <h1>{texto}</h1>
  )
}

Titulo.propTypes = {
    texto:propTypes.string.isRequired,
}
export default Titulo