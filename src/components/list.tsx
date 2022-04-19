import { UserInterface } from '../usersList';
function List(props: { users: UserInterface[], findUser :any, setUser:any}) {
    const handleEdit = (event: any) => {
        // event.target.value == user.ID
        // event.target.value is string by default
        let clickedUser = props.findUser(Number(event.target.value));
        props.setUser(clickedUser);
    };

    return ( 
        <>
            <table className='w-100 '>
                {props.users.map((user, i) => {
                    return (<tr key={i}>
                        <td> {user.first_name} </td>
                        <td> {user.last_name}</td>
                        <td> {user.gender === 'true' ? 'male' : 'female'}</td>
                        <td> {user.ID}</td>
                        <td> {user.phone} </td>
                        <td> <button value={user.ID} onClick={handleEdit} className='btn btn-success'>edit</button> </td>
                    </tr>)
                })}
            </table>
        </>
    );
}

export default List;