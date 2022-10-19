import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
//
import { BookListTitle, BookListWrapper } from './BookList.elements'
import { BookListItem } from './BookListItem';

function BookList({books}) {
    const {t} = useTranslation();
  return (
    <>
        <BookListTitle>{t('bookList.title')}</BookListTitle>
        <BookListWrapper>
        {books.map((book) => (<BookListItem book={book} key={book.id} /> ))}
        </BookListWrapper>
    </>
  )
}

export default memo(BookList)