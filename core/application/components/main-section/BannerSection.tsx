import React, {useState} from "react";
import {breakpoints, deviceSizes} from "@/themes/breakpoints";
import styled, {css, keyframes} from "styled-components";
import {Column, Row} from "@/core/application/components/common";
import {Paragraph, Title2, Title3} from "@/core/application/components/common/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {Assets} from "@/core/application/constants/assets";

/**
 * @Project wambi-connect
 * @File BannerSection.tsx
 * @Path core/application/components/main-section
 * @Author BRICE ZELE
 * @Date 17/08/2023
 */
interface ICTAProps {
    link: string
    image: string
}

interface IMainSectionProps {
    title: string
    subTitle: string
    description: string
    cta: ICTAProps[]

}

const BannerSection: React.FC<IMainSectionProps> = ({
                                                        title,
                                                        subTitle,
                                                        description,
                                                        cta
                                                    }) => {

    return (
        <MainSectionContainer className='main-section'>
            <MainSectionWrapper className='custom-container'>
                <MainSectionData className='main-section-data col-12'>
                    <MainSectionRow className='row'>
                        <MainSectionColumn className='col-lg-5 col-md-12'>
                            <Fade left>
                                <BannerText className='banner-text'>
                                    <Title3>{title}</Title3>
                                    <Title2>{subTitle}</Title2>
                                    <Paragraph>{description}</Paragraph>
                                    <MainSectionCTAContainer>
                                        {cta.map((element, index) => (
                                            <a target='_blank' href={element.link} title={element.link} key={index}>
                                                <img src={element.image}/>
                                            </a>
                                        ))}
                                    </MainSectionCTAContainer>
                                </BannerText>
                            </Fade>
                        </MainSectionColumn>
                        <Column className='col-lg-7 col-md-12'>
                            <Fade bottom>
                                <BannerContainer>
                                    <BannerImgContainer>
                                        <BannerImg src={Assets.images.mainSectionBanner}/>
                                    </BannerImgContainer>
                                    <Ring1>
                                        <img src='https://miro.medium.com/v2/resize:fit:4800/0*KIKnUvzdIkp5zcDJ'/>
                                    </Ring1>
                                    <Ring2>
                                        <img src='https://miro.medium.com/v2/resize:fit:4800/0*KIKnUvzdIkp5zcDJ'/>
                                    </Ring2>
                                    <Ring3>
                                        <img src='https://miro.medium.com/v2/resize:fit:4800/0*KIKnUvzdIkp5zcDJ'/>
                                    </Ring3>
                                    <Ring4>
                                        <img src='https://miro.medium.com/v2/resize:fit:4800/0*KIKnUvzdIkp5zcDJ'/>
                                    </Ring4>
                                    <Ring5/>
                                    <Ring6/>
                                    <Ring7/>
                                </BannerContainer>
                            </Fade>
                        </Column>
                    </MainSectionRow>
                </MainSectionData>
            </MainSectionWrapper>
        </MainSectionContainer>
    )
}

const MainSectionContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/images/main-sec-bg2.png);
  padding: 250px 0 0 0;

  @media ${breakpoints.tabletL} {
    padding: 300px 0 0 0;
  }

  @media ${breakpoints.tablet} {
    padding: 300px 0 0 0;
  }
`

const MainSectionWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const MainSectionRow = styled(Row)`
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`

const MainSectionCTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 30px;

  img {
    width: 100%
  }
`

const MainSectionColumn = styled(Column)`
  display: flex;
  align-items: center;
`

const MainSectionData = styled.div`
  width: 100%;
`

const BannerContainer = styled.div`
  position: relative;
`

const BannerText = styled.div`
  width: 100%;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 7px;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 70px;
  }

  & > a {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 70px;
    padding: 0 100px;
    border: 2px solid;
    text-transform: uppercase;
    border-radius: 20px;
    display: inline-block;
  }
`

const BannerImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  &:before {
    content: "";
    position: absolute;
    border: 1px dashed #ffffff5c;
    border-radius: 50%;
    width: 80%;
    height: 80%;
    left: 11%;
    top: -9%;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px dashed #ffffff5c;
    border-radius: 50%;
    width: 100%;
    height: 102%;
    left: 1%;
    top: -20%;
  }

  @media ${breakpoints.tablet} {
    padding-bottom: 0;

    &:before {
      left: 10%;
      width: 80%;
      height: 110%;
    }

    &:after {
      width: 93%;
      height: 122%;
    }

  }

  @media ${breakpoints.mobileL} {
    padding-bottom: 0;

    &:before {
      width: 75%;
      height: 100%;
    }

    &:after {
      width: 93%;
      height: 122%;
    }
  }

`

const BannerImg = styled.img`
  width: 110%;
`

const Ring = css`
  position: absolute;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, .2);
  border-radius: 50%;
  background: #007afd;
  display: inline-block;

  img {
    padding: 3px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #fff;
    max-width: 100%;
  }
`

const UpDown1 = keyframes`
  50% {
    transform: translateY(30px)
  }
`

const UpDown2 = keyframes`
  50% {
    transform: translateY(10px)
  }
`

const UpDown11 = keyframes`
  50% {
    transform: translateY(5px)
  }
`

const UpDown12 = keyframes`
  50% {
    transform: translateY(-5px)
  }
`

const Ring1 = styled.span`
  left: 19%;
  top: 67%;
  animation: ${UpDown11} 2s infinite linear;
  ${Ring};

  img {
    width: 40px !important;
    height: 40px !important;
  }

  @media ${breakpoints.tablet} {
    top: 87%;

    img {
      width: 50px !important;
      height: 50px !important;
    }
  }
`
const Ring2 = styled.span`
  left: 70%;
  top: -20%;
  animation: ${UpDown12} 2s infinite linear;
  ${Ring};

  img {
    width: 50px !important;
    height: 50px !important;
  }

  @media ${breakpoints.tablet} {
    top: -15%;

    img {
      width: 80px !important;
      height: 80px !important;
    }
  }
`

const Ring3 = styled.span`
  left: 6%;
  top: 24%;
  animation: ${UpDown11} 2s infinite linear;
  ${Ring};

  img {
    width: 40px !important;
    height: 40px !important;
  }

  @media ${breakpoints.tablet} {
    left: 6%;
    top: 30%;

    img {
      width: 60px !important;
      height: 60px !important;
    }
  }
`

const Ring4 = styled.span`
  left: 88%;
  top: 52%;
  animation: ${UpDown12} 2s infinite linear;
  ${Ring};

  img {
    width: 50px !important;
    height: 50px !important;
  }

  @media ${breakpoints.tablet} {
    top: 50%;
    left: 88%;

    img {
      width: 80px !important;
      height: 80px !important;
    }
  }
`

const Ring5 = styled.span`
  background-color: #007afd;
  top: -7%;
  left: 30%;
  animation: ${UpDown12} 2s infinite linear;
  width: 30px !important;
  height: 30px !important;
  ${Ring};
`

const Ring6 = styled.span`
  background-color: #007afd;
  top: 80%;
  left: 52%;
  animation: ${UpDown12} 2s infinite linear;
  width: 20px !important;
  height: 20px !important;
  ${Ring};

  @media ${breakpoints.mobileL} {
    top: 100%;
    left: 52%;
  }

  @media ${breakpoints.tablet} {
    top: 100%;
    left: 52%;
  }
`

const Ring7 = styled.span`
  background-color: #007afd;
  top: 19%;
  left: 86%;
  animation: ${UpDown12} 2s infinite linear;
  width: 25px !important;
  height: 25px !important;
  ${Ring};

  @media ${breakpoints.tablet} {
    top: 19%;
    left: 80%;
  }

  @media ${breakpoints.mobileL} {
    top: 19%;
    left: 80%;
  }

`
export default BannerSection
