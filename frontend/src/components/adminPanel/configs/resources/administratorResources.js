import {
    FaNotesMedical,
    FaUserMd,
    FaUserNurse,
    FaProcedures,
    FaPrescriptionBottleAlt,
    FaHospital,
    FaCalendarAlt,
    FaFileMedical,
    FaFileMedicalAlt,
    FaList,
    FaCalendarPlus,
    FaCalendarCheck,
    FaCalendarWeek,
    FaCalendarTimes,
    FaUsers,
    FaStethoscope,
    FaPills,
    FaVrCardboard,
    FaUser,
    FaUserPlus,
    FaChartLine,
    FaCalendarDay,
    FaUserCog,
    FaUserShield,
    FaFolderPlus,
    FaGolfBall,
    FaFootballBall,
    FaRegistered,
    FaRegBuilding,
    FaMoneyBill,
} from "react-icons/fa";
import {
    BiArchive,
    BiBookAdd,
    BiChart,
    BiFootball,
    BiListCheck,
    BiListOl,
    BiListPlus,
    BiQuestionMark,
    BiSolidGroup,
    BiUserCheck,
    BiUserPin,
} from "react-icons/bi";
import { IoMdMedkit, IoIosMedkit, IoIosBasket } from "react-icons/io";
import { RiShoppingBasket2Line, RiInputCursorMove } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { BsBox, BsCalendar2Month, BsGrid } from "react-icons/bs";
import { MdAccountTree, MdAttachMoney, MdBallot, MdPlaylistAddCheck, MdSearch, MdSupervisorAccount } from "react-icons/md";

