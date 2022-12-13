import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./BaseForm.css";

function BaseForm({ setUser }) {
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
          <Link to="/login">
            <button className="primary--button login--button">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="primary--button login--button">
              Sign Up
            </button>
          </Link>
        </form>
      </QueryResult>
    </section>
  );
}

export default BaseForm;
