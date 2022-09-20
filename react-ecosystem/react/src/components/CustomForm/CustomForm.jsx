import { memo, useEffect, useId, useRef } from "react"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CustomForm = (props) => {
    const formRef = useRef();

    const userNameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const fields = Object.freeze({
        username: 'username',
        email: 'email',
        password: 'password'
    });

    const schema = yup.object({
        [fields.username]: yup.string().required(),
        [fields.email]: yup.string().email('Hát ez nem jó email.').required(),
        [fields.password]: yup.string().required()
    });


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            [fields.username]: 'Zsolt',
            [fields.email]: 'zsolt@gmail.com',
            [fields.password]: 'asd'
        }
    });

    const onSubmit = (formData) => {
        console.log(formData);
    }

    useEffect(()=> {
        setTimeout(()=> console.log(`Ref:`, formRef.current.getboundingclientrect), 1000);
    },[]);

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor={userNameId}>Username:</label>
                <input id={userNameId} type="text" {...register(fields.username)}/>
                {errors[fields.username] && <small style={{color: 'red'}}>{errors[fields.username].message}</small>}
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input id={emailId} type="text" {...register(fields.email)}/>
                {errors[fields.email] && <small style={{color: 'red'}}>{errors[fields.email].message}</small>}

            </div>
            <div>
                <label htmlFor={passwordId}>Password:</label>
                <input id={passwordId} type="password" {...register(fields.password)}/>
                {errors[fields.password] && <small style={{color: 'red'}}>{errors[fields.password].message}</small>}

            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default memo(CustomForm);