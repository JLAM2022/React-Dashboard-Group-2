import React, { useState, useEffect } from "react";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons";
import OneCard from "../../../utils/OneCard/OneCard";
import Request from "../../../utils/Request";

function CartTotalUsers() {
    const [usuarios, setUsuarios] = useState(undefined);

    useEffect(() => {
        fetch(`${Request}/api/users/`)
            .then(function (response) {
                return response.json();
            })
            .then(function (usuarios) {
                setUsuarios(usuarios)
            })
            .catch(error => console.error(error));

    }, [])
    console.log(usuarios)
    return (
        <>
        {usuarios? (
               <OneCard title={'Usuarios'} quantity={usuarios.count} icon={faUserGroup}/>
        
               ) : (
                 "Cargando"
               )}
             </>
           );
         };

export default CartTotalUsers;
