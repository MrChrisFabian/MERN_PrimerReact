
import propTypes from 'prop-types'

const List = ({ cosas }) => {
    return (
        <ul>
            <li>{cosas[0]}</li>
            <li>{cosas[1]}</li>
            <li>{cosas[2]}</li>
            <li>{cosas[3]}</li>
        </ul>
    )
}
List.propTypes = {
    cosas: propTypes.array.isRequired,
}
export default List