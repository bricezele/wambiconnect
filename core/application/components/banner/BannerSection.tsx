import React, {useCallback, useState} from "react";
import {breakpoints, deviceSizes} from "@/themes/breakpoints";
import styled, {css, keyframes} from "styled-components";
import {Column, Row} from "@/core/application/components/common";
import {Paragraph, Title2, Title3} from "@/core/application/components/common/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {Assets} from "@/core/application/constants/assets";
import {useIntl} from "react-intl";
import LinkWrapper from "@/core/application/components/common/LinkWrapper";
import Modal from "@/core/application/components/common/Modal";

/**
 * @Project wambi-connect
 * @File BannerSection.tsx
 * @Path core/application/components/banner
 * @Author BRICE ZELE
 * @Date 17/08/2023
 */
export interface ICTAProps {
    link: string
    image: string
}

interface IUser {
    title: string
    users: string[]
}

interface IMainSectionProps {
    title: string
    subTitle: string
    description: string
    cta: ICTAProps[]
    userInfos: IUser

}

const BannerSection: React.FC<IMainSectionProps> = ({
                                                        title,
                                                        subTitle,
                                                        description,
                                                        cta,
                                                        userInfos
                                                    }) => {
    const intl = useIntl()
    const [showModal, setShowModal] = useState<boolean>(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <MainSectionContainer className='main-section'>
            {showModal && <Modal toggleModal={toggleModal}>
                <iframe
                    loading="lazy"
                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Modal>}
            <div className="star-bg">
                <div id="stars"></div>
                <div id="stars3"></div>
            </div>
            <MainSectionWrapper className='custom-container'>
                <MainSectionData className='main-section-data col-12'>
                    <MainSectionRow className='row'>
                        <MainSectionColumn className='col-lg-5 col-md-12'>
                            <Fade left>
                                <BannerText className='banner-text'>
                                    <Title3>{intl.formatMessage({id: title})}</Title3>
                                    <Title2>{intl.formatMessage({id: subTitle})}</Title2>
                                    <Paragraph>{intl.formatMessage({id: description})}</Paragraph>
                                    <UsersAppContainer>
                                        <ul>
                                            {
                                                userInfos.users.map((user, index) => (
                                                    <li key={index}>
                                                        <img src={user}/>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <Title3>{intl.formatMessage({id: userInfos.title})}</Title3>
                                    </UsersAppContainer>
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
                        <Column className='col-lg-7 col-md-12 img-banner'>
                            <BannerContainer>
                                <Fade>
                                    <BannerImgContainer>
                                        <BannerImg src={Assets.images.mainSectionBanner}/>
                                        <PlayButton>
                                            <LinkWrapper href='#' onClick={toggleModal}>
                                                <i className='mdi mdi-play'/>
                                            </LinkWrapper>
                                        </PlayButton>
                                    </BannerImgContainer>
                                </Fade>
                                <RingContainer>
                                    <Ring1>
                                        <img src={Assets.images.datingApp}/>
                                    </Ring1>
                                    <Ring2>
                                        <img src={Assets.images.socialNetwork}/>
                                    </Ring2>
                                    <Ring3>
                                        <img src={Assets.images.ecommerce}/>
                                    </Ring3>
                                    <Ring4>
                                        <img src={Assets.images.socialMedia}/>
                                    </Ring4>
                                    <Ring5/>
                                    <Ring6/>
                                    <Ring7/>
                                </RingContainer>
                            </BannerContainer>
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
  padding: 150px 0 0 0;
  position: relative;

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  @media ${breakpoints.tabletL} {
    padding: 200px 0 0 0;
    background-size: cover;
  }

  @media ${breakpoints.tablet} {
    padding: 200px 0 50px 0;
  }

  .img-banner {
    padding-top: 150px;
    padding-bottom: 100px;

    @media ${breakpoints.tablet} {
      padding-top: 200px;
      padding-bottom: 100px;
    }
  }
`

const MainSectionWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const MainSectionRow = styled(Row)`
  justify-content: space-between;
`

const MainSectionCTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: center;

  @media ${breakpoints.tabletL} {
    justify-content: flex-start;
  }

  a {
    display: block;
    padding: 15px 35px;
    background-color: #fff;
    border: none;
    position: relative;
    border-radius: 12px;
    transition: .4s all;

    &:hover {
      background-color: #007afd;

      img {
        filter: invert(1);
      }
    }
  }

  img {
    width: 80%;
    transition: .4s all;

    @media ${breakpoints.tablet} {
      width: 80%;
      justify-content: space-between;
    }

    @media ${breakpoints.tabletL} {
      width: 80%;
    }

    @media ${breakpoints.laptop} {
      width: 100%;
    }
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
  padding-top: 85px;

  @media ${breakpoints.laptop} {
    padding-top: 0;
  }

  @media ${breakpoints.laptopM} {
    padding-bottom: 85px;
  }

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
    opacity: 0;
    animation: fadeIn 1s ease-in alternate;
    animation-delay: 1s;
    animation-fill-mode: forwards;
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
    opacity: 0;
    animation: fadeIn 1s ease-in alternate;
    animation-delay: 1s;
    animation-fill-mode: forwards;
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

const UsersAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  justify-content: center;

  @media ${breakpoints.tabletL} {
    justify-content: inherit;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0 10px 20px 0;
    justify-content: center;

    @media ${breakpoints.tabletL} {
      justify-content: inherit;
    }

    li {
      border-radius: 50%;
      border: 4px solid #fff;
      padding: 0;
      width: 60px;
      height: 60px;

      img {
        vertical-align: middle;
        border-style: none;
        width: 100%;
        border-radius: 50%;
      }
    }

    li:not(:first-child) {
      margin-left: -20px;
    }
  }
`

const BannerImg = styled.img`
  width: 110%;
`

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`

const PlayButton = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 30%;
  border-radius: 50%;
  background-color: #007afd;
  box-shadow: 0 0 40px rgba(0, 122, 253, 1);
  opacity: 0.95;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    width: 80px;
    height: 80px;
    left: 50%;
    top: 40%;
  }

  a {
    z-index: 1000;
  }

  i {
    color: #fff;
    font-size: 40px;

    @media ${breakpoints.tablet} {
      font-size: 60px;
    }
  }


  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #007afd;
    border-radius: 50%;
    animation: ${pulseBorder} 1500ms ease-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #007afd;
    border-radius: 50%;
    transition: all 200ms;
  }

  .video-play-button:hover:after {
    background-color: darken(#007afd, 10%);
  }


`
const RingContainer = styled.div`
  opacity: 0;
  animation: fadeIn 1s ease-in alternate;
  animation-delay: 2s;
  animation-fill-mode: forwards;
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
