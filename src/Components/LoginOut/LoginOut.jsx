import React, {useState} from 'react';

export const LoginOut = () => {
    const [user, setUser] = useState(null);
    const handleSubmit = () => {
           setUser(null);
    };

    return (
        <div>
            <button onClick={handleSubmit}>out</button>
        </div>
    );
};
