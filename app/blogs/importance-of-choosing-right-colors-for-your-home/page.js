'use client'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'

export default function Blog() {
    return (
        <section>
            <div className='blogImgDiv chsngRytColor'></div>

            <div className='blogContent'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3 className='beba'>The importance of choosing the right colors for your home</h3>
                            <span>Dec 18,2022</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>

                            <div className='blogContentBox'>
                                <p>Gone are the days when we had the luxury to live in palatial independent homes. In today's open-plan homes, where kitchens, living rooms, and dining rooms are sometimes rolled into one ample space, it is pertinent that the right colors are used to help define interiors and further create focal points in the rooms.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>When choosing the interior paint colors for your homes, you need to create a color scheme that matches the furniture in your home. First, select three colors from an existing object in your residence: a pillow from the living room sofa or a wall painting, or any colors that convey comfort to you or have an emotional link to you. Take that particular object to the paint outlet. Then, figure out three sample strips with those colors. You instantly have almost 18 colors you can use, as each strip will have six paint colors.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>The subsequent step is to choose one of the three paint colors. While this can go to color the wall, the other two can be used around the room either in fabric or furnishings. Also, while choosing the colors for the adjacent rooms, you can take the same original three-color sample strips and pick up another color of your choice. In the end, you can choose a fourth color for the accent. If you spray a little of that color into every room of your apartment, either by way of a pillow, object or artwork, eventually, it will make a connection between the spaces.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>The next step is to firm up your mind on the finish to create an appealing visual effect. Once you have chosen the color, decide the finish you will be using. Satin or eggshell finish is the best bet for walls as it is scrubbable, while semi-gloss and high-gloss finishes are used in the trim, for accenting the curves of a molding profile or the panels of a door. Nonetheless, today, finishes are also being used to create visual effects on the entire wall. You can paint one wall in a flat or satin finish and the adjacent wall in a semi-gloss, both in the same color. When the light hits the walls, it gives out a tremendous visual effect like corduroy or velvet.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>Likewise, you can paint the walls flat and the ceiling with semi-gloss to achieve a matte and sheen contrast. With this in place, the ceiling will feel higher the more light-reflective. The bottom line is that the higher the gloss, the more sheen and attention you draw to the surface. If you use it strategically, the combination of color and gloss can highlight your interior's best assets.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>Crisp whites can make your living room look bigger and more open, while warm colors offer a sense of intimacy. Large rooms can handle more color than smaller rooms, and lighter hues can create a compact space. Darker colors give the feeling that the surfaces are closer than they are. Hunter green or rust are best suited for creating a cozy atmosphere in your foyer, study, or library.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>You can also explore using two different colors in the same room. For instance, if one room in your apartment has blue paint on the walls, you can paint a built-in bookcase or a unique shade of green, highlighting the items kept on the bookcase or inside the recessed area. White and off-white are the traditional choices for molding, windows, and doors.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>In a featureless room, you can paint an accent wall with a vivid hue, while the others can be white or neutral and add a contemporary edge. You can also paint the primary walls with a soft color like beige or celadon green and the accent wall three shades darker.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>When it comes to choosing colors, the sky is the limit but ensure that you make up your mind about the hue and pattern in each room before you start the work. Else chances are high; you'll end up making a mess.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <Testimonial />
            <Promise />
            <FollowYourJourney />
        </section>
    )
}
