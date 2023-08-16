import React, {useState} from "react";
import useMediaQuery from "@/core/application/hooks/useMediaQuery";
import {deviceSizes} from "@/themes/breakpoints";
import styled from "styled-components";

/**
 * @Project wambi-connect
 * @File MainSection.tsx
 * @Path core/application/components/main-section
 * @Author BRICE ZELE
 * @Date 17/08/2023
 */
interface IMainSectionProps {

}

const MainSection: React.FC<IMainSectionProps> = ({}) => {
    
    return (
        <MainSectionContainer className='main-section'>
            <MainSectionWrapper className='custom-container'></MainSectionWrapper>
        </MainSectionContainer>
    )
}

const MainSectionContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  padding: 125px 0 310px 0;
  background-image: url(/images/main-sec-bg2.png);
`

const MainSectionWrapper = styled.div``
export default MainSection
