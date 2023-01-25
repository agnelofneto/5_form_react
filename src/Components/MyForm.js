import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : " ");

  const [email, setEmail] = useState(user ? user.email : " ");

  const [bio, setBio] = useState(user ? user.bio : " ");

  const [role, setRole] = useState(user ? user.role : " ");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="card-content">
        <div>
          <div>
            <label  htmlFor="name">Nome:</label>
            <input
              type="name"
              name="name"
              placeholder="digite o seu nome"
              onChange={handleName}
              value={name}
              className="w-100"
            />
          </div>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-100"
            />
          </label>
          <label htmlFor="bio">
            <span>Bio:</span>
            <textarea
              className="w-100 "
              name="bio"
              placeholder="Descrição"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
          <label>
            <span>Função do Sistema</span>
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-100"
            >
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Adm</option>
            </select>
          </label>
          <button className="btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
