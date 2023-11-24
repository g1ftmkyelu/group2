import React from 'react';
import DynamicWizard from '../Components/specialRenderComponents/MyDynamicWizard';
import { FaUser, FaUserPlus } from 'react-icons/fa';

const config=  {
    path: "Add_New_User",
    type: "wizard",
    dataSource: "http://localhost:3031/register",
    icon: FaUserPlus,
    menu: { name: "Users", icon: FaUser },
    steps: [

      {
        title: "Choose Username",
        fields: [
          {
            name: "username",
            type: "text",
            placeholder: "Username",
          },
        ],
      },
      {
        title: "Enter Email",
        fields: [
          {
            name: "email",
            type: "email",
            placeholder: "Email",
          },
        ],
      },
      {
        title: "Create Password",
        fields: [
          {
            name: "password",
            type: "password",
            placeholder: "Password",
          },
        ],
      },

      {
        title: "Select Role",
        fields: [
          {
            name: "role",
            type: "selectAlt",
            placeholder: "Select Role",
            data: [
              "administrator",

            ], // Provide role options
          },
        ],
      },
    ],
    successMessage: "Registred successfully!",
    successPath: "login",
  }

const RegisterPage = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-green-100'>
            <DynamicWizard rdata={config}/>
        </div>
    );
}

export default RegisterPage;
