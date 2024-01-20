import { useContext } from "react";
import { ListItems } from "./ListItems";
import { PickUserContext } from "./context/PickUserContext";


export const DropdownList = () => {
    const {initialUsers,initialUsersList} = useContext(PickUserContext);
    //console.log(initialUsers);
    return(
        <div className="grid grid-cols-8 w-1/2">
            <div className="col-start-5 col-end-9 border-1 border-gray-400 bg-gray-100 w-full rounded-lg h-36 overflow-auto drop-shadow-xl">
                <ListItems users={initialUsersList}/>
            </div>
        </div>
    );
}