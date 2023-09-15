/**
 * @Project wambi-connect
 * @File HeaderMobile.tsx
 * @Path core/application/components/header
 * @Author BRICE ZELE
 * @Date 16/08/2023
 */
import React, {useRef} from "react";
import styled from "styled-components";
import LinkWrapper from "@/core/application/components/common/LinkWrapper";
import HeaderLocaleSelect from "@/core/application/components/header/HeaderLocaleSelect";

interface IHeaderMobileProps {
    openMobileMenu?: boolean
    onCloseMenu: () => void
}

const HeaderMobile: React.FC<IHeaderMobileProps> = ({openMobileMenu = false, onCloseMenu}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
        <HeaderContainer ref={containerRef}
                         className={`responsive-mobile-menu ${openMobileMenu ? 'active' : ''}`}>
            <CloseButton onClick={onCloseMenu}>
                <i className='mdi mdi-close'/>
            </CloseButton>
            <MobileMenu>
                <MenuList>
                    <MenuItem>
                        <Link href={'/'}>Features</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/'}>Features</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/'}>Features</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/'}>Features</Link>
                    </MenuItem>
                </MenuList>
            </MobileMenu>
            <SocialLinksContainer>
                <li><a href="#" title=""><i className="mdi mdi-facebook"></i></a></li>
                <li><a href="#" title=""><i className="mdi mdi-twitter"></i></a></li>
                <li><a href="#" title=""><i className="mdi mdi-instagram"></i></a></li>
                <li><HeaderLocaleSelect isHeaderContentWhite={false}/></li>
            </SocialLinksContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  height: 100%;
  padding: 30px 50px;
  box-shadow: 0 0 65px rgba(0, 0, 0, .07);
  opacity: 0;
  visibility: hidden;
  transition: all .8s ease;
  z-index: 99999999;
  transform: translateX(100%);
  overflow-y: auto;

  &.active {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }
`

const CloseButton = styled.span`
  float: right;
  color: #333333;
  font-size: 40px;
  cursor: pointer;
`

const MobileMenu = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 35px;
`

const MenuList = styled.ul`

`
const MenuItem = styled.li`
  float: left;
  width: 100%;
  padding: 10px 0;
`

const Link = styled(LinkWrapper)`
  float: left;
  width: 100%;
  color: #333;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 24px;
`

const SocialLinksContainer = styled.ul`
  float: left;
  width: 100%;
  margin-bottom: 50px;

  li {
    display: inline-block;
    margin-right: 15px;
  }

  a {
    color: #333;
    font-size: 20px;
  }
`

export default HeaderMobile
