import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const customAuth = useContext(AuthContext);
  return customAuth;
};

export default useAuth;
