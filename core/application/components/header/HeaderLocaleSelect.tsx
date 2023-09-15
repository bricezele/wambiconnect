/**
 * @Project wambi-connect
 * @File HeaderLocaleSelect.tsx
 * @Path core/application/components/header
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
import React, {useCallback, useState} from 'react'
import {useIntl} from 'react-intl'
import styled from 'styled-components'
import {Assets} from '../../constants/assets'
import {NavRoute, Routes} from '../../constants/routes'
import router from 'next/router'
import Icon from "@/core/application/components/common/Icon";
import {Locale} from "@/core/domain/enums/Locale";
import {DEFAULT_LOCALE} from "@/core/constants";
import {usePageInfo} from "@/core/application/contexts/PageInfoContext";

// Component definition
// --------------------------------------------------------------------------------------

interface IHeaderLocaleSelectProps {
    isHeaderContentWhite: boolean
}

const HeaderLocaleSelect: React.FC<IHeaderLocaleSelectProps> = ({isHeaderContentWhite}) => {
    const intl = useIntl()
    const [show, setShow] = useState<boolean>(false)
    const pageInfo = usePageInfo()
    const handleClick = () => {
        setShow(!show)
    }

    const switchLocale = useCallback(
        (locale: Locale) => {
            router.replace(Routes[locale][pageInfo.currentRoute](), Routes[locale][pageInfo.currentRoute](), {locale})
        },
        [router]
    )

    return (
        <SelectContainer className={show ? 'show' : ''}>
            <SelectContent
                onClick={handleClick}
                role="button"
                aria-controls="collapse_locale"
                aria-expanded={show}
                isHeaderContentWhite={isHeaderContentWhite}
            >
                {intl.locale.toUpperCase()}
                <ArrowIcon
                    className="arrow-icon"
                    isShow={show}
                    src={isHeaderContentWhite ? Assets.svgs.icons.arrowUpWhite : Assets.svgs.icons.arrowUpBlack}
                />
            </SelectContent>
            <SelectOptionContainer className="select-container" aria-hidden={!show} id="collapse_locale">
                {Object.values(Locale)
                    .filter((locale) => locale !== intl.locale)
                    .map((locale, index) => (
                        <SelectOptionLabel
                            key={index}
                            onClick={() => {
                                switchLocale(locale)
                            }}
                        >
                            {locale.toUpperCase()}
                        </SelectOptionLabel>
                    ))}
            </SelectOptionContainer>
        </SelectContainer>
    )
}

export default HeaderLocaleSelect

// Styles
// --------------------------------------------------------------------------------------

interface IsWhiteProps {
    isHeaderContentWhite?: boolean
}

interface IIsShowProps {
    isShow?: boolean
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.8rem;

  &.show img.arrow-icon {
    transform: rotate(180deg);
  }

  &.show > .select-container {
    display: flex;
  }
`

const SelectContent = styled.div<IsWhiteProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  justify-content: space-between;

  text-align: start;
  font-family: ${({theme}) => theme.font.default};
  color: ${({theme}) => theme.color.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.8rem;
  gap: 0.6rem;

  background-color: transparent;

  transition: all 0.3s ease-in-out;
  color: ${({theme, isHeaderContentWhite}) => (isHeaderContentWhite ? theme.color.white : theme.color.text)};
  border-color: ${({theme, isHeaderContentWhite}) => (isHeaderContentWhite ? theme.color.white : theme.color.text)};

  &::after {
    background-color: ${({theme, isHeaderContentWhite}) =>
            isHeaderContentWhite ? theme.color.white : theme.color.text};
  }
`

const ArrowIcon = styled(Icon)<IIsShowProps>`
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease-in-out;
  margin-top: ${({isShow}) => (isShow ? '0.3rem' : '0')};
  margin-bottom: ${({isShow}) => (isShow ? '0' : '0.3rem')};
`

const SelectOptionContainer = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  gap: 1.6rem;
  border: 1px solid #d3d3d3;
  background-color: ${({theme}) => theme.color.white};
  border-radius: 8px;
  padding: 1.4rem 1.3rem;
  margin-top: 8rem;
`

const SelectOptionLabel = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`
