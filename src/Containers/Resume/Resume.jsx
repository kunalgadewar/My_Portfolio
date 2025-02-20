import React from 'react';
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {data} from './Utils'
import './Resume.css'
import { MdWork } from 'react-icons/md';


const Resume = () => {
  return (
    <section className="resume">
      <Header headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />

      <div className="timeline">
        
        <div className="experience">
          <h3 className='header-text'>Experience</h3>

          <VerticalTimeline layout={"1-column"} lineColor="var(--yellow-theme-main-color)">
          {
            data?.experience?.map((item, i) => {  // Use optional chaining to prevent errors if data or experience is undefined
              return (
                <VerticalTimelineElement key={i} className="vertical-element"
                contentStyle={{
                  background:"none",
                  color:'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                  boxShadow:'none'
                }}
                date=""
                icon={<MdWork/>}
                iconStyle={{
                  background:'#181818',
                  color:'var(--yellow-theme-main-color)'
                }}
                >

                  <div className="element-wrapper">
                    <h3 className="element-title">
                      {item.title}
                    </h3>

                    <h4 className="element-subtitle">
                      {item.subtitle}
                    </h4>

                  </div>
                  <p className='inner-text'>{item.description}</p>
                </VerticalTimelineElement>
              );
            })
          }
        </VerticalTimeline>

        </div>


        <div className="education">
          <h3 className='header-text'>Education</h3>

          <VerticalTimeline layout={"1-column"} lineColor="var(--yellow-theme-main-color)">
          {
            data?.education?.map((item, i) => {  // Use optional chaining to prevent errors if data or experience is undefined
              return (
                <VerticalTimelineElement key={i} className="vertical-element"
                contentStyle={{
                  background:"none",
                  color:'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                  boxShadow:'none'
                }}
                date=""
                icon={<MdWork/>}
                iconStyle={{
                  background:'#181818',
                  color:'var(--yellow-theme-main-color)'
                }}
                >
                  <div className="element-wrapper">
                    <h3 className="element-title">
                      {item.title}
                    </h3>

                    <h4 className="element-subtitle">
                      {item.subtitle}
                    </h4>

                    
                  </div>
                  <p className='inner-text'>{item.description}</p>
                </VerticalTimelineElement>
              );
            })
          }
        </VerticalTimeline>

        </div>


      </div>
    </section>
  );
};

export default Resume;
