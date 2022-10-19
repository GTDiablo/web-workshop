import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
//
import { BookDetailWrapper, StyledField,  StyledKey, StyledValue } from './BookDetail.elements';

function BookDetail({book}) {
    const {t} = useTranslation();
  return (
    <BookDetailWrapper>
        <StyledField>
            <StyledKey>{t('bookDetail.title')}</StyledKey>
            <StyledValue>{book.title}</StyledValue>
        </StyledField>
        <StyledField>
            <StyledKey>{t('bookDetail.author')}</StyledKey>
            <StyledValue>{book.author}</StyledValue>
        </StyledField>
        <StyledField>
            <StyledKey>{t('bookDetail.numberOfPages')}</StyledKey>
            <StyledValue>{book.numberOfPages}</StyledValue>
        </StyledField>
        <StyledField>
            <StyledKey>{t('bookDetail.publishedAt')}</StyledKey>
            <StyledValue>{book.created}</StyledValue>
        </StyledField>
    </BookDetailWrapper>
  )
}

export default memo(BookDetail)