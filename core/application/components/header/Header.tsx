import React from "react"
import styled from "styled-components"
import LinkWrapper from "@/core/application/components/common/LinkWrapper";
import {Routes} from "@/core/application/constants/routes";
import {useIntl} from "react-intl";
import {Locale} from "@/core/domain/enums/Locale";
import Image from "next/image";
import {Assets} from "@/core/application/constants/assets";

/**
 * @Project wambi-connect
 * @File Header.tsx
 * @Path core/application/components/header
 * @Author BRICE ZELE
 * @Date 06/08/2023
 */
interface IHeader {

}

const Header: React.FC<IHeader> = ({}) => {

    const {locale} = useIntl()
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderContent>
                    <HeaderLogoWrapper>
                        <LinkWrapper href={Routes[locale as Locale].HOME()}>
                            <Image width={175} height={124} src={Assets.images.logo} alt='Wambi logo'/>
                        </LinkWrapper>
                        <HeaderNav>
                            <HeaderNavList>
                                <HeaderNavItem>
                                    <LinkWrapper href={'/'}>Features</LinkWrapper>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <LinkWrapper href={'/'}>Features</LinkWrapper>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <LinkWrapper href={'/'}>Features</LinkWrapper>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <LinkWrapper href={'/'}>Features</LinkWrapper>
                                </HeaderNavItem>
                            </HeaderNavList>
                        </HeaderNav>
                    </HeaderLogoWrapper>
                </HeaderContent>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header``
const HeaderWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`
const HeaderContent = styled.div`
  float: left;
  width: 100%;
`

const HeaderLogoWrapper = styled.div`
  float: left;
`

const HeaderNav = styled.nav``

const HeaderNavList = styled.ul``
const HeaderNavItem = styled.li`
  display: inline-block;

  a {
    display: inline-block;
    font-size: ${({theme}) => theme.size.normal};
    font-weight: ${({theme}) => theme.weight.normal};
    text-transform: uppercase;
    padding: 0 1.2rem;
  }
`
export default Header
