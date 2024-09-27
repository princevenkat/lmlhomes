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
            id: 'e-1',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-1.png'
        },
        {
            id: 'e-2',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-2.png'
        },
        {
            id: 'e-3',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-3.png'
        },
        {
            id: 'e-4',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-4.png'
        },
        {
            id: 'e-5',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-5.png'
        },
        {
            id: 'e-6',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-6.png'
        },
        {
            id: 'e-7',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-7.png'
        },
        {
            id: 'e-8',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-8.png'
        },
        {
            id: 'e-9',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-9.png'
        },
        {
            id: 'e-10',
            path: '/assets/prakriti/layouts/lightbox/E-Block/e-10.png'
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
                <Row className="e-block">
                    <Col md={6}>
                        <div className={styles.wrap}>

                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/E-Block.png" useMap="#e-block" />

                            <map name="e-block">
                                <area target="" alt="" title=""  coords="1392,569,1392,396,1347,394,1348,371,1303,374,1302,363,1238,362,1238,391,1170,390,1170,463,1137,464,1138,565" shape="poly" onMouseEnter={(event) => { draw(event, 'e-1') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-1')} />
                                <area target="" alt="" title=""  coords="1137,568,1135,395,1090,392,1092,375,1044,375,1045,359,982,361,982,394,916,394,916,468,883,467,885,568" shape="poly" onMouseEnter={(event) => { draw(event, 'e-2') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-2')} />
                                <area target="" alt="" title=""  coords="880,569,883,391,840,391,837,374,791,373,792,359,730,359,728,392,662,395,662,463,630,464,629,568" shape="poly" onMouseEnter={(event) => { draw(event, 'e-3') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-3')} />
                                <area target="" alt="" title=""  coords="558,569,558,392,514,394,514,371,466,371,466,361,406,361,406,392,340,392,335,464,307,468,304,565" shape="poly" onMouseEnter={(event) => { draw(event, 'e-4') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-4')} />
                                <area target="" alt="" title=""  coords="304,571,303,392,257,391,260,374,212,373,212,357,150,358,151,391,82,395,79,460,46,460,50,567" shape="poly" onMouseEnter={(event) => { draw(event, 'e-5') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-5')} />
                                <area target="" alt="" title=""  coords="210,627,116,625,119,800,170,800,166,817,216,820,211,831,273,831,271,804,344,805,341,732,376,732,378,625" shape="poly" onMouseEnter={(event) => { draw(event, 'e-6') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-6')} />
                                <area target="" alt="" title=""  coords="376,628,376,800,420,801,421,820,466,820,465,834,527,837,526,804,594,801,599,730,629,732,630,628" shape="poly" onMouseEnter={(event) => { draw(event, 'e-7') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-7')} />
                                <area target="" alt="" title=""  coords="698,627,698,802,743,802,743,820,788,818,786,834,849,837,852,802,916,802,915,728,951,730,951,628" shape="poly" onMouseEnter={(event) => { draw(event, 'e-8') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-8')} />
                                <area target="" alt="" title=""  coords="955,628,951,802,996,802,994,817,1041,818,1040,837,1109,838,1109,804,1171,802,1173,733,1206,732,1203,627" shape="poly" onMouseEnter={(event) => { draw(event, 'e-9') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-9')} />
                                <area target="" alt="" title=""  coords="1207,627,1203,802,1251,802,1253,822,1296,817,1296,834,1359,834,1360,800,1431,800,1427,732,1463,730,1463,632" shape="poly" onMouseEnter={(event) => { draw(event, 'e-10') }} onMouseLeave={unDraw} onClick={() => openLightbox('e-10')} />
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


                                <tr id="e-6" className={`${highlightedArea === 'e-6' ? 'highlightedRow' : ''}`}>
                                    <td>101-401</td>
                                    <td>600 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>


                                <tr id="e-7" className={`${highlightedArea === 'e-7' ? 'highlightedRow' : ''}`}>
                                    <td>102-402</td>
                                    <td>600 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-8" className={`${highlightedArea === 'e-8' ? 'highlightedRow' : ''}`}>
                                    <td>103-403</td>
                                    <td>600 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-9" className={`${highlightedArea === 'e-9' ? 'highlightedRow' : ''}`}>
                                    <td>104-404</td>
                                    <td>597 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-10" className={`${highlightedArea === 'e-10' ? 'highlightedRow' : ''}`}>
                                    <td>105-405</td>
                                    <td>601 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-1" className={`${highlightedArea === 'e-1' ? 'highlightedRow' : ''}`}>
                                    <td>106-406</td>
                                    <td>598 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-2" className={`${highlightedArea === 'e-2' ? 'highlightedRow' : ''}`}>
                                    <td>107-407</td>
                                    <td>597 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-3" className={`${highlightedArea === 'e-3' ? 'highlightedRow' : ''}`}>
                                    <td>108-408</td>
                                    <td>598 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-4" className={`${highlightedArea === 'e-4' ? 'highlightedRow' : ''}`}>
                                    <td>109-409</td>
                                    <td>598 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="e-5" className={`${highlightedArea === 'e-5' ? 'highlightedRow' : ''}`}>
                                    <td>110-410</td>
                                    <td>600 sq.ft</td>
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
