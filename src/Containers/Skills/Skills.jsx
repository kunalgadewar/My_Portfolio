import React from 'react';
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillsData } from './Utils';
import { Line } from 'rc-progress';
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills">
      <Header headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />

      <div className="skills-content">
        {
          Array.isArray(skillsData) && skillsData.map((item, i) => {  // Ensure skillsData is an array
            return (
              <div key={i} className="inner-content">
                <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: "translateX(-200px)"
                  }}
                  end={{
                    transform: "translateX(0px)"
                  }}
                >
                  <h3 className='category'>{item.label}</h3>

                  <div className='progres-content'>
                    {
                      Array.isArray(item.Data) && item.Data.map((skillsItem, j) => {  // Ensure item.Data is an array
                        return (
                          <AnimateKeyframes
                            play
                            duration={1}
                            delay={0.3}
                            key={`${i}-${j}`}  // Use unique key for each item
                            iterationCount="1"
                            keyframes={["opacity: 1", "opacity: 0"]}  // Define keyframes explicitly
                          >
                            <div className="progress" key={`${i}-${j}`}>
                              <p>{skillsItem.skillName}</p>
                              <Line className='percent'
                                percent={skillsItem.percentage}
                                strokeWidth='2'
                                strokeColor="var(--yellow-theme-main-color)"
                                trailWidth= "2"
                                strokeLinecap='round'
                              />
                            </div>
                          </AnimateKeyframes>
                        );
                      })
                    }
                  </div>
                </Animate>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Skills;
