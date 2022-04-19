import Form from "./form";
import usersList from "../usersList";
import { UserInterface } from '../usersList';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";

function FormWrapper(props: {users: UserInterface[], setUsers: any, user: UserInterface, setUser: any, findUser: any}) {
    
    // یوزر رو بر اساس آیدی پیدا میکنه و یه آبجکت میده بیرون
    // const findUser = (id: number) => {
    //     return props.users.find(user => user.ID === id);
    // }

    const handleChange = (event:any) => {
        // event.target.value == user.ID
        let user = props.findUser(event.target.value);
        props.setUser({
            ...props.user,
            first_name: user?.first_name,
            last_name: user?.last_name,
            gender: user?.gender,
            phone: user?.phone,
            ID: user?.ID,
        });
    };

    return ( 
        <>
            <FormControl variant="filled" className="my-3">
                <InputLabel id="demo-simple-select-filled-label">user</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={props.user.ID}
                    onChange={handleChange}
                >
                    {props.users.map((userItem, index) => {
                        return (
                            <MenuItem key={index} value={userItem.ID}>{userItem.first_name + ' ' + userItem.last_name}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <Form user={props.user} users={props.users} setUsers={props.setUsers} />
        </>
    );
}

export default FormWrapper;