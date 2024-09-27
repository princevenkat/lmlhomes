'use client'
import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/components/FloorImage/styles.module.css'
import Lightbox from 'react-18-image-lightbox';


const ImageMapComponent = () => {
    const canvasRef = useRef(null);
    const [highlightedArea, setHighlightedArea] = useState(null);


    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        {
            id: 'a-1',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-1.png'
        },
        {
            id: 'a-2',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-2.png'
        },
        {
            id: 'a-3',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-3.png'
        },
        {
            id: 'a-4',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-4.png'
        },
        {
            id: 'a-5',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-5.png'
        },
        {
            id: 'a-6',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-6.png'
        },
        {
            id: 'a-7',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-7.png'
        },
        {
            id: 'a-8',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-8.png'
        },
        {
            id: 'a-9',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-9.png'
        },
        {
            id: 'a-10',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-10.png'
        },
        {
            id: 'a-11',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-11.png'
        },
        {
            id: 'a-12',
            path: '/assets/prakriti/layouts/lightbox/A-Block/a-12.png'
        },

    ];



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

    const openLightbox = (id) => {
        const image = images.find(image => image.id === id);
        if (image) {
            setPhotoIndex(images.indexOf(image)); // Set the index of the image
            setIsOpen(true);
        }

        console.log(id, 'idd');
    }

    return (
        <section>
            <Container>


                <Row className="a-block">
                    <Col md={6}>
                        <div className={styles.wrap}>

                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/A-Block.png" useMap="#a-block" />

                            <map name="a-block">

                                <area target="" alt="" title="" coords="310,111,314,57,290,56,290,70,255,70,255,59,234,57,228,71,190,72,189,42,137,42,130,74,132,148,103,155,102,225,206,225,131,225,101,225,100,285,132,285,133,306,232,305,310,304,310,304,314,305,314,308" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-1')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-1')}
                                />

                                <area target="" alt="" title="" coords="1096,259,1096,224,1072,221,1071,162,1089,162,1086,67,1085,55,1051,55,1014,55,1015,69,969,68,965,36,897,36,899,68,863,66,861,52,762,55,764,147,718,147,719,252,840,253,843,188,842,181,898,179,894,255,1000,257,1001,223,1035,225,1034,254" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-2')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-2')}
                                />

                                <area target="" alt="" title="" coords="656,258,655,177,668,178,666,52,627,53,627,67,584,68,534,68,533,37,435,37,369,39,368,114,315,112,313,255" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-3')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-3')}
                                />

                                <area target="" alt="" title="" coords="132,308,130,349,114,348,114,385,103,386,104,459,136,463,136,498,120,502,118,537,136,537,133,583,323,584,323,525,322,459,322,336,324,305" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-4')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-4')}
                                />

                                <area target="" alt="" title="" coords="218,589,217,635,149,636,118,638,117,710,217,711,116,712,111,817,126,816,123,860,224,862,224,833,323,835,322,585" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-5')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-5')}
                                />

                                <area target="" alt="" title="" coords="127,865,126,904,110,903,110,940,95,939,97,1014,128,1013,126,1086,109,1087,114,1162,200,1164,200,1165,200,1164,198,1132,208,1132,209,1100,242,1101,244,1133,306,1134,306,1055,342,1053,340,992,377,991,376,887,306,886,306,850" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-6')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-6')}
                                />
                                <area target="" alt="" title="" coords="1107,805,1087,804,1087,746,1100,742,1102,635,1064,635,1015,637,1013,650,974,648,974,618,903,617,905,649,808,650,810,632,766,633,765,729,719,730,719,834,844,837,849,761,905,757,899,837,1012,837,1015,806,1049,806,1048,837,1108,840" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-7')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-7')}
                                />

                                <area target="" alt="" title="" coords="370,698,420,694,422,618,589,618,589,648,683,652,682,634,722,635,717,798,718,833,639,835,640,798,603,804,603,837,369,836" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-8')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-8')}
                                />

                                <area target="" alt="" title="" coords="1047,886,1105,887,1106,950,1093,956,1092,1021,1104,1022,1100,1112,1096,1147,1034,1146,1034,1115,997,1117,998,1106,931,1105,930,1119,902,1118,904,1101,860,1101,860,1120,834,1119,832,993,789,992,790,885" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-9')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-9')}
                                />

                                <area target="" alt="" title="" coords="730,990,731,1029,676,1028,676,1106,507,1105,507,1076,415,1073,415,1086,379,1088,378,888,729,884" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-10')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-10')}
                                />

                                <area target="" alt="" title="" coords="367,302,367,507,403,506,405,492,498,494,497,523,665,523,664,447,722,448,718,306" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-11')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-11')}
                                />

                                <area target="" alt="" title="" coords="723,301,721,449,800,449,799,506,838,507,840,492,898,490,897,525,976,524,976,493,1052,494,1051,508,1083,509,1079,382,1097,381,1098,304" shape="poly"
                                    onMouseEnter={(event) => draw(event, 'a-12')}
                                    onMouseLeave={unDraw}
                                    onClick={() => openLightbox('a-12')}
                                />
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

                                <tr className={styles.tableHeading}>
                                    <th>FLAT Nos.</th>
                                    <th>SALES AREA</th>
                                    <th>TYPE</th>
                                </tr>


                                <tr id="a-1" className={`${highlightedArea === 'a-1' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 101</td>
                                    <td>899 sq.ft.</td>
                                    <td>2 BHK</td>
                                </tr>


                                <tr id="a-2" className={`${highlightedArea === 'a-2' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 102</td>
                                    <td>836 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="a-3" className={`${highlightedArea === 'a-3' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 201</td>
                                    <td>899 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="a-4" className={`${highlightedArea === 'a-4' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 202</td>
                                    <td>1019 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="a-5" className={`${highlightedArea === 'a-5' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 301</td>
                                    <td>1024 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="a-6" className={`${highlightedArea === 'a-6' ? 'highlightedRow' : ''}`}>
                                    <td>3 - 302</td>
                                    <td>1115 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                            </tbody>
                        </table>
                    </Col>
                </Row>




            </Container>
        </section>



    );
};

export default ImageMapComponent;

