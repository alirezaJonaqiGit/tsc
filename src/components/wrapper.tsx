import Form from './form';
import usersList, { UserInterface } from '../usersList';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import FormWrapper from './formWrapper';



function Wrapper() {

    let [users, setUsers] = useState<UserInterface[]>(Array.from(usersList));
    const [user, setUser] = useState<any>(users[0]);

    // یوزر رو بر اساس آیدی پیدا میکنه و یه آبجکت میده بیرون
    const findUser = (id: number) => {
        return users.find(user => user.ID === id);
    }

    const handleEdit = (event: any) => {
        // event.target.value == user.ID
        // event.target.value is string by default
        let clickedUser =  findUser(Number(event.target.value));
        setUser(clickedUser);
    };

    return ( 
        <>
            <div className="container shadow ">
                <div className="px-4">
                    <FormWrapper user={user} setUser={setUser} users={users} setUsers={setUsers}  />
                    <div className="hr"></div>
                    <table className='w-100 '>
                        {users.map((user, i) => {
                            return (<tr key = {i}>
                                <td> {user.first_name} </td>
                                <td> {user.last_name}</td>
                                <td> {user.gender === 'true'? 'male' : 'female'}</td>
                                <td> {user.ID}</td>
                                <td> {user.phone} </td>
                                <td> <button value={user.ID} onClick={handleEdit} className='btn btn-success'>edit</button> </td>
                            </tr>)
                        })}
                    </table>
                </div>
            </div>
        </>
    );
}

export default Wrapper;