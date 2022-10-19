import { useForm } from 'react-hook-form';
import { memo } from "react"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
//
import { Label, Input, InputGroup, ErrorMessage, Form, SubmitButton } from "./LoginForm.elements";
import { authAction } from '../../store';
import { useTranslation } from 'react-i18next';

const FIELDS = Object.freeze({
    USERNAME: 'username',
    PASSWORD: 'password'
});

const schema = yup.object({
    [FIELDS.USERNAME]: yup.string().max(50).required(),
    [FIELDS.PASSWORD]: yup.string().max(50).required(),
}).required();

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOnSubmit = (formValues) => {
        // const bookId = uuidV4()
        // const newBook = {
        //     id: bookId,
        //     ...formValues,
        //     created: JSON.stringify(formValues.created)
        // }
        // console.log('New Book:', newBook);
        // dispatch(booksActions.addNewBook(newBook));
        // setTimeout(() => {
        //     navigate(`/books/${bookId}`);
        // }, 500)
        const {username, password} = formValues;
        dispatch(authAction.loginUser({username, password}));
    }

    return (
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <InputGroup>
                <Label>{ t('welcomePage.loginForm.username') }</Label>
                <Input type="text" {...register(FIELDS.USERNAME)}/>
                { errors[FIELDS.USERNAME] && (
                    <ErrorMessage>{errors[FIELDS.USERNAME].message}</ErrorMessage>
                )}
            </InputGroup>
            <InputGroup>
                <Label>{ t('welcomePage.loginForm.password')}</Label>
                <Input type="text" {...register(FIELDS.PASSWORD)}/>
                { errors[FIELDS.PASSWORD] && (
                    <ErrorMessage>{errors[FIELDS.PASSWORD].message}</ErrorMessage>
                )}
            </InputGroup>
            <SubmitButton>Login</SubmitButton>
        </Form>
    )
}

export default memo(LoginForm);