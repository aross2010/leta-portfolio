'use client'
import React from 'react'
import { aboutData } from '../lib/data'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1200px] mx-auto scroll-mt-24"
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
        className="uppercase tracking-wider font-medium md:text-3xl text-2xl pb-2"
      >
        About Me
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
        {/* <h1 className="uppercase tracking-wider font-medium text-lg mb-6">
          Trust is the process
        </h1> */}
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
            My name is Leta Pham and I am currently a BFA Interior Design
            Student at SJSU. Currently, I am a 2nd year Interior Design student
            at San Jose State University. I am involved in the Interior Design
            Student Organization (IDSO) as the Freshman Liaison. I am also a
            part of the American Society of Interior Designers (ASID) as a
            student member.
            <br />
            <br /> I am a designer who loves to create spaces that are{' '}
            <span className="font-semibold">functional</span>,{' '}
            <span className="font-semibold">beautiful</span>, and focus heavily
            on the <span className="font-semibold">user-experience</span>. When
            designing my projects, I love to experiment with different styles,
            materials, and color. I choose colors and material with fine
            attention to detail and intention, and try to imagine myself as a
            user in the space. In my studies at SJSU, I practice designing
            commercial spaces, and would love to pursue a career in retail or
            hospitality design.
            <br />
            <br /> When I am not designing, I love watching movies, reading,
            traveling, collecting, working out, and hanging out with my
            boyfriends dog. Wherever I am, whether it is at the movie theater or
            seeing a new part of the world, I am always studying my environment
            and seeing how my experiences can help impact my designs.
            <br />
            <br /> I am currently looking for an internship for Summer 2024.
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
            <h4 className="font-medium uppercase tracking-wider text-lg mb-2">
              Skills
            </h4>

            <ul className="flex flex-wrap gap-3 mb-8">
              {aboutData.skills.map((skill, index) => {
                return (
                  <motion.li
                    key={index}
                    className="py-1 md:text-2xl text-xl rounded-lg"
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
            <h4 className="font-medium uppercase tracking-wider text-lg my-4">
              Education
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
            <h4 className="font-medium uppercase tracking-wider text-lg mb-4">
              Experience
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
            <h4 className="font-medium uppercase tracking-wider text-lg mb-4">
              Associations
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
              className="font-medium uppercase tracking-wider text-lg mb-2"
            >
              Skills
            </motion.h4>

            <ul className="flex flex-wrap gap-3 mb-8">
              {aboutData.skills.map((skill, index) => {
                console.log('INDEX: ', index, 1 + 0.1 * index)
                return (
                  <motion.li
                    key={index}
                    className="py-1 md:text-2xl text-xl rounded-lg"
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
