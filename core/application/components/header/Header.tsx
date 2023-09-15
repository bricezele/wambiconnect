import React, {useState} from "react";
import HeaderDesktop from "@/core/application/components/header/HeaderDesktop";
import HeaderMobile from "@/core/application/components/header/HeaderMobile";
import useMediaQuery from "@/core/application/hooks/useMediaQuery";
import {deviceSizes} from "@/themes/breakpoints";
import {Data} from "@/core/application/constants/data";

/**
 * @Project wambi-connect
 * @File Header.tsx
 * @Path core/application/components/header
 * @Author BRICE ZELE
 * @Date 16/08/2023
 */
interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = ({}) => {


    const isMobile = useMediaQuery(parseInt(deviceSizes.tablet))
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false)
    return (
        <>
            <HeaderDesktop menus={Data.menu} onOpenMenu={() => {
                setIsOpenMobileMenu((state) => !state)
            }}/>
            {isMobile && <HeaderMobile openMobileMenu={isOpenMobileMenu} onCloseMenu={() => {
                setIsOpenMobileMenu((state) => !state)
            }}/>}
        </>
    )
}


export default Header
