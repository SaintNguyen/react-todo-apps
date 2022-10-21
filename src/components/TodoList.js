import React, {useEffect, useState} from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const TodoList = ({children}) => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const[isOpen ,setIsOpen] = useState(false);
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
        setIsOpen (!isOpen);
    }

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ] 

    return (
        <>
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="gradient-text">TODO</h1>
                   <div style={{marginLeft: isOpen ? "-2px" : "-2px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <h5 style={{display: isOpen ? "block" : "none",marginTop:isOpen ?"-15px":"-15px"}} className="gradient-text">{item.name}</h5>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default TodoList;