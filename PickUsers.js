import { InputField } from "./InputField";

export const PickUsers = () => {
    return(
        <div className="flex flex-col">
            <h1 className="text-blue-700 text-3xl flex justify-center font-bold font-sans col-start-2 ml-5 mt-5">Pick Users</h1>
            <InputField/>
        </div>
    );
}