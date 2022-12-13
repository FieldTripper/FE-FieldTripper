import { Link } from 'react-router-dom';

function ConditionalLink({ children, condition, path }) {
  if (condition) {
    return ( <Link to={path}>{children}</Link> )
  } else {
    return <>{children}</>
  }
}

export default ConditionalLink;