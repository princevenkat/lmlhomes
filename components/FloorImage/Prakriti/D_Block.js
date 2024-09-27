'use client'
import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/components/FloorImage/styles.module.css'
import Lightbox from 'react-18-image-lightbox';


export default function D_Block() {

    const canvasRef = useRef(null);

    const [highlightedArea, setHighlightedArea] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        {
            id: 'd-1',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-1.png'
        },
        {
            id: 'd-2',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-2.png'
        },
        {
            id: 'd-3',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-3.png'
        },
        {
            id: 'd-4',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-4.png'
        },
        {
            id: 'd-5',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-5.png'
        },
        {
            id: 'd-6',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-6.png'
        },
        {
            id: 'd-7',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-7.png'
        },
        {
            id: 'd-8',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-8.png'
        },
        {
            id: 'd-9',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-9.png'
        },
        {
            id: 'd-10',
            path: '/assets/prakriti/layouts/lightbox/D-Block/d-10.png'
        },
    ];

    const openLightbox = (id) => {
        const image = images.find(image => image.id === id);
        if (image) {
            setPhotoIndex(images.indexOf(image)); // Set the index of the image
            setIsOpen(true);
        }

        console.log(id, 'idd');
    }

    useEffect(() => {
        var image = document.querySelector('#mapImg');
        var n,
            areas = document.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 1200,
            previousHeight = 1200;
    
        // Define the event listener function
        function handleImageLoad() {
            var newWidth = image.width;
            var newHeight = image.height;
    
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
    
                var widthScaleFactor = newWidth / previousWidth;
                var heightScaleFactor = newHeight / previousHeight;
    
                for (var i = 0; i < coords[n].length; i++) {
                    if (i % 2 === 0) {
                        coords[n][i] = Math.round(coords[n][i] * widthScaleFactor);
                    } else {
                        coords[n][i] = Math.round(coords[n][i] * heightScaleFactor);
                    }
                }
    
                areas[n].coords = coords[n].join(',');
            }
    
            var canvas = document.querySelector('canvas');
            var ctx = canvas.getContext("2d");
            canvas.width = newWidth;
            canvas.height = newHeight;
    
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
    
            // Remove the event listener after handling the image load
            image.removeEventListener('load', handleImageLoad);
        }
    
        // Attach the event listener to the image
        image.addEventListener('load', handleImageLoad);
    
        // Clean up by removing the event listener when the component unmounts
        return () => {
            image.removeEventListener('load', handleImageLoad);
        };
    }, []);


    const draw = (event, id) => {
        canvasRef.current.classList.add('show');

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const coords = event.target.coords.split(',').map(Number);

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.moveTo(coords[0], coords[1]);

        for (let i = 2; i < coords.length; i += 2) {
            ctx.lineTo(coords[i], coords[i + 1]);
        }

        ctx.closePath();
        ctx.fill();


        setHighlightedArea(id);
    };

    const unDraw = () => {
        canvasRef.current.classList.remove('show');
        setHighlightedArea(null);
    }



    return (
        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.wrap}>
                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/D-Block.png" useMap="#d-block" />

                            <map name="d-block">
                                <area target="" alt="" title=""  coords="294,428,505,427,502,331,489,331,486,312,522,313,520,244,491,240,487,226,442,225,444,244,394,247,395,234,352,234,352,177,261,180,260,172,244,172,245,143,188,138,188,172,174,173,175,242,160,238,158,205,91,205,91,235,82,234,84,299,69,302,67,340,196,335,257,335,256,426" shape="poly" onMouseEnter={(event) => { draw(event, 'd-1') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-1')} />
                                <area target="" alt="" title=""  coords="259,338,105,341,105,400,77,401,78,414,44,417,44,553,77,557,78,620,60,621,64,665,178,665,175,604,235,602,262,603" shape="poly" onMouseEnter={(event) => { draw(event, 'd-2') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-2')}/>
                                <area target="" alt="" title=""  coords="257,666,109,667,109,706,79,710,77,725,44,723,45,870,74,867,78,1027,83,1028,82,1061,154,1057,150,1023,262,1025" shape="poly" onMouseEnter={(event) => { draw(event, 'd-3') }} onMouseLeave={unDraw}onClick={() => openLightbox('d-3')} />
                                <area target="" alt="" title=""  coords="401,840,261,835,259,1018,344,1017,341,1051,486,1053,487,1019,500,1018,499,991,563,992,564,835,402,839" shape="poly" onMouseEnter={(event) => { draw(event, 'd-4') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-4')}/>
                                <area target="" alt="" title=""  coords="563,837,560,1018,646,1018,646,1053,789,1052,789,1021,803,1020,802,991,861,993,864,837" shape="poly" onMouseEnter={(event) => { draw(event, 'd-5') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-5')}/>
                                <area target="" alt="" title=""  coords="864,836,866,1018,888,1018,888,1053,958,1052,955,1020,1013,1017,1010,1052,1077,1055,1075,1020,1082,1019,1077,929,1101,929,1102,855,1087,852,1087,769,906,767,905,836" shape="poly" onMouseEnter={(event) => { draw(event, 'd-6') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-6')}/>
                                <area target="" alt="" title=""  coords="309,523,310,495,527,495,525,564,490,566,495,580,527,583,527,731,499,731,498,784,312,783" shape="poly" onMouseEnter={(event) => { draw(event, 'd-7') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-7')}/>
                                <area target="" alt="" title=""  coords="856,493,705,497,703,557,638,561,634,699,668,703,669,783,860,787" shape="poly" onMouseEnter={(event) => { draw(event, 'd-8') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-8')}/>
                                <area target="" alt="" title=""  coords="911,494,905,705,1061,708,1062,647,1142,647,1141,505,1132,501,1132,460,1117,459,1117,412,1108,414,1113,380,1060,378,1061,414,989,410,991,491" shape="poly" onMouseEnter={(event) => { draw(event, 'd-9') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-9')}/>
                                <area target="" alt="" title=""  coords="857,489,638,492,640,355,678,357,677,277,755,276,754,306,858,306,859,327,957,329,959,410,986,412,983,486,943,490,942,455,855,456" shape="poly" onMouseEnter={(event) => { draw(event, 'd-10') }} onMouseLeave={unDraw} onClick={() => openLightbox('d-10')}/>

                            </map>

                            <canvas ref={canvasRef} className='canvas'></canvas>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]?.path}
                                    onCloseRequest={() => setIsOpen(false)}
                                />
                            )}
                        </div>
                    </Col>

                    <Col lg={6}>
                        <table className={styles.mapTable}>
                            <tbody>
                                <tr id="">
                                    <th>FLAT Nos.</th>
                                    <th>SALES AREA</th>
                                    <th>TYPE</th>
                                </tr>

                                <tr id="d-1" className={`${highlightedArea === 'd-1' ? 'highlightedRow' : ''}`}>
                                    <td>101 - 401</td>
                                    <td>1443 sq.ft.</td>
                                    <td>3 BHK</td>
                                </tr>


                                <tr id="d-2" className={`${highlightedArea === 'd-2' ? 'highlightedRow' : ''}`}>
                                    <td>102 - 402</td>
                                    <td>1042 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-3" className={`${highlightedArea === 'd-3' ? 'highlightedRow' : ''}`}>
                                    <td>103 - 403</td>
                                    <td>1320 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="d-4" className={`${highlightedArea === 'd-4' ? 'highlightedRow' : ''}`}>
                                    <td>104 - 404</td>
                                    <td>1009 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-5" className={`${highlightedArea === 'd-5' ? 'highlightedRow' : ''}`}>
                                    <td>105 - 405</td>
                                    <td>1009 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-6" className={`${highlightedArea === 'd-6' ? 'highlightedRow' : ''}`}>
                                    <td>106 - 406</td>
                                    <td>1040 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-9" className={`${highlightedArea === 'd-9' ? 'highlightedRow' : ''}`}>
                                    <td>107 - 407</td>
                                    <td>1089 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-10" className={`${highlightedArea === 'd-10' ? 'highlightedRow' : ''}`}>
                                    <td>108 - 408</td>
                                    <td>1042 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-8" className={`${highlightedArea === 'd-8' ? 'highlightedRow' : ''}`}>
                                    <td>109 - 409</td>
                                    <td>1028 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="d-7" className={`${highlightedArea === 'd-7' ? 'highlightedRow' : ''}`}>
                                    <td>110 - 410</td>
                                    <td>1028 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
