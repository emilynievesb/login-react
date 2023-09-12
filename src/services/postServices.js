import { Users } from "../collections/users.js";

const postUser = async (username, password, email, fechaNacimiento) => {
  const user = new Users();
  user.username = username;
  user.password = password;
  user.email = email;
  user.fechaNacimiento = fechaNacimiento;
  const result = await user.postUser();
  return result;
};

export { postUser };
