import React, { useState } from "react";
import { Collapse } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./styles.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import { useHistory } from "react";
import { useRouter } from "next/navigation";

const { Panel } = Collapse;

const CoverageCollapse = ({
  coverageAccordian,
  selectedPlace,
  setSelectedPlace,
}) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.accordian_box}>
        {coverageAccordian?.map((data, i) => (
          <>
            <div key={i}>
              <Collapse
                ghost
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  !isActive ? (
                    <IoIosArrowDown size={25} />
                  ) : (
                    <IoIosArrowUp size={25} />
                  )
                }
                className="p-2"
              >
                <Panel
                  arrow="right"
                  onClick={() => setSelectedPlace(data)}
                  header={
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          height: "18px",
                          width: "18px",
                          borderRadius: "50%",
                          background: data.color,
                          border:
                            selectedPlace?.name == data?.name
                              ? "2px solid black"
                              : "",
                        }}
                      />
                      {/* <img src={accordian_tick} alt="tick" /> */}
                      <div className="d-flex align-items-baseline">
                        <h4 className={styles.accordian_header + " mb-0"}>
                          {data?.name},
                        </h4>
                        <span className={styles.accordian_spanBox}>
                          {data?.location}
                        </span>
                      </div>
                      {/* {!!data?.link && <Link to={data?.link}>Edit</Link>} */}
                    </div>
                  }
                  key="1"
                >
                  <div className="ps-4 ps-md-0">
                    <p className={styles.accordian_content}>{data?.floor}</p>
                    <p className={styles.accordian_content}>
                      {data?.description}
                    </p>
                    <div className="col-7  my-3">
                      {/* <Link href={{ pathname: "/project-details", query: data }}> */}
                      <button
                        className={styles.explore_button}
                        onClick={() => {
                          router.push(`/${data?.slug}`);
                        }}
                      >
                        Explore project <HiOutlineArrowNarrowRight size={30} />
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Panel>
              </Collapse>
              {coverageAccordian.length - 1 !== i && <hr className="m-0" />}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CoverageCollapse;
