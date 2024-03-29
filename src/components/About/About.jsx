import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './Skill/Skill';
import { aboutAnim, iconsAnim, nameAnim } from './About.anim';
import { SKILLS } from './About.constants';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function About({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='about' variants={aboutAnim} initial='init' animate='anim' exit='end'>
			<motion.h3 variants={iconsAnim}>Hello there, My name is</motion.h3>
			{/* SERHII DOLYNNYI */}
			<motion.h2 variants={nameAnim}>Serhii Dolynnyi</motion.h2>
			<motion.h5 variants={iconsAnim}>- Senior Fullstack Developer -</motion.h5>

			<motion.div className='skillsContainer' variants={iconsAnim}>
				{SKILLS.map((skill) => (
					<Skill key={skill.name} name={skill.name} icon={skill.icon} />
				))}
			</motion.div>
		</motion.section>
	);
}
