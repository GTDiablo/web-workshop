import { useForm } from 'react-hook-form';
import { memo } from "react"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {v4 as uuidV4} from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
//
import { Label, Input, InputGroup, ErrorMessage, Form, SubmitButton } from "./AddNewBookForm.elements";
import { authSelectors, booksActions } from '../../store';

const FIELDS = Object.freeze({
    TITLE: 'title',
    AUTHOR: 'author',
    NUMBER_OF_PAGES: 'numberOfPages',
    CREATED: 'created'
});

const schema = yup.object({
    [FIELDS.TITLE]: yup.string().max(50).required(),
    [FIELDS.AUTHOR]: yup.string().max(30).required(),
    [FIELDS.NUMBER_OF_PAGES]: yup.number().positive().integer().required(),
    [FIELDS.CREATED]: yup.date().default(() => new Date())
}).required();

const AddNewBookForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggedInUserUsername = useSelector(authSelectors.getUserName);

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            [FIELDS.AUTHOR]: loggedInUserUsername ?? ''
        }
    });

    const handleOnSubmit = (formValues) => {
        const bookId = uuidV4()
        const newBook = {
            id: bookId,
            ...formValues,
            created: JSON.stringify(formValues.created)
        }
        console.log('New Book:', newBook);
        dispatch(booksActions.addNewBook(newBook));
        setTimeout(() => {
            navigate(`/books/${bookId}`);
        }, 500)
    }

    return (
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <InputGroup>
                <Label>Title of the book:</Label>
                <Input type="text" {...register(FIELDS.TITLE)}/>
                { errors[FIELDS.TITLE] && (
                    <ErrorMessage>{errors[FIELDS.TITLE].message}</ErrorMessage>
                )}
            </InputGroup>
            <InputGroup>
                <Label>Name of the author:</Label>
                <Input type="text" {...register(FIELDS.AUTHOR)} disabled={!!loggedInUserUsername}/>
                { errors[FIELDS.AUTHOR] && (
                    <ErrorMessage>{errors[FIELDS.AUTHOR].message}</ErrorMessage>
                )}
            </InputGroup>
            <InputGroup>
                <Label>Number of the pages:</Label>
                <Input type="number" {...register(FIELDS.NUMBER_OF_PAGES)}/>
                { errors[FIELDS.NUMBER_OF_PAGES] && (
                    <ErrorMessage>{errors[FIELDS.NUMBER_OF_PAGES].message}</ErrorMessage>
                )}
            </InputGroup>
            <InputGroup>
                <Label>Written at:</Label>
                <Input type="date" {...register(FIELDS.CREATED)}/>
                { errors[FIELDS.CREATED] && (
                    <ErrorMessage>{errors[FIELDS.CREATED].message}</ErrorMessage>
                )}
            </InputGroup>
            <SubmitButton>Add new book</SubmitButton>
        </Form>
    )
}

export default memo(AddNewBookForm);