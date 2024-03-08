import reactIcon from '../../assets/images/skills/react.png';
import htmlIcon from '../../assets/images/skills/html.png';
import cssIcon from '../../assets/images/skills/css.png';
import bootstrapIcon from '../../assets/images/skills/bootstrap.png';
import vueIcon from '../../assets/images/skills/vue.png';
import angularIcon from '../../assets/images/skills/angular.png';
import dotnetIcon from '../../assets/images/skills/dotnet.png';
import sqlIcon from '../../assets/images/skills/db.png';
import jsIcon from '../../assets/images/skills/js.png';
import csharpIcon from '../../assets/images/skills/csharp.png';
// import reactNativeIcon from '../../assets/images/skills/reactNative.png';
import flutterIcon from '../../assets/images/skills/flutter.png';
import chatGPTIcon from '../../assets/images/skills/chatGPT.png';
import blockchainIcon from '../../assets/images/skills/blockchain.png';

import unityIcon from '../../assets/images/skills/unity.png';
import vuforiaIcon from '../../assets/images/skills/vuforia.png';

import psIcon from '../../assets/images/skills/ps.png';
import figmaIcon from '../../assets/images/skills/figma.png';

export const skillCat = {
	web: {
		categoryName: 'Web Dev',
		percentage: 50,
		skillList: [
			{ name: 'HTML', xp: '9 YRS', icon: htmlIcon },
			{ name: 'CSS', xp: '9 YRS', icon: cssIcon },
			{ name: 'Javascript', xp: '8 YRS', icon: jsIcon },
			{ name: 'Bootstrap', xp: '8 YRS', icon: bootstrapIcon },
			{ name: 'react js', xp: '8 YRS', icon: reactIcon },
			{ name: 'react native', xp: '6 YRS', icon: reactIcon },
			{ name: 'Vue', xp: '8 YRS', icon: vueIcon },
			{ name: 'Angular', xp: '8 YRS', icon: angularIcon },
			{ name: 'flutter', xp: '5 YRS', icon: flutterIcon },
			{ name: 'blockchain', xp: '5 YRS', icon: blockchainIcon },
			{ name: 'AI', xp: '5 YRS', icon: chatGPTIcon },
			{ name: 'C#', xp: '6 YRS', icon: csharpIcon },
			{ name: 'sql', xp: '7 YRS', icon: sqlIcon },
			{ name: '.net', xp: '6 YRS', icon: dotnetIcon },
		],
	},
	game: {
		categoryName: 'Game Dev',
		percentage: 20,
		skillList: [
			{ name: 'Unity', xp: '5 YRS', icon: unityIcon },
			{ name: 'C#', xp: '3 YRS', icon: csharpIcon },
			{ name: 'Vuforia', xp: '3 YRS', icon: vuforiaIcon },
		],
	},
	design: {
		categoryName: 'Design',
		percentage: 30,
		skillList: [
			{ name: 'Photoshop', xp: '15 YRS', icon: psIcon },
			{ name: 'Figma', xp: '1 YR', icon: figmaIcon },
		],
	},
	soft: {
		categoryName: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};
