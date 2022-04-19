/* eslint-disable no-octal */
export interface UserInterface {
    first_name: string,
    last_name: string,
    phone: number,
    ID: number,
    gender: string
}

const usersList: UserInterface[] = [
    {
        first_name: 'alireza',
        last_name: 'jonaqi',
        phone: 9211750623,
        ID: 6660379848,
        gender: 'true'
    },
    {
        first_name: 'mahsa',
        last_name: 'moradi',
        phone: 9123456789,
        ID: 1234567890,
        gender: 'false'
    },
    {
        first_name: 'yaser',
        last_name: 'bakhtiyari',
        phone: 9013384685,
        ID: 3698521478,
        gender: 'true'
    },
    {
        first_name: 'zahra',
        last_name: 'norozi',
        phone: 9387854619,
        ID: 1478523698,
        gender: 'false'
    },
    {
        first_name: 'mohammad',
        last_name: 'yazdani',
        phone: 9213681239,
        ID: 1362467890,
        gender: 'true'
    },
    {
        first_name: 'ali',
        last_name: 'gholipur',
        phone: 9851234758,
        ID: 2584569137,
        gender: 'true'
    },
    {
        first_name: 'mohsen',
        last_name: 'vaziri',
        phone: 9125469851,
        ID: 5698531475,
        gender: 'true'
    },
    {
        first_name: 'ahmad',
        last_name: 'mardani',
        phone: 9032587469,
        ID: 2579851695,
        gender: 'true'
    },
    {
        first_name: 'sohrab',
        last_name: 'narimani',
        phone: 9112489812,
        ID: 5500658948,
        gender: 'true'
    },
    {
        first_name: 'rima',
        last_name: 'raminfar',
        phone: 9174568524,
        ID: 2356889451,
        gender: 'false'
    },
    {
        first_name: 'mona',
        last_name: 'ahmadi',
        phone: 9989825285,
        ID: 9658951458,
        gender: 'false'
    },
    {
        first_name: 'ramin',
        last_name: 'taghipur',
        phone: 9365489578,
        ID: 7851685925,
        gender: 'true'
    }
];

export default usersList