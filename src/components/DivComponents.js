import React, { useContext } from "react";

import styles from "./DivComponents.module.css";

import UserContext from "../context/UserContext";

function DivComponents() {

    let text = 'My First Text'; 

    return (
        <UserContext.Provider value={{text}}>
            <DivComponents1 />
        </UserContext.Provider>
    );
}


function DivComponents1() {    
    
    return (
        <div className={styles.div1}>
            <DivComponents2 />
        </div>
    );
}

function DivComponents2() {
    return (
        <div className={styles.div2}>   
            <DivComponents3 />         
        </div>
    );
}

function DivComponents3() {

    const { text } = useContext(UserContext);
  
    return (
        <div className={styles.div3}> 
            <p>{text}</p>           
        </div>
    );
}

export default DivComponents; 