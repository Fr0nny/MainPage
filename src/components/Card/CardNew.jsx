import React from 'react';
/*import Card from 'components/Card/Card.jsx';*/
/*import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';*/
// import CardFooter from 'components/Card/CardFooter.jsx';
import image1 from "assets/img/new/Triggered_Gruppe2.jpg";
// import withStyles from "material-ui/styles/withStyles";


// import cardStyle from "assets/jss/material-kit-react/components/cardStyle.jsx";

const CardNew = () => {
  return (
    <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img alt='' src={image1} style={{height: 100}} />
      <div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</h2>
        <p>test</p>
      </div>
    </div>
  );


}
export default CardNew;
