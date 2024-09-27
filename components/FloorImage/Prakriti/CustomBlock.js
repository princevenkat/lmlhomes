import React, { useState, useRef, useEffect } from "react";
import styles from "@/components/FloorImage/styles.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import { mapData } from '@/data/mapData'


export default function CustomBlock() {

    // const canvasRef = useRef(null);
    // const [highlightedArea, setHighlightedArea] = useState(null);
    // const [data, setData] = useState([])

    // useEffect(() => {

    //     setData(mapData)

    //     console.log(data, 'setData');

    // }, [mapData])

    return (
        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        {/* <img id="mapImg" className={styles.mapImg} src="/assets/prakriti/layouts/F-Block.png" useMap="#f-block" /> */}

                        {/* <map name="f-block">
                            {areasData.map((areaData) => (
                                <Area
                                    key={areaData.id}
                                    areaData={areaData}
                                    highlightedArea={highlightedArea}
                                    onAreaEnter={handleAreaEnter}
                                    onAreaLeave={handleAreaLeave}
                                />
                            ))}
                        </map> */}

                        {/* <canvas ref={canvasRef} className={styles.canvas}></canvas> */}
                    </Col>
                    <Col md={6}>
                        {/* <AreaTable areasData={areasData} highlightedArea={highlightedArea} /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
