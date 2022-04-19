import Form from './form';
import usersList, { UserInterface } from '../usersList';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import FormWrapper from './formWrapper';
import List from './list';



function Wrapper() {

    let [users, setUsers] = useState<UserInterface[]>(Array.from(usersList));
    const [user, setUser] = useState<any>(users[0]);

    // یوزر رو بر اساس آیدی پیدا میکنه و یه آبجکت میده بیرون
    const findUser = (id: number) => {
        return users.find(user => user.ID === id);
    }


    return ( 
        <>
            <div className="container shadow ">
                <div className="px-4">
                    <FormWrapper user={user} setUser={setUser} users={users} setUsers={setUsers} findUser={findUser}  />
                    <div className="hr"></div>
                    <List users={users} findUser={findUser} setUser={setUser} />
                </div>
            </div>
        </>
    );
}

export default Wrapper;