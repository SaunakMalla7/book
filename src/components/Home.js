import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { userDeleted } from '../features/users/usersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="container">
        <div className="row d-flex flex-column">
          <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
            Add Contact
          </Link>
          <div className="col-md-10 mx-auto my-4">
            <Table className="table  ">
              <tbody className="table-0 header bg-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>

                {users.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <Link to={`/edit/${id}`}>
                        <button className="btn btn-sm btn-primary mr-1">
                          Edit
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
