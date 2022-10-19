import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { BookListItemWrapper, ItemAuthor, ItemDate, ItemLeftContainer, ItemTitle } from './BookListItem.elements'

function BookListItem({book}) {
    const createdYear = new Date(book.created).getFullYear();
  return (
    <Link style={{textDecoration: 'none'}} to={`/books/${book.id}`}>
        <BookListItemWrapper>
            <ItemLeftContainer>
                <ItemTitle>{book.title}</ItemTitle>
                <ItemAuthor>{book.author}</ItemAuthor>
            </ItemLeftContainer>
            <ItemDate>{createdYear}</ItemDate>
        </BookListItemWrapper>
    </Link>
  )
}

export default memo(BookListItem)