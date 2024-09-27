'use client'
import React,{useEffect} from 'react'
import $ from "jquery";
import mapoid from "@/scripts/mapoid"
import Col from 'react-bootstrap/Col'

const test = () => {

    useEffect(() => {

        if (typeof window !== "undefined" && window.jQuery) {
            mapoid.initialize();
            $("map[name=a-block]").mapoid({
                click: function(j,e){
                  var id = e.attr("data-id");
                   $('#lightbox1 .lb-image').attr('src', '/img/floor/a/' + id + '.png');
                   $('#lightbox1 .lb-image1').attr('href', '/img/floor/a/' + id + '.png');
            
                  $( "#lightbox1 .lb-image1" ).trigger( "click" );
            
            
                },
            
                mouseover: function(j,e){
                    var id = e.attr("data-id");
                    $('.table-bg tr').css({'background': '#fff' , 'color': 'unset'});
                    $('#' + id).css({'background': '#4CAF50' , 'color': '#fff'});
                }
            });
            
        }
        

    }, []);
    
  return (
    <>
      <Col md={6}>
        <div>

            <img id="the" src="/assets/prakriti/layouts/A-blockNew.jpg" useMap="#a-block" />

            <map name="a-block">
                <area target="" alt="" title="" href="" coords="126,37,148,39,151,10,219,9,221,20,261,19,263,12,279,15,279,65,273,97,255,99,254,68,225,68,227,101,124,102" shape="poly" />
            </map>


        </div>
    </Col>
    </>
  )
}

export default test