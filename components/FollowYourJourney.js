import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiLogoInstagram } from 'react-icons/bi'
import axios from 'axios'


export default function FollowYourJourney() {


    const [instaData, setInstaData] = useState([])
    const [fetchError, setFetchError] = useState(null);
    const [bigImg, setBigImg] = useState('');

    const fetchInstagram = async () => {
        try {

            // const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
            // const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${access_token}`)
            // const newdata = response.data.data.slice(0, 6)
            // const imgData = response.data.data.slice(7)
            // const bigImg = imgData[7].media_url
            // setInstaData(newdata)
            // setBigImg(bigImg)
            // console.log(response, 'successfully instagram api connected');


            const test_token = process.env.NEXT_TEST_KEY
            console.log(test_token, 'server_test_token');

            const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${access_token}`)

            const allImg = response.data.data
            const filter = allImg.filter((item) => item.media_type !== 'VIDEO')
            // console.log(filter, 'filter');

            const filterFirstSeven = filter.slice(0, 7)
            const filterFirstSix = filter.slice(0, 6)
            // console.log(filterFirstSeven, 'filterFirstSeven',);

            const bigImg = filterFirstSeven[6].media_url
            // console.log(bigImg, 'bigImg');

            setInstaData(filterFirstSix)
            setBigImg(bigImg)

            console.log('successfully instagram api connected')

        }
        catch (error) {
            console.error(error, 'Error Connecting to Instgram API');
            setFetchError('Error fetching Instagram data');

            const test_token2 = process.env.NEXT_TEST_KEY
            console.log(test_token2, 'server_test_token');

        }
    }

    useEffect(() => {
        fetchInstagram()
        console.log(instaData, 'instagram');
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const imgElement = document.createElement('img')
            imgElement.src = '/assets/icons/arrowRightGreen.png'
            imgElement.alt = 'Arrow Right'
            const divElement = document.querySelector('.swiper-button-next')
            divElement.appendChild(imgElement)

            const imgElement2 = document.createElement('img')
            imgElement2.src = '/assets/icons/arrowLeftGreen.png'
            imgElement2.alt = 'Arrow Left'
            const divElement2 = document.querySelector('.swiper-button-prev')
            divElement2.appendChild(imgElement2)
        }
    }, [])



    // ACCESS_TOKEN = 'IGQWRPRjk3MFBnTkN2cXcyajNnNDgyTzlXYnFqX3BXMEdwV1RDSFRQaVF4RkY2ek9Ta2Q3all4YXVPaUVVTFdUUktNdVp1b0g0cVZADUlNFaGRRTnRfVmhoSjV0ZAEU5eHYteDlBeFZAaUXRUazh5UkdGUmdybGdKd2MZD'


    return (
        <section className='FollowYourJourney'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className='d-flex'>
                            <h3>Follow our journey</h3>
                            <a target="_blank" rel='noopener noreferrer' href='https://www.facebook.com/search/top?q=lml%20homes'><BsFacebook /></a>
                            <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/company/ps-group-lml-homes-llp/about/'><FaLinkedinIn /></a>
                            <a target="_blank" rel='noopener noreferrer' href='https://www.instagram.com/lml_homes/'><BiLogoInstagram /></a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}
