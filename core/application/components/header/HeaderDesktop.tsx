import React from "react"
import styled from "styled-components"
import LinkWrapper from "@/core/application/components/common/LinkWrapper";
import {NavRoute, Routes} from "@/core/application/constants/routes";
import {FormattedMessage, useIntl} from "react-intl";
import {Locale} from "@/core/domain/enums/Locale";
import Image from "next/image";
import {Assets} from "@/core/application/constants/assets";
import useMediaQuery from "@/core/application/hooks/useMediaQuery";
import {deviceSizes} from "@/themes/breakpoints";
import HeaderLocaleSelect from "@/core/application/components/header/HeaderLocaleSelect";

/**
 * @Project wambi-connect
 * @File HeaderDesktop.tsx
 * @Path core/application/components/header
 * @Author BRICE ZELE
 * @Date 06/08/2023
 */
export interface IMenu {
    link: NavRoute,
    label: string
}

interface IHeaderProps {
    onOpenMenu: () => void
    menus: IMenu[]
}

const HeaderDesktop: React.FC<IHeaderProps> = ({onOpenMenu, menus}) => {

    const isMobile = useMediaQuery(parseInt(deviceSizes.tablet))
    const {locale} = useIntl()
    const intl = useIntl()

    return (
        <HeaderContainer>
            <HeaderWrapper className='custom-container'>
                <HeaderContent>
                    <HeaderSubContent>
                        <LogoContainer>
                            <LinkWrapper href={Routes[locale as Locale].HOME()}>
                                {
                                    isMobile ?
                                        <Image width={80} height={57} src={Assets.images.logo} alt='Wambi logo'/> :
                                        <Image width={140} height={100} src={Assets.images.logo} alt='Wambi logo'/>
                                }
                            </LinkWrapper>
                        </LogoContainer>
                        {!isMobile && (
                            <HeaderNav>
                                <HeaderNavList>
                                    {
                                        menus.map((menu, index) => (
                                            <HeaderNavItem key={index}>
                                                <LinkWrapper
                                                    href={Routes[locale as Locale][menu.link]()}><FormattedMessage
                                                    id={menu.label}/> </LinkWrapper>
                                            </HeaderNavItem>
                                        ))
                                    }
                                </HeaderNavList>
                            </HeaderNav>
                        )}
                        <SocialLinksContainer className="up-social-links">
                            <ul>
                                <li><a href="#" title=""><i className="mdi mdi-facebook"></i></a></li>
                                <li><a href="#" title=""><i className="mdi mdi-twitter"></i></a></li>
                                <li><a href="#" title=""><i className="mdi mdi-instagram"></i></a></li>
                                <li><HeaderLocaleSelect isHeaderContentWhite/></li>
                            </ul>
                        </SocialLinksContainer>
                        {isMobile && (
                            <MobileMenuBtn onClick={onOpenMenu} className='mobile-menu-btn'>
                                <Link href='#'>
                                    <i className='fa fa-bars'/>
                                </Link>
                            </MobileMenuBtn>
                        )}
                    </HeaderSubContent>
                </HeaderContent>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  padding: 40px 0;
  z-index: 999999;
  transition: all .4s ease;
  position: absolute;
`
const HeaderWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`
const HeaderContent = styled.div`
  width: 100%;
`

const HeaderSubContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HeaderNav = styled.nav`
  padding-top: 13px;
`

const HeaderNavList = styled.ul``
const HeaderNavItem = styled.li`
  display: inline-block;

  a {
    display: inline-block;
    font-size: ${({theme}) => theme.size.normal};
    font-weight: ${({theme}) => theme.weight.normal};
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 12px;
  }
`

const LogoContainer = styled.div`
  float: left;
`

const MobileMenuBtn = styled.div`
  float: right;
  margin-top: 5px;
`
const Link = styled.a`
  display: inline-block;
  font-size: 30px;
`

const SocialLinksContainer = styled.div`
  float: right;
  margin-top: 6px;
  padding-left: 195px;

  li {
    display: inline-block;
  }

  li a {
    display: inline-block;
    font-size: 28px;
    padding: 0 15px;
  }
`
export default HeaderDesktop
