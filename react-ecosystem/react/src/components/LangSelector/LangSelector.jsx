import { memo } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
//
import { uiSelectors, LANGUAGES } from "../../store"
//
import {Wrapper, Select, Option, Label, SelectText, OptionWrapper} from './LangSelector.elements';

const LangSelector = () => {
    const {t, i18n} = useTranslation();

    const langs = useSelector(uiSelectors.getLanguages);
    const [lang, setLang] = useState(langs[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOnOptionClick = (lang) => {
        console.log("🚀 ~ file: LangSelector.jsx ~ line 13 ~ handleOnOptionClick ~ lang", lang)
        setLang(lang);
        setIsOpen(false);
        i18n.changeLanguage(lang.value);
    }

    return (
        <Wrapper>
            <Label>{t('ui.language')}</Label>
            <Select >
                <SelectText onClick={() => setIsOpen(true)}>{lang.name}</SelectText>
                {isOpen && (
                    <OptionWrapper>
                        {
                        langs.map(lang => (
                            <Option
                            onClick={() => handleOnOptionClick(lang)}
                            value={lang.value}>
                                {lang.name}
                            </Option>
                        ))
                        }
                    </OptionWrapper>
                )}
            </Select>
        </Wrapper>
    )
}

export default memo(LangSelector)