import { ListItem } from "./ListItem";

export const ListItems = ({users}) => {
    return(
        users.map((user,i) => (
            <ListItem key={i} user={user}/>
        ))
    );
}