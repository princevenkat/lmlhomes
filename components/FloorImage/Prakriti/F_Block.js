'use client'
import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/components/FloorImage/styles.module.css'
import Lightbox from 'react-18-image-lightbox';


export default function F_Block() {

    const canvasRef = useRef(null);

    const [highlightedArea, setHighlightedArea] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const F_Block_Src = '/assets/prakriti/layouts/F-Block.png'


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
                <Row className="F-block">
                    <Col md={6}>
                        <div className={styles.wrap}>
                            <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/F-Block.png" useMap="#f-block" />

                            <map name="f-block">
                                <area target="" alt="" title="" coords="252,468,252,588,190,589,189,695,229,693,228,701,458,699,459,738,529,739,530,697,589,698,590,735,757,736,759,716,851,718,852,698,926,700,927,690,1003,692,1002,527,928,529,929,539,851,537,852,476,751,475,753,507,647,509,647,499,632,504,634,465,439,463,437,496,421,496,422,488,321,490,317,469" shape="poly" onMouseEnter={(event) => { draw(event, 'f-1') }} onMouseLeave={unDraw} onClick={() => setIsOpen(true)} />
                            </map>

                            <canvas ref={canvasRef} className='canvas'></canvas>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={F_Block_Src}
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

                                <tr id="f-1" className={`${highlightedArea === 'f-1' ? 'highlightedRow' : ''}`}>
                                    <td>102 - 104</td>
                                    <td>2019 sq.ft</td>
                                    <td>4 BHK</td>
                                </tr>

                            </tbody>
                        </table>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
