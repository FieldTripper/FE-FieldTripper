import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./LoginForm.css";

function LoginForm({ setUser }) {
  const { loading, error, data } = useQuery(USERS_QUERY);

  return (
    <section className="page--container column">
      <QueryResult data={data} error={error} loading={loading}>
        <p className='welcome'>Welcome to FieldTrippers!</p>
        <form>
          <Link to="/trip-type">
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
  );
}

export default LoginForm;
