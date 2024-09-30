"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./projects.module.css";
import ProjectOverview from "@/components/ProjectOverview";
import WalkThroughVideo from "@/components/WalkThroughVideo";
import Amenities from "@/components/Amenities";
import Locations from "@/components/Locations";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import LayoutAndPlans from "@/components/ProjectDetails/LayoutAndPlans";
import UnitPlans from "@/components/ProjectDetails/UnitPlans";
import Gallery from "@/components/ProjectDetails/Galllery";
import ProjectTestimonial from '@/components/ProjectTestimonial'
import Specifications from '@/components/Specifications/index'
import { usePathname } from 'next/navigation'
import { overAllData } from "@/utils/constants";
import PrakritiSeo from './PrakritiSeo';
import TheleagueoneSeo from './TheleagueoneSeo';
import ArshiyaSeo from './ArshiyaSeo';
import IconicSeo from './IconicSeo';

export default function HomeSections() {

  const [activeComp, setActiveComp] = useState("");
  const [loading, setLoading] = useState(true);
  const [projectDetailPages, setProjectDetailPages] = useState(null);
  const [
    projOverviewRef,
    amenitiesRef,
    WalkThroughVideoRef,
    locationRef,
    galleryRef,
    floorRef,
    testimonailRef,
    specificationRef
  ] = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ];
  const projOverviewEntry = useIntersectionObserver(projOverviewRef, {});
  const amenitiesEntry = useIntersectionObserver(amenitiesRef, {});
  const WalkThroughVideoEntry = useIntersectionObserver(WalkThroughVideoRef, {});
  const locationEntry = useIntersectionObserver(locationRef, {});
  const galleryEntry = useIntersectionObserver(galleryRef, {});
  const floorEntry = useIntersectionObserver(floorRef, {});
  const testimonailEntry = useIntersectionObserver(testimonailRef, {});
  const specificationEntry = useIntersectionObserver(specificationRef, {});

  useEffect(() => {
    if (floorEntry?.isIntersecting) setActiveComp("floor");
    else if (galleryEntry?.isIntersecting) setActiveComp("gallery");
    else if (testimonailEntry?.isIntersecting) setActiveComp("ProjectTestimonial");
    else if (specificationEntry?.isIntersecting) setActiveComp("Specifications");
    else if (locationEntry?.isIntersecting) setActiveComp("location");
    else if (amenitiesEntry?.isIntersecting) setActiveComp("amenities");
    else if (WalkThroughVideoEntry?.isIntersecting) setActiveComp("walkThroughVideo");
    else if (projOverviewEntry?.isIntersecting) setActiveComp("overview");
    // else setActiveComp("overview");
  }, [
    locationEntry?.isIntersecting,
    WalkThroughVideoEntry?.isIntersecting,
    amenitiesEntry?.isIntersecting,
    projOverviewEntry?.isIntersecting,
    galleryEntry?.isIntersecting,
    floorEntry?.isIntersecting,
    testimonailEntry?.isIntersecting,
    specificationEntry?.isIntersecting
  ]);

  const pathname = usePathname()

  const [currPathname, setCurrentPathname] = useState('')

  useEffect(() => {
    setCurrentPathname(pathname)
  }, [currPathname])

  useEffect(() => {
    var temp = null
    for (let key in overAllData) {
      temp = overAllData[key]?.find((data) => data?.slug === pathname.replace("/", ""))
      if (temp) {
        break
      }
    }
    if (!!temp) {
      setProjectDetailPages(temp?.detail);
    }
    setLoading(false);
  }, []);

  const handleRedirection = (ref) => ref?.current?.scrollIntoView?.();

  const scrollToTop = () => window?.scrollTo(0, 0);

  return (
    <>


      {currPathname == '/prakriti' ? <PrakritiSeo /> : ''}
      {currPathname == '/league-one' ? <TheleagueoneSeo/> : ''}
      {currPathname == '/arshiya' ? <ArshiyaSeo/> : ''}
      {currPathname == '/iconia' ? <IconicSeo/> : ''}



      <div className={styles.stickyNav}>

        <div
          className={`${styles.navLinkItem} ${activeComp == 'overview' && styles.active
            }`}
          // onClick={scrollToTop}
          onClick={() => handleRedirection(projOverviewRef)}
        >
          OVERVIEW
        </div>

        {/* <div
          className={`${styles.navLinkItem} ${activeComp == "projOverview" && styles.active
            }`}
          onClick={() => handleRedirection(projOverviewRef)}
        >
          Project OVERVIEW
        </div> */}

        <div
          className={`${styles.navLinkItem} ${activeComp == "walkThroughVideo" && styles.active
            }`}
          onClick={() => handleRedirection(WalkThroughVideoRef)}
        >
          Walk through video
        </div>
        <div
          className={`${styles.navLinkItem} ${activeComp == "amenities" && styles.active
            }`}
          onClick={() => handleRedirection(amenitiesRef)}
        >
          Amenities
        </div>

        <div
          className={`${styles.navLinkItem} ${activeComp == "Specifications" && styles.active
            }`}
          onClick={() => handleRedirection(specificationRef)}
        >
          Specifications
        </div>

        <div
          className={`${styles.navLinkItem} ${activeComp == "location" && styles.active
            }`}
          onClick={() => handleRedirection(locationRef)}
        >
          Location
        </div>
        <div
          className={`${styles.navLinkItem} ${activeComp == "floor" && styles.active
            }`}
          onClick={() => handleRedirection(floorRef)}
        >
          Site Plan
        </div>
        <div
          className={`${styles.navLinkItem} ${activeComp == "gallery" && styles.active
            }`}
          onClick={() => handleRedirection(galleryRef)}
        >
          gallery
        </div>

        <div
          className={`${styles.navLinkItem} ${activeComp == "ProjectTestimonial" && styles.active
            }`}
          onClick={() => handleRedirection(testimonailRef)}
        >
          testimonial
        </div>


      </div>

      <div ref={projOverviewRef}>
        <ProjectOverview projectDetailPages={projectDetailPages} />
      </div>
      <div ref={WalkThroughVideoRef}>
        <WalkThroughVideo projectDetailPages={projectDetailPages} />
      </div>
      <div ref={amenitiesRef}>
        <Amenities projectDetailPages={projectDetailPages} />
      </div>

      <div ref={specificationRef}>
        <Specifications projectDetailPages={projectDetailPages} />
      </div>

      <div ref={locationRef}>
        {!loading && <Locations projectDetailPages={projectDetailPages} />}
      </div>
      <div ref={floorRef}>
        <LayoutAndPlans projectDetailPages={projectDetailPages} />
      </div>


      <div className={currPathname == '/prakriti' ? 'd-block' : 'd-none'}>
        <UnitPlans projectDetailPages={projectDetailPages} />
      </div>


      <div className="w-100">
        <img
          src={`/assets${projectDetailPages?.subBannerImage}`}
          className={styles.adobeOfNature}
          alt="adobe of nature"
        />
      </div>
      <div ref={galleryRef}>
        <Gallery projectDetailPages={projectDetailPages} />
      </div>

      <div ref={testimonailRef}>
        <ProjectTestimonial projectDetailPages={projectDetailPages} />
      </div>


    </>
  );
}
