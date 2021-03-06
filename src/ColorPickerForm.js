import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: 'teal',
			newColorName: ''
		};
	}
	componentDidMount() {
		// custom rule will have name 'isPasswordMatch'
		ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
			return this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
		});
		ValidatorForm.addValidationRule('isColorUnique', (value) => {
			return this.props.colors.every(({ color }) => color !== this.state.currentColor);
		});
	}
	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	updateCurrentColor = (color) => {
		this.setState({ currentColor: color.hex });
	};
	handleSubmit = () => {
		const newColor = { color: this.state.currentColor, name: this.state.newColorName };
		this.props.addColor(newColor);
		this.setState({ newColorName: '' });
	};
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
					<TextValidator
						value={newColorName}
						className={classes.colorNameInput}
						name="newColorName"
						variant="filled"
						margin="normal"
						placeholder="Color Name"
						onChange={this.handleChange}
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[ 'Enter a color name', 'Color name must be unique', 'Color already used!' ]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
						disabled={paletteIsFull}
						className={classes.addColor}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
