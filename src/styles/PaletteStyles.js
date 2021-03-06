import sizes from './sizes';

export default {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '88%'
	},
	goBack: {
		display: 'inline-block',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4.5px',
		opacity: 1,
		backgroundColor: 'black',
		'& a': {
			color: 'white',
			width: '100px',
			height: '30px',
			display: 'inline-block',
			position: 'absolute',
			left: '50%',
			top: '50%',
			marginTop: '-15px',
			marginLeft: '-50px',
			textAlign: 'center',
			outline: 'none',
			background: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			lineHeight: '30px',
			textTransform: 'uppercase',
			border: 'none',
			textDecoration: 'none'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '33.3333%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '10%'
		}
	}
};
