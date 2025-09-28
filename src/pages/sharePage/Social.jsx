import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext/AuthContext';

const Social = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogle =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    };
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className='btn'>Google</button>
        </div>
    );
};

export default Social;