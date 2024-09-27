'use client'
import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/components/FloorImage/styles.module.css'
import Lightbox from 'react-18-image-lightbox';



export default function B_Block() {

    const canvasRef = useRef(null);

    const [highlightedArea, setHighlightedArea] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        {
            id: 'b-1',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-1.png'
        },
        {
            id: 'b-2',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-2.png'
        },
        {
            id: 'b-3',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-3.png'
        },
        {
            id: 'b-4',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-4.png'
        },
        {
            id: 'b-5',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-5.png'
        },
        {
            id: 'b-6',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-6.png'
        },
        {
            id: 'b-7',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-7.png'
        },
        {
            id: 'b-8',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-8.png'
        },
        {
            id: 'b-9',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-9.png'
        },
        {
            id: 'b-10',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-10.png'
        },
        {
            id: 'b-11',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-11.png'
        },
        {
            id: 'b-12',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-12.png'
        },
        {
            id: 'b-13',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-12.png'
        },
        {
            id: 'b-14',
            path: '/assets/prakriti/layouts/lightbox/B-Block/b-12.png'
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
                <Row className="b-block">
                    <Col md={6}>
                        <div className={styles.wrap}>
                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/B-Block.png" useMap="#b-block" />

                            <map name="b-block">
                                <area target="" alt="" title=""  coords="989,278,1081,279,1081,116,1031,116,1035,86,1023,86,1027,71,986,70,986,84,945,87,944,100,909,94,908,39,783,38,782,117,723,119,723,273,910,276,912,244,946,243,946,276" shape="poly" onMouseEnter={(event) => draw(event, 'b-1')} onMouseLeave={unDraw} onClick={() => openLightbox('b-1')}/>
                                <area target="" alt="" title=""  coords="662,276,662,154,619,155,616,55,571,53,571,73,515,73,514,52,376,51,378,127,319,129,320,273,524,279,525,241,560,241,561,278" shape="poly" onMouseEnter={(event) => draw(event, 'b-2')} onMouseLeave={unDraw} onClick={() => openLightbox('b-2')} />
                                <area target="" alt="" title=""  coords="320,277,319,56,298,54,297,72,260,72,259,54,233,54,233,71,195,70,196,38,137,41,138,71,131,73,131,157,102,153,101,230,119,230,117,272,134,272,133,318,237,321,240,297,279,298,280,319,320,317" shape="poly" onMouseEnter={(event) => draw(event, 'b-3')} onMouseLeave={unDraw} onClick={() => openLightbox('b-3')}/>
                                <area target="" alt="" title=""  coords="319,603,131,602,133,555,116,555,118,516,134,514,135,478,100,478,99,406,134,404,133,320,238,320,236,334,279,334,280,321,319,321" shape="poly" onMouseEnter={(event) => draw(event, 'b-4')} onMouseLeave={unDraw} onClick={() => openLightbox('b-4')} />
                                <area target="" alt="" title=""  coords="319,603,171,607" shape="poly" onMouseEnter={(event) => draw(event, 'b-5')} onMouseLeave={unDraw} onClick={() => openLightbox('b-5')}/>
                                <area target="" alt="" title=""  coords="323,897,237,896,237,883,133,885,133,806,100,804,99,728,133,727,133,657,170,657,171,606,319,605" shape="poly" onMouseEnter={(event) => draw(event, 'b-6')} onMouseLeave={unDraw} onClick={() => openLightbox('b-6')} />
                                <area target="" alt="" title=""  coords="320,897,238,898,235,883,135,885,132,896,99,898,98,957,130,955,132,973,102,970,100,1037,136,1039,129,1129,137,1129,134,1141,172,1140,175,1129,258,1132,258,1158,321,1160" shape="poly" onMouseEnter={(event) => draw(event, 'b-7')} onMouseLeave={unDraw} onClick={() => openLightbox('b-7')}/>
                                <area target="" alt="" title=""  coords="356,930,321,930,323,1112,402,1113,403,1145,527,1145,526,1118,535,1116,534,1077,591,1078,595,930" shape="poly" onMouseEnter={(event) => draw(event, 'b-8')} onMouseLeave={unDraw} onClick={() => openLightbox('b-8')}/>
                                <area target="" alt="" title=""  coords="626,928,596,931,596,1114,678,1114,677,1146,800,1148,801,1116,807,1115,808,1077,868,1077,867,928" shape="poly" onMouseEnter={(event) => draw(event, 'b-9')} onMouseLeave={unDraw} onClick={() => openLightbox('b-9')}/>
                                <area target="" alt="" title=""  coords="905,931,871,932,870,1117,960,1115,961,1149,1091,1150,1091,1117,1097,1116,1096,1053,1080,1053,1080,1020,1100,1017,1099,931" shape="poly" onMouseEnter={(event) => draw(event, 'b-10')} onMouseLeave={unDraw} onClick={() => openLightbox('b-10')}/>
                                <area target="" alt="" title=""  coords="367,737,425,738,427,672,489,675,487,706,506,705,503,675,570,672,570,704,616,706,616,687,658,689,662,882,366,881" shape="poly" onMouseEnter={(event) => draw(event, 'b-11')} onMouseLeave={unDraw} onClick={() => openLightbox('b-11')}/>
                                <area target="" alt="" title=""  coords="720,731,764,733,765,682,819,680,821,661,864,666,864,680,903,681,902,647,972,646,972,680,1014,680,1012,661,1101,665,1099,783,1075,784,1078,845,1102,847,1103,880,1038,880,1040,846,1002,845,1001,879,901,879,902,797,846,800,844,880,716,877" shape="poly" onMouseEnter={(event) => draw(event, 'b-12')} onMouseLeave={unDraw}  onClick={() => openLightbox('b-12')}/>
                                <area target="" alt="" title=""  coords="365,327,361,449,416,451,408,547,462,548,464,530,513,532,514,550,649,553,652,517,666,518,666,551,731,552,732,391,670,391,672,324" shape="poly" onMouseEnter={(event) => draw(event, 'b-13')} onMouseLeave={unDraw} onClick={() => openLightbox('b-13')}/>
                                <area target="" alt="" title=""  coords="734,532,774,536,773,520,878,517,877,552,972,553,968,518,991,518,989,553,1063,553,1062,520,1061,418,1082,419,1083,325,733,325" shape="poly" onMouseEnter={(event) => draw(event, 'b-14')} onMouseLeave={unDraw} onClick={() => openLightbox('b-14')}/>
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
                                <tr id="b-10" className={`${highlightedArea === 'b-10' ? 'highlightedRow' : ''}`}>
                                    <td>101 - 401</td>
                                    <td>904 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>
                                <tr id="b-9" className={`${highlightedArea === 'b-9' ? 'highlightedRow' : ''}`}>
                                    <td>102 - 402</td>
                                    <td>1016 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-8" className={`${highlightedArea === 'b-8' ? 'highlightedRow' : ''}`}>
                                    <td>103 - 403</td>
                                    <td>1013 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-7" className={`${highlightedArea === 'b-7' ? 'highlightedRow' : ''}`}>
                                    <td>104 - 404</td>
                                    <td>1046 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-6" className={`${highlightedArea === 'b-6' ? 'highlightedRow' : ''}`}>
                                    <td>105 - 405</td>
                                    <td>1014 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-11" className={`${highlightedArea === 'b-11' ? 'highlightedRow' : ''}`}>
                                    <td>106 - 406</td>
                                    <td>1004 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-12" className={`${highlightedArea === 'b-12' ? 'highlightedRow' : ''}`}>
                                    <td>107 - 407</td>
                                    <td>1438 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="b-14" className={`${highlightedArea === 'b-14' ? 'highlightedRow' : ''}`}>
                                    <td>108 - 408</td>
                                    <td>1383 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="b-13" className={`${highlightedArea === 'b-13' ? 'highlightedRow' : ''}`}>
                                    <td>109 - 409</td>
                                    <td>1362 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="b-4" className={`${highlightedArea === 'b-4' ? 'highlightedRow' : ''}`}>
                                    <td>110 - 410</td>
                                    <td>1019 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-3" className={`${highlightedArea === 'b-3' ? 'highlightedRow' : ''}`}>
                                    <td>111 - 411</td>
                                    <td>1029 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="b-2" className={`${highlightedArea === 'b-2' ? 'highlightedRow' : ''}`}>
                                    <td>112 - 412</td>
                                    <td>1282 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="b-1" className={`${highlightedArea === 'b-1' ? 'highlightedRow' : ''}`}>
                                    <td>113 - 413</td>
                                    <td>1395 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
