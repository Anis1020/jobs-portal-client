import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosInterceptor = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptor.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.status == 401 || err.status == 403) {
          logOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return Promise.reject(err);
      }
    );
  }, [navigate, logOutUser]);
  return axiosSecure;
};

export default useAxiosInterceptor;
