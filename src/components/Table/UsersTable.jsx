import "./styles.css";
import api from "../../services/api";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { signout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`?page=${currentPage}&limit=${limit}`);
      const totalPages = Math.ceil(total / limit);

      setTotal(users.length);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);
      setUsers(response.data);
      console.log(totalPages);
    }

    loadUsers();
  }, [currentPage, limit, total]);
  return (
    <div className="container">
      <div className="container-table">
        <div className="wrap-table">
          <h1 className="table-title">Lista de Usuarios</h1>
          <span className="table-title">
            <img
              src="https://vendemmia.com.br/wp-content/uploads/2022/03/Grupo-29.png"
              alt="vendemmia-logo"
            />
          </span>
          <table className="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Data de criação</th>
                <th scope="col">Foto</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} scope="row">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.createdAt.split("T")[0]}</td>
                  <td>
                    <img className="avatar" src={user.avatar} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="nav">
            <ul class="pagination justify-content-center">
              {currentPage > 1 && (
                <li class="page-item">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Pagina Anterior
                  </a>
                </li>
              )}
              {currentPage < 9 && (
                <li class="page-item">
                  <a
                    class="page-link"
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Proxima Pagina
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <Link
            className="btn btn-danger"
            onClick={() => [signout(), navigate("/")]}
          >
            Deslogar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
