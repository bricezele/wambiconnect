import React, {useRef} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {breakpoints, deviceSizes} from "@/themes/breakpoints";
// @ts-ignore
import Fade from "react-reveal/Fade";
import {FormattedMessage} from "react-intl";

/**
 * @Project wambi-connect
 * @File TestimonialsSection.tsx
 * @Path core/application/components/testimonial
 * @Author BRICE ZELE
 * @Date 26/09/2023
 */
interface IReviewProps {
    image: string
    name: string
    role: string
    review: string
}

interface IReviewsSectionProps {
    reviews: IReviewProps[]
}

const TestimonialsSection: React.FC<IReviewsSectionProps> = ({
                                                                 reviews
                                                             }) => {

    const sliderCommentRef = useRef<Slider>(null)
    const sliderNavRef = useRef<Slider>(null)

    return (
        <TestimonialSectionContainer>
            <TestimonialSectionWrapper className='custom-container'>
                <Fade left duration={700} delay={0}>
                    <TestimonialSlider className='testimonial-slider'>
                        <Slider arrows={false}
                                ref={sliderCommentRef}
                                asNavFor={sliderNavRef.current!}
                                dots={false}
                                fade
                                slidesToShow={1}
                                slidesToScroll={1}>
                            {
                                reviews.map((review, index) => (
                                    <TestimonialUserComment className='user-comment' key={index}>
                                        <TestimonialUserCommentContent><FormattedMessage
                                            id={review.review}/></TestimonialUserCommentContent>
                                    </TestimonialUserComment>
                                ))
                            }
                        </Slider>
                    </TestimonialSlider>
                </Fade>
                <Fade bottom duration={700} delay={100}>
                    <TestimonialNavSlider className='testimonial-nav'>
                        <Slider ref={sliderNavRef}
                                slidesToShow={5}
                                slidesToScroll={1}
                                asNavFor={sliderCommentRef.current!}
                                dots={false}
                                arrows={false}
                                centerMode
                                focusOnSelect
                                responsive={[
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 1,
                                            infinite: true,
                                            dots: false
                                        }
                                    },
                                    {
                                        breakpoint: 576,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    }
                                ]}
                        >
                            {
                                reviews.map((review, index) => (
                                    <TestimonialUserInfoWrapper key={index}>
                                        <TestimonialUserInfo className='user-info'>
                                            <img src={review.image}/>
                                            <h3>{review.name}</h3>
                                            <span><FormattedMessage id={review.role}/></span>
                                        </TestimonialUserInfo>
                                    </TestimonialUserInfoWrapper>
                                ))
                            }
                        </Slider>
                    </TestimonialNavSlider>
                </Fade>
            </TestimonialSectionWrapper>
        </TestimonialSectionContainer>
    )
}


const TestimonialSectionContainer = styled.section`
  padding: 100px 0 50px 0;
  position: relative;

  &:before {

  }
`
const TestimonialSectionWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`
const TestimonialSlider = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${breakpoints.tabletL} {
    width: 850px;
  }
`
const TestimonialNavSlider = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    bottom: 67px;
    left: 0;
    width: 100%;
    height: 3px;
    opacity: 0.10;
    background-color: #484848;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 67px;
    left: 50%;
    transform: translateX(-50%);
    width: 117px;
    height: 3px;
    background-color: #007afd;
  }
`
const TestimonialUserComment = styled.div`
  width: 100%;
  padding: 20px 0 40px 0;
  text-align: center;
  position: relative;

  @media ${breakpoints.tabletL} {
    min-height: 300px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 416px;
    height: 275px;
    background-image: url(/images/comm2.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
`
const TestimonialUserCommentContent = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 46px;
`

const TestimonialUserInfoWrapper = styled.div``

const TestimonialUserInfo = styled.div`
  text-align: center;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 13px;

  @media ${breakpoints.tabletL} {
    row-gap: 0;
  }

  img {
    width: 65px;
    object-fit: cover;
    display: inline-block;
    padding-bottom: 0;

    @media ${breakpoints.tabletL} {
      padding-bottom: 35px;
    }
  }

  h3 {
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 7px;
    opacity: 0;
    visibility: hidden;
    display: inline-block;

    @media ${breakpoints.laptopM} {
      font-size: 24px;
    }
  }

  span {
    opacity: 0;
    visibility: hidden;
    font-size: 16px;
    display: block;
  }

`

export default TestimonialsSection
