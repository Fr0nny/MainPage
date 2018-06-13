import React from "react";



function Form({ ...props }) {

	return(
		<form action="https://formspree.io/fronnythedev@gmail.com"
		      method="POST">

		    <input type="text" name="Fullname"  />
		    <p>
		    <input type="email" name="_replyto" /></p>
		    <input type="submit" value="Send" />
		</form>
	);
}



export default Form;