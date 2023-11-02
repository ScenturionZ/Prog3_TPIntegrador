class Usuario {
    constructor(id, nombre, apellido, email, contraseña, type, createdAt) {
      this.id = id.toString();
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.contraseña = contraseña;
      this.type = type;
      this.createdAt = createdAt;
    }
  }

  export default Usuario; 
