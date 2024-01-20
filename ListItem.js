import { useContext, useState } from "react";
import { PickUserContext } from "./context/PickUserContext";

export const ListItem = ({user}) => {

    const {name,avatar,email} = user;
    
    //const [selectedUser, setSelectedUser] = useState();
    const {addSelectedUser,removeFromInitialUsersList} = useContext(PickUserContext);
    const handleUserClick = (e) => {
        e.preventDefault();
        addSelectedUser(user);
        removeFromInitialUsersList(user);
        console.log("the user clicked is",user.name);
    }

    return(
        <div className="grid grid-cols-6 hover:bg-white" onClick={handleUserClick}>
            <div className="col-start-1 col-end-2 flex justify-center p-2 cursor-pointer">
                <img className="list-none w-6 h-6 rounded-full" src={avatar}/>
            </div>
            <div className="col-start-2 col-end-4 flex justify-start items-center cursor-pointer">
                <li className="list-none">{name}</li>
            </div>
            <div className="col-start-4 col-end-7 flex justify-center items-center cursor-pointer">
                <li className="list-none">{email}</li>
            </div>
        </div>
        // <div className="grid grid-cols-3">
        //      <div className="grid-cols-1">
        //     </div>
        //     <div className="grid-cols-1">
        //     </div>
        //     <div className="grid-cols-1">
        //     </div> */}
        //     <ul className="flex flex-row p-3 border-b-2 border-red-500">
        //     </ul>
        // </div>
    );
}