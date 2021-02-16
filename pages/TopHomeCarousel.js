import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeSlider } from './api/_redux/action/action';

const TopHomeCarousel = () => {
    const dispatch = useDispatch()
    const sliderList = useSelector((state) => state.HomeCarouselReducer.sliderList)
    console.log('sliderList :>> ', sliderList);
    useEffect(() => {
        dispatch(getHomeSlider())
    }, [])
    return (
        <>
            {
                sliderList && (
                    <Carousel>
                        {
                            sliderList.length > 0 && sliderList.map((item, index) => (
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        style={{maxHeight: '450px', borderRadius: '10px'}}
                                        src={item.image_url !== null || item.image_url !== "" ? item.image_url : "/images/slider/slide1.png"}
                                        // src=
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 style={{color: `${item.text_color}`}}>{item.title !== null || item.title !== "" ? item.title : "Maccaf Ecommerce"}</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                )
            }
        </>
    );
};

export default TopHomeCarousel;