import { connection } from "../utils/connect.js";

class Users {
  username;
  password;
  email;
  fechaNacimiento;
  constructor() {}
  async connect() {
    try {
      const result = await connection("users");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async searchUser() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ username: this.username })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async searchEmail() {
    try {
      const connection = await this.connect();
      const resultado = await connection.findOne({ email: this.email });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async postUser() {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        username: this.username,
        password: this.password,
        email: this.email,
        fechaNacimiento: new Date(this.fechaNacimiento),
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Users };
