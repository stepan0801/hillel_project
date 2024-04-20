/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const Button = (props) => {
	console.log(props);
	return (
		<button type={props.type} count={props.count}>{props.text}</button>
	)
}
export default Button