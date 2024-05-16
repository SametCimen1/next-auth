'use client';

import {useFormState, useFormStatus} from 'react-dom';
import { authenticate } from '../lib/actions';

export default function LoginForm(){
    
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
 
    return(
        <form action={dispatch} className=' flex flex-col justify-center items-center'>
            <div className='mt-5'>
                <label htmlFor = "email">
                    Email
                </label>
                <div>
                    <input id = 'email' type = "email" name = 'email' placeholder = 'Enter your email address' required>
                    
                    </input>
                </div>
            </div>

            <div className='mt-5'>
                <label htmlFor = "password">
                    Password
                </label>
                <div>
                    <input id = 'password' type = "password" name = 'password' placeholder = 'Enter your Password' required>
                    
                    </input>
                </div>
            </div>

            <button className='bg-blue-500 mt-3'>
                Log in
            </button>
         </form>
    )



}
