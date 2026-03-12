'use client'
import React from 'react'
import { aboutData } from '../lib/data'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1200px] mx-auto scroll-mt-24 "
    >
      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="tracking-wider text-gray-700 font-bold md:text-3xl text-2xl pb-2"
      >
        about me
      </motion.h2>
      <motion.div
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="border-b-[0.5px] border-gray-400"
      />

      <div className="my-8 flex xl:flex-row flex-col items-start relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="xl:w-1/2 w-full xl:pr-10"
        >
          <p className="text-gray-700 mb-8">
            With a desire to integrate practical expertise, interpersonal
            skills, and creative expression, I found my passion in Interior
            Design. My academic journey began at West Valley College in 2020,
            where I built a foundation in design principles before transferring
            to San José State University in Spring 2023. I graduate in May 2026
            with a Bachelor of Fine Arts in Interior Design.
            <br />
            <br />
            Throughout my studies, I developed a strong interest in storytelling
            through design, exploring materiality, color, and form while
            considering user experience and community context.
            <br />
            <br />
            A year-long internship at Gensler’s San Jose office strengthened my
            skills in material palettes, conceptual diagrams, spatial planning,
            and high-quality renderings.
            <br />
            <br />
            In my free time, I love doing karaoke, going to museums, watching
            any type of movie or tv show, and traveling the world.
          </p>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="border-t-[0.5px] border-gray-300 xl:block hidden"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 xl:block hidden"
          >
            <h4 className="font-medium tracking-wider text-lg mb-4">awards</h4>
            {aboutData.awards.map((award, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 * index,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 60,
                }}
              >
                <h5 className="flex sm:flex-row flex-col gap-1 sm:gap-2">
                  <span className="font-medium">{award.title}</span>
                  <span className="text-gray-600">{award.competition}</span>
                </h5>
                <span className="text-gray-600 text-sm">{award.date}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="border-t-[0.5px] border-gray-300"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="mt-4 xl:block hidden"
          >
            <h4 className="font-medium tracking-wider text-lg mb-2">skills</h4>

            <ul className="flex flex-wrap gap-3 mb-8">
              {aboutData.skills.map((skill, index) => {
                return (
                  <motion.li
                    key={index}
                    className="py-1 md:text-2xl text-xl rounded-lg text-gray-700"
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      type: 'spring',
                      stiffness: 75,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    {skill}
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            height: '0%',
            marginTop: 'auto',
          }}
          whileInView={{
            height: '100%',
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
            delay: 0.5,
          }}
          className="border-l-[0.5px] xl:block hidden border-gray-300 absolute top-0 bottom-0 left-1/2"
        />

        <div className="flex flex-col gap-4 xl:pl-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <h4 className="font-medium tracking-wider text-lg my-4">
              education
            </h4>
            {aboutData.education.map((education, index) => {
              return (
                <div
                  key={index}
                  className="mb-4"
                >
                  <h5 className="flex sm:flex-row flex-col gap-1 sm:gap-2">
                    <span className="font-medium">{education.title}</span>
                    <span className="text-gray-600">{education.location}</span>
                  </h5>
                  <span className="text-gray-600 text-sm">
                    {education.date}
                  </span>
                </div>
              )
            })}
          </motion.div>
          <motion.div
            initial={{ width: '0%', marginLeft: 'auto' }}
            whileInView={{ width: '100%' }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            className="border-t-[0.5px] border-gray-300"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <h4 className="font-medium tracking-wider text-lg mb-4">
              experience
            </h4>
            {aboutData.experience.map((experience, index) => {
              return (
                <div
                  key={index}
                  className="mb-4"
                >
                  <h5 className="flex sm:flex-row flex-col gap-1 sm:gap-2">
                    <span className="font-medium">{experience.title}</span>
                    <span className="text-gray-600">{experience.location}</span>
                  </h5>
                  <span className="text-gray-600 text-sm">
                    {experience.date}
                  </span>
                </div>
              )
            })}
          </motion.div>
          <motion.div
            initial={{
              width: '0',
              marginLeft: 'auto',
            }}
            whileInView={{ width: '100%' }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            className="border-t-[0.5px] border-gray-300"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <h4 className="font-medium tracking-wider text-lg mb-4">
              associations
            </h4>
            {aboutData.associations.map((association, index) => {
              return (
                <div
                  key={index}
                  className="mb-4"
                >
                  <h5 className="flex sm:flex-row flex-col sm:gap-2 gap-1">
                    <span className="font-medium">{association.title}</span>
                    <span className="text-gray-600">{association.role}</span>
                  </h5>
                  <span className="text-gray-600 text-sm">
                    {association.date}
                  </span>
                </div>
              )
            })}
          </motion.div>
          <motion.div
            initial={{
              width: '0',
              marginLeft: 'auto',
            }}
            whileInView={{ width: '100%' }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            className="border-t-[0.5px] border-gray-300 xl:hidden"
          />

          <div className="mt-4 xl:hidden">
            <motion.h4
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
              }}
              className="font-medium tracking-wider text-lg mb-4"
            >
              awards
            </motion.h4>
            {aboutData.awards.map((award, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1 + 0.15 * index,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 60,
                }}
              >
                <h5 className="flex sm:flex-row flex-col gap-1 sm:gap-2">
                  <span className="font-medium">{award.title}</span>
                  <span className="text-gray-600">{award.competition}</span>
                </h5>
                <span className="text-gray-600 text-sm">{award.date}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ width: '0', marginLeft: 'auto' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="border-t-[0.5px] border-gray-300"
            />
            <motion.h4
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
              }}
              className="font-medium tracking-wider text-lg mb-2 mt-4"
            >
              skills
            </motion.h4>

            <ul className="flex flex-wrap gap-3 mb-8">
              {aboutData.skills.map((skill, index) => {
                return (
                  <motion.li
                    key={index}
                    className="py-1 md:text-2xl text-xl rounded-lg text-gray-700"
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1 + 0.1 * index,
                      type: 'spring',
                      stiffness: 75,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    {skill}
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
