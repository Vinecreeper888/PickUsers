import { useContext, useEffect, useState } from "react";
import { DropdownList } from "./DropdownList";
import { PickUserContext } from "./context/PickUserContext";
import styled from "styled-components";

const InputFieldComponent = styled.input`
    margin-top: 3px;
    background: none;
    color: black;
    border-bottom: 4px solid #214ED8;
    outline: none;
    width: 50%;
`;

export const InputField = () => {

    //#region STATE
    const {selectedUser,removeFromSelectedUser,addToInitialUsersList} = useContext(PickUserContext);
    const [toggleList, setToggleList] = useState(false);
    //#endregion
    
    //#region EVENT HANDLERS
    const handleClick = () => {
        console.log("I am clicked");
        setToggleList(prevState => !prevState);
    }

    const handleSelectedUserChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    const handleCancel = (user) => {
        addToInitialUsersList(user);
        removeFromSelectedUser(user);
        console.log("I am clicked");
    }
    //#endregion

    console.log(selectedUser);

    return(
        <div className="flex flex-col">
            <div className="flex justify-center">
                <span className="mt-3 bg-none text-black border-b-4 border-blue-700 w-1/2">
                    <div className="flex flex-row flex-wrap">
                        {selectedUser.length > 0 ? (selectedUser.map(user => (
                            <div className="p-1 mr-2 mb-2 rounded-2xl bg-gray-300 text-start w-1/4 grid grid-cols-5">
                                <div className="col-start-1 col-end-2">
                                    <img src={user.avatar} className="w-6 h-6 rounded-full"/>
                                </div>
                                <div className="col-start-2 col-end-6 flex justify-start">
                                    <input 
                                        className="bg-gray-300 outline-none w-4/5" 
                                        placeholder="Add new user..."
                                        onClick={handleClick}
                                        value={user.name}
                                        onChange={handleSelectedUserChange}
                                    />
                                </div>
                                <div className="col-start-6 col-end-6 flex justify-center">
                                    <button onClick={() => handleCancel(user)} className="hover:bg-red-400 rounded-xl pl-1 pr-1">ｘ</button>
                                </div>
                            </div>
                            
                        ))) : <input placeholder="Add new user..." onClick={handleClick} className="outline-none"/>}
                    </div>
                    {selectedUser.length > 0 && <input
                        className="outline-none w-1/4"
                        placeholder="Add new user..."
                        onClick={handleClick}
                    />}
                </span>
            </div>
            {toggleList && <DropdownList/>}
        </div>
    );
}