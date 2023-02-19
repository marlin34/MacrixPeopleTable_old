import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUsers = () => {    
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        
        const response = await axios.get(
            "https://specialview.backendless.app/api/data/People");

        if(response && response.data)
            setUsers(response.data);       
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users };
};