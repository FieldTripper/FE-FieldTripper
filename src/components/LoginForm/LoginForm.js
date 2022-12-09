import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { USERS_QUERY } from '../../queries/queries';
import QueryResult from "../QueryResult/QueryResult";
import './LoginForm.css';

function LoginForm({ setUser }) {
  const { loading, error, data } = useQuery(USERS_QUERY);

  return (
    <section className="page--container column">
      <QueryResult data={data} error={error} loading={loading} >
        <h2>Welcome to FieldTrippers!</h2>
        <form>
          <Link to='/search'>
            <button 
              className="primary--button login--button" 
              onClick={() => setUser(data.users[0])}
            >
              See App
            </button>
          </Link>
        </form>
      </QueryResult>
    </section>
  )
}

export default LoginForm;