import React from 'react';
import { Card, Button, CardTitle, CardText,  CardBody } from 'reactstrap';

const CardData = ({title, thumbnailUrl, id}) => {
  return (
    <div>
      <Card className="my-card" body inverse >
        <CardBody>
            {/* <img src={thumbnailUrl} alt=""/> */}
            {id}
        </CardBody>
      </Card>
      
    </div>
  );
};

export default CardData;