export const AdminResources = [
    {
        path: "dashboard",
        icon: BsGrid,
        metrics: [
            {
                name: "metrics",
                units: [
                    {
                        title: "all registered users",
                        path: "users",
                        icon: BiSolidGroup,
                        dataSource: "http://localhost:3031/users/count",
                        dataType: "count",
                        color: "orange",
                        seeMore: true,
                        onClick: () => {
                            console.log("Clicked on Doctors");
                        },
                        show: true,
                    },
                    {
                        title: "all tasks",
                        path: "tasks",
                        icon: BiListOl,
                        dataSource: "http://localhost:3031/tasks/count",
                        dataType: "count",
                        color: "purple",
                        seeMore: true,
                        onClick: () => {
                            console.log("Clicked on Patients");
                        },
                        show: true,
                    },
                    {
                        title: "pending tasks",
                        path: "tasks",
                        icon: BiListOl,
                        dataSource: "http://localhost:3031/tasks/count?status=Pending",
                        dataType: "count",
                        color: "blue",
                        seeMore: true,
                        onClick: () => {
                            console.log("Clicked on Patients");
                        },
                        show: true,
                    },

                    {
                        title: "tasks in progress",
                        path: "tasks",
                        icon: BiListPlus,
                        dataSource: "http://localhost:3031/tasks/count?status=In Progress",
                        dataType: "count",
                        color: "orange",
                        seeMore: true,
                        onClick: () => {
                            console.log("Clicked on Patients");
                        },
                        show: true,
                    },

                    {
                        title: "completed tasks",
                        path: "tasks",
                        icon: BiListCheck,
                        dataSource: "http://localhost:3031/tasks/count?status=Completed",
                        dataType: "count",
                        color: "green",
                        seeMore: true,
                        onClick: () => {
                            console.log("Clicked on Patients");
                        },
                        show: true,
                    },

                ],
            },
        ],
    },

    {
        path: "all users",
        dataSource: "http://localhost:3031/users",
        icon: FaUserShield,
        sidePanel: false,
        type: "crudGrid",

        view: true,

        delete: true,

        menu: { name: "Users", icon: FaUsers },
        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "username", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },
            { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
        ],
    },
    {
        path: "administrators",
        dataSource: "http://localhost:3031/users?role=administrator",
        icon: FaUser,
        sidePanel: false,
        type: "crudGrid",

        view: true,


        delete: true,
        fetchDataByQuery: true,
        queryField: "role",
        queryValue: "administrator",
        menu: { name: "Users", icon: FaUsers },
        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "username", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },
        ],
    },
    {
        path: "users",
        dataSource: "http://localhost:3031/users?role=user",
        icon: BiFootball,
        sidePanel: false,
        type: "crudGrid",

        view: true,

        delete: true,
        fetchDataByQuery: true,
        queryField: "role",
        queryValue: "referee",
        menu: { name: "Users", icon: FaUsers },

        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "username", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },

        ],
    },




    {
        path: "tasks",
        dataSource: "http://localhost:3031/tasks",
        icon: BiSolidGroup,
        sidePanel: false,
        type: "crud",
        add: true,
        view: true,
        edit: true,
        delete: true,
        schema: [
            { name: "title", title: "Title", type: "text" },
            { name: "description", title: "Team description", type: "textarea" },
            { name: 'deadline', title: 'Deadline', type: 'date' },
            {
                name: "department", title: "department", type: "select", options: [
                    { label: "Registry", value: "Registry" },
                    { label: "Administration", value: "Administration" },
                    { label: "Finance", value: "Finance" },
                    { label: "ItServices", value: "ItServices" },
                    { label: "faculty", value: "Faculty" },
                ]
            },
            {
                name: "status", title: "Status", type: "select",
                options: [
                    { label: "Pending", value: "Pending" },
                    { label: "In Progress", value: "In Progress" },
                    { label: "Completed", value: "Completed" },
                ]
            },

        ],
    },


    {
        path: "registry questionaire",
        dataSource: "http://localhost:3031/registry",
        icon: FaRegistered,
        menu: { name: "Qustionaires", icon: BiQuestionMark },
        type: "wizard",
        steps: [
            {
                title: "What student information needs to be stored and managed",
                fields: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "What are the key processes related to student enrollment registration and records maintenance",
                fields: [
                    {
                        name: "players",
                        type: "textarea",
                        placeholder: "team players",
                    },
                ],
            },
            {
                title: "Are they happy with the current system",
                fields: [
                    {
                        title: "yes or no",
                        name: "question",
                        type: "select",
                        options: [
                            { label: "Yes", value: "Yes" },
                            { label: "No", value: "No" },

                        ]
                    },
                ],
            },

        ],

    },


    {
        path: "faculty questionaire",
        dataSource: "http://localhost:3031/faculty",
        icon: FaRegBuilding,
        menu: { name: "Qustionaires", icon: BiQuestionMark },
        type: "wizard",
        steps: [
            {
                title: "What specific information related to courses, caliculum and programs is crucial to manage?",
                fields: [
                    {
                        name: "name",
                        type: "textarea",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "How is attendance, grades and course materials managed?",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },
            {
                title: "Are there any specific reporting or analytics requrements for academic perfomance or research data?",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },

        ],

    },

    {
        path: "finance questionaire",
        dataSource: "http://localhost:3031/finance",
        icon: FaMoneyBill,
        menu: { name: "Qustionaires", icon: BiQuestionMark },
        type: "wizard",
        steps: [
            {
                title: "What financial data needs to be managed?",
                fields: [
                    {
                        name: "name",
                        type: "textarea",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "are there any special financial reporting or auditing requirements?",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "",
                    },
                ],
            },
            {
                title: "Are there any specific reporting or analytics requrements for academic perfomance or research data?",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },

        ],

    },


    {
        path: "administration questionaire",
        dataSource: "http://localhost:3031/administration",
        icon: FaRegistered,
        menu: { name: "Qustionaires", icon: BiQuestionMark },
        type: "wizard",
        steps: [
            {
                title: "Enter Team name",
                fields: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "Enter players",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },

        ],

    },
    {
        path: "Library",
        dataSource: "http://localhost:3031/libray",
        icon: FaRegistered,
        menu: { name: "Qustionaires", icon: BiBookAdd },
        type: "wizard",
        steps: [
            {
                title: "Enter Team name",
                fields: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "Enter players",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },

        ],

    },
    {
        path: "itServices questionaire",
        dataSource: "http://localhost:3031/itservices",
        icon: FaRegistered,
        menu: { name: "Qustionaires", icon: BiQuestionMark },
        type: "wizard",
        steps: [
            {
                title: "Enter Team name",
                fields: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "enter team name",
                    },
                ],
            },
            {
                title: "Enter players",
                fields: [
                    {
                        name: "players",
                        type: "tags",
                        placeholder: "team players",
                    },
                ],
            },

        ],

    },

    {
        path: "profile",
        dataSource: "http://localhost:3031/users",

        icon: FaUserCog,
        sidePanel: false,
        type: "singleton",
        queryField: "_id",
        queryValue: localStorage.getItem("id"),

        schema: [
            { name: "Image", title: "Image", type: "file" },
            { name: "username", title: "Username", type: "text" },
            { name: "email", title: "Email", type: "text" },
        ],
    },
];
