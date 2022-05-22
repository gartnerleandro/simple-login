import { useState } from "react";
import User from "../Icons/user";
import Email from "../Icons/email";
import Lock from "../Icons/lock";

import styles from "../../styles/Form.module.css";

const Input = ({ type, icon, onChange, placeholder, name }) => (
  <div className={styles.inputContainer}>
    {icon}
    <input
      className={styles.input}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default function Form({ onSend }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    onSend(formData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Hola!</h2>
          <p className={styles.subtitle}>Registrate para empezar</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            icon={<User />}
            placeholder="Nombre"
          />
          <Input
            type="email"
            onChange={handleChange}
            name="email"
            icon={<Email />}
            placeholder="Correo electrónico"
          />
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            icon={<Lock />}
            placeholder="Contraseña"
          />
          <button className={styles.signupButton} type="submit">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}
