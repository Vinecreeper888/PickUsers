import { createContext, useState } from "react";

export const PickUserContext = createContext({});

export const PickUserProvider = ({children}) => {
    const initialUsers = [{
        id: 1,
        name: "Soham Newman",
        avatar: "/images/profile_1.png",
        email: "soham.newman@example.com"
    }, {
        id: 2,
        name: "Newman",
        avatar: "/images/profile_2.jpeg",
        email: "soham.newman@example.com"   
    }, {
        id: 3,
        name: "Soham",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 4,  
        name: "Sohamani",
        avatar: "/images/profile_1.png",
        email: "soham.newman@example.com"
    }, {
        id: 5,
        name: "Sohami",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 6,
        name: "Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 7,
        name: "Paul Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 8,
        name: "John Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 9,
        name: "Manny Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 10,
        name: "Sonam Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }, {
        id: 11,
        name: "Solo Newman",
        avatar: "/images/profile_3.png",
        email: "soham.newman@example.com"
    }];
    const [selectedUser,setSelectedUser] = useState([]);
    const [initialUsersList, setInitialUsersList] = useState([...initialUsers]);
    const [isClicked,setIsClicked] = useState(false);

    const addSelectedUser = (user) => {
        let newUsers = [...selectedUser, user];
        setSelectedUser(newUsers);
        toggleClick();
    }

    const removeFromInitialUsersList = (user) => {
        setInitialUsersList(prevArray => prevArray.filter(u => u.id !== user.id));
    }

    const toggleClick = () => {
        setIsClicked(prevState => !prevState);
    }

    const removeFromSelectedUser = (user) => {
        setSelectedUser(prevArray => prevArray.filter(u => u.id !== user.id));
    }

    const addToInitialUsersList = (user) => {
        let newInitialUsersList = [...initialUsersList,user];
        setInitialUsersList(newInitialUsersList);
    }

    return(
        <PickUserContext.Provider value = {{
            addToInitialUsersList,
            removeFromSelectedUser,
            removeFromInitialUsersList,
            initialUsersList,
            initialUsers,
            selectedUser,
            addSelectedUser,
            toggleClick,
            isClicked
        }}
        >
            {children}
        </PickUserContext.Provider>
    );
}