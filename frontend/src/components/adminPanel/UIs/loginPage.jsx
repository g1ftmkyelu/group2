import React, { useState, useEffect } from "react";
import DynamicForm from "../Components/specialRenderComponents/dynamicForm";
import { login } from "../../../Redux/slices/authThunk";
import { getToken } from "../utils/helperFunctions";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../../Redux/slices/authThunk";
import { setRole } from "../../../Redux/slices/roleSlice";
import Loader from "../Components/specialRenderComponents/Loader";
import { setId } from "../../../Redux/slices/idSlice";



const schema = [
  { name: "username", title: "email", type: "text" },
  { name: "password", title: "Password", type: "password" },

];

const LoginPage = ({ registerLink }) => {
  const [dataFromGrandchild, setDataFromGrandchild] = useState({});
  const { token, loading } = useSelector((state) => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await dispatch(fetchUserData());
      dispatch(setRole(data.payload.role))
      localStorage.setItem('id', data.payload._id);
      localStorage.setItem('userinfo', JSON.stringify(data.payload));
      dispatch(setId(data.payload._id))
      console.log(data.payload._id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (Object.keys(dataFromGrandchild).length > 0) {
      console.log(dataFromGrandchild.mydata);
    }
  }, [dataFromGrandchild]);

  useEffect(() => {
    if (getToken()) {
      nav('/dashboard');
    }
  }, [])


  const handleDataFromGrandchild = (data) => {
    try {

      handleLogin(data.mydata.username, data.mydata.password)


    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };


  if (token || getToken()) {
    console.log(token)
    nav('/dashboard')
  }

  const handleLogin = (username, password) => {
    dispatch(login({ username, password }))
      .then((loginObject) => {
        toast.success(loginObject.payload.message, { position: "top-right" });
        fetchData()

        nav('/dashboard');


      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error);
        toast.error('invalid credentials', { position: "top-right" });
      });
  };






  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f7f7f7", // Change background color if needed
    }}>
      {loading ? (
        <Loader />
      ) : (
        <div
          className='h-screen w-screen flex items-center justify-center flex-col'
          style={{
            backgroundImage: "url('https://www.nyasatimes.com/wp-content/uploads/a-Nyasa-Times-pic-474-600x443.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
            <h1 className="text-4xl text-green-400 font-extrabold mb-6">Group 4 Database Requirements Gathering System</h1>
            <div className="mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Mzuzu_university_logo.jpg" alt="Mzuzu University Logo" width={150} height={150} />
            </div>
            <div>
             <DynamicForm
             schema={schema}
             onDataFromGrandchild={handleDataFromGrandchild}
             title={"Login"}
             
             />
            </div>
            <div className="mt-4">
              <p className="text-lg text-gray-700">
                Don't have an account?{' '}
                <Link className="text-green-500 underline" to={'/register'}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );




};

export default LoginPage;
