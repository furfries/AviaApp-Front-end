import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const MainPage = () => {
    return (
        <MDBCarousel showIndicators showControls fade>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement src='https://novotelbangkokimpact.com/wp-content/uploads/sites/59/2021/11/NBI-Airplane.jpg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement src='https://static.life.ru/publications/2022/2/28/708430975798.6384-900x.jpeg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement src='https://www.kindatrippy.com/wp-content/uploads/2015/01/HowToRelaxOnLongFlights-900x400.jpg' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default MainPage;