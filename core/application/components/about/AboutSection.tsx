/**
 * @Project wambi-connect
 * @File AboutSection.tsx
 * @Path core/application/components/about
 * @Author BRICE ZELE
 * @Date 17/09/2023
 */
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import {useIntl} from "react-intl";
import {Row} from "@/core/application/components/common";
import {Assets} from "@/core/application/constants/assets";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {Title3} from "@/core/application/components/common/Title";
import {breakpoints} from "@/themes/breakpoints";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

interface IAboutItem {
    title: string
    description: string
}

interface IAboutSectionProps {
    items: IAboutItem[]
}

const AboutSection: React.FC<IAboutSectionProps> = ({items}) => {
    const intl = useIntl()

    return (
        <AboutContainer className='about' id='about'>
            <AboutBackground/>
            <AboutWrapper className='custom-container'>
                <AboutSubContainer>
                    <Row className='row'>
                        <AboutItemContainer className='col-md-12 col-lg-4'>
                            <AboutMainMobile className='about-img'>
                                <Fade left>
                                    <img src={Assets.images.mainMobile1}/>
                                </Fade>
                            </AboutMainMobile>
                        </AboutItemContainer>
                        <AboutItemContainer className='col-md-12 col-lg-8'>
                            <AboutList className='about-list'>
                                {
                                    items.map((item, index) => (
                                        <Fade bottom duration={700} delay={index * 100} key={`info_${index}`}>
                                            <AboutInfo className='about-info'>
                                                <AboutNumber className={`st${index + 1}`}>
                                                    <AboutNumberTitle>
                                                        <AnimatedNumbers
                                                            animateToNumber={index * 10}
                                                            locale="fr-FR"
                                                            configs={[
                                                                {mass: 1, tension: 220, friction: 100},
                                                                {mass: 1, tension: 180, friction: 130},
                                                                {mass: 1, tension: 280, friction: 90},
                                                                {mass: 1, tension: 180, friction: 135},
                                                                {mass: 1, tension: 260, friction: 100},
                                                                {mass: 1, tension: 210, friction: 180},
                                                            ]}/>
                                                    </AboutNumberTitle>
                                                </AboutNumber>
                                                <AboutInfoContainer className='abt-info'>
                                                    <AboutTitle3>{intl.formatMessage({id: item.title})}</AboutTitle3>
                                                    <AboutDescription>{intl.formatMessage({id: item.description})}</AboutDescription>
                                                </AboutInfoContainer>
                                            </AboutInfo>
                                        </Fade>
                                    ))
                                }
                            </AboutList>
                        </AboutItemContainer>
                    </Row>
                </AboutSubContainer>
            </AboutWrapper>
        </AboutContainer>
    )

}

const AboutContainer = styled.section`
  position: relative;

  @media ${breakpoints.tabletL} {
    padding: 270px 0 460px 0;
  }
`

const AboutBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: url(/images/bg3_2.png);
`

const AboutWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const AboutSubContainer = styled.div`
  width: 100%;
`

const AboutMainMobile = styled.div`
  img {
    transform: rotate(-15deg);
    width: 100%;
  }
`

const AboutItemContainer = styled.div`
`

const AboutInfo = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    flex-direction: row;
  }

  .st2:before {
    left: -45px;
    top: -15px;
    transform: rotate(254deg);
  }

  .st3:before {
    top: auto;
    right: -50px;
    bottom: -50px;
    transform: rotate(105deg);
  }
`

const AboutInfoContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
`

const AboutNumber = styled.div`
  width: 120px;
  position: relative;
  z-index: 99;

  &:before {
    content: '';
    position: absolute;
    top: -50px;
    right: 0;
    width: 116px;
    height: 120px;
    z-index: -1;
    background-repeat: no-repeat;
    background-image: url(/images/poly_2.png);
  }
`

const AboutTitle3 = styled(Title3)`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 15px;
  color: #fff;
`

const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
`

const AboutNumberTitle = styled.span`
  font-size: 55px;
  font-weight: 900;
  color: #fff;
`

const AboutList = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-top: 90px;

  @media ${breakpoints.tablet} {
    padding-left: 70px;
  }
`

export default AboutSection
