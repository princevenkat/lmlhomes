'use client'
import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/components/FloorImage/styles.module.css'
import Lightbox from 'react-18-image-lightbox';


export default function C_Block() {

    const canvasRef = useRef(null);

    const [highlightedArea, setHighlightedArea] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        {
            id: 'c-1',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-1.png'
        },
        {
            id: 'c-2',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-2.png'
        },
        {
            id: 'c-3',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-3.png'
        },
        {
            id: 'c-4',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-4.png'
        },
        {
            id: 'c-5',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-5.png'
        },
        {
            id: 'c-6',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-6.png'
        },
        {
            id: 'c-7',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-7.png'
        },
        {
            id: 'c-8',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-8.png'
        },
        {
            id: 'c-9',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-9.png'
        },
        {
            id: 'c-10',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-10.png'
        },
        {
            id: 'c-11',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-11.png'
        },
        {
            id: 'c-12',
            path: '/assets/prakriti/layouts/lightbox/C-Block/c-12.png'
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
                <Row className="c-block">
                    <Col md={6}>
                        <div className={styles.wrap}>
                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/C-Block.png" useMap="#c-block" />

                            <map name="c-block">
                                <area data-id="c-1" target="" alt="" title=""  coords="1019,275,1069,272,1070,241,1067,179,1075,174,1074,66,1071,68,1069,35,990,37,991,67,980,68,980,80,941,81,940,50,869,50,870,82,785,81,788,164,745,165,742,276" shape="poly" onMouseEnter={(event) => { draw(event, 'c-1') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-1')} />
                                <area data-id="c-2" target="" alt="" title=""  coords="683,276,683,153,637,153,638,56,594,54,591,68,530,70,530,49,394,52,391,83,392,129,338,127,336,274,539,274" shape="poly" onMouseEnter={(event) => { draw(event, 'c-2') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-2')} />
                                <area data-id="c-3" target="" alt="" title=""  coords="337,271,338,58,314,57,313,75,270,75,270,57,244,57,244,72,208,74,209,42,151,42,151,72,143,75,148,159,116,161,116,232,148,233,146,246,115,246,113,304,148,305,147,314,250,318,252,307,336,310" shape="poly" onMouseEnter={(event) => { draw(event, 'c-3') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-3')} />
                                <area data-id="c-4" target="" alt="" title=""  coords="337,348,297,348,298,328,252,331,251,318,149,315,148,398,116,398,117,476,167,476,165,511,117,512,115,579,144,582,146,597,332,597" shape="poly" onMouseEnter={(event) => { draw(event, 'c-4') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-4')} />
                                <area data-id="c-5" target="" alt="" title=""  coords="337,830,338,850,297,850,296,862,254,862,251,877,147,880,146,832,132,833,131,791,115,792,117,727,146,731,147,648,182,647,186,597,333,600" shape="poly" onMouseEnter={(event) => { draw(event, 'c-5') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-5')} />
                                <area data-id="c-6" target="" alt="" title=""  coords="337,888,252,888,254,875,148,875,146,920,132,921,134,953,116,959,116,1028,150,1033,148,1082,133,1081,133,1120,138,1122,137,1153,196,1153,198,1119,268,1122,268,1151,333,1154" shape="poly" onMouseEnter={(event) => { draw(event, 'c-6') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-6')} />
                                <area data-id="c-7" target="" alt="" title=""  coords="368,936,339,935,336,1118,416,1118,415,1152,555,1153,553,1084,620,1083,619,938" shape="poly" onMouseEnter={(event) => { draw(event, 'c-7') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-7')} />
                                <area data-id="c-8" target="" alt="" title=""  coords="680,934,680,1120,764,1120,761,1154,830,1155,822,1122,874,1122,875,1151,927,1154,924,1122,933,1122,929,1005,965,1005,965,938" shape="poly" onMouseEnter={(event) => { draw(event, 'c-8') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-8')} />
                                <area data-id="c-9" target="" alt="" title=""  coords="382,740,440,740,440,669,581,668,583,706,661,705,665,844,598,844,598,886,382,885" shape="poly" onMouseEnter={(event) => { draw(event, 'c-9') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-9')} />
                                <area data-id="c-10" target="" alt="" title=""  coords="663,705,712,705,712,672,800,672,801,654,867,656,868,669,909,673,912,654,993,655,994,769,969,769,972,848,981,849,980,887,927,886,703,883,700,844,663,844" shape="poly" onMouseEnter={(event) => { draw(event, 'c-10') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-10')} />
                                <area data-id="c-11" target="" alt="" title=""  coords="413,323,379,323,380,510,460,510,454,544,599,542,597,436,670,434,677,325" shape="poly" onMouseEnter={(event) => { draw(event, 'c-11') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-11')} />
                                <area data-id="c-12" target="" alt="" title=""  coords="674,440,675,541,739,542,740,512,846,510,845,540,919,542,915,508,946,509,946,540,1001,542,1000,409,1026,411,1025,400,1051,405,1050,324,728,323,732,392,677,392" shape="poly" onMouseEnter={(event) => { draw(event, 'c-12') }} onMouseLeave={unDraw} onClick={() => openLightbox('c-12')} />
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


                                <tr id="c-8" className={`${highlightedArea === 'c-8' ? 'highlightedRow' : ''}`}>
                                    <td>101 - 401</td>
                                    <td>1038 sq.ft.</td>
                                    <td>2 BHK</td>
                                </tr>


                                <tr id="c-7" className={`${highlightedArea === 'c-7' ? 'highlightedRow' : ''}`}>
                                    <td>102 - 402</td>
                                    <td>1044 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="c-6" className={`${highlightedArea === 'c-6' ? 'highlightedRow' : ''}`}>
                                    <td>103 - 403</td>
                                    <td>1042 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-5" className={`${highlightedArea === 'c-5' ? 'highlightedRow' : ''}`}>
                                    <td>104 - 404</td>
                                    <td>1024 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-9" className={`${highlightedArea === 'c-9' ? 'highlightedRow' : ''}`}>
                                    <td>105 - 405</td>
                                    <td>1027 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-10" className={`${highlightedArea === 'c-10' ? 'highlightedRow' : ''}`}>
                                    <td>106 - 406</td>
                                    <td>1272 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="c-12" className={`${highlightedArea === 'c-12' ? 'highlightedRow' : ''}`}>
                                    <td>107 - 407</td>
                                    <td>1316 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-11" className={`${highlightedArea === 'c-11' ? 'highlightedRow' : ''}`}>
                                    <td>108 - 408</td>
                                    <td>1008 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-4" className={`${highlightedArea === 'c-4' ? 'highlightedRow' : ''}`}>
                                    <td>109 - 409</td>
                                    <td>1023 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-3" className={`${highlightedArea === 'c-3' ? 'highlightedRow' : ''}`}>
                                    <td>110 - 410</td>
                                    <td>1041 sq.ft</td>
                                    <td>2 BHK</td>
                                </tr>

                                <tr id="c-2" className={`${highlightedArea === 'c-2' ? 'highlightedRow' : ''}`}>
                                    <td>111 - 411</td>
                                    <td>1310 sq.ft</td>
                                    <td>3 BHK</td>
                                </tr>

                                <tr id="c-1" className={`${highlightedArea === 'c-1' ? 'highlightedRow' : ''}`}>
                                    <td>112 - 412</td>
                                    <td>1306 sq.ft</td>
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
