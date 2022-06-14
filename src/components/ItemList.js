import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemList = () => {

    const [items, setItems] = React.useState([]);   
    const [onAdd, setOnAdd] = React.useState(() => {});

  return (
    <>
    <div className="container">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Plan x3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ItemCount stock={items} initial={0} onAdd={onAdd} />
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Plan x2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ItemCount stock={items} initial={0} onAdd={onAdd} />
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Plan On</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ItemCount stock={items} initial={0} onAdd={onAdd} />
  </Card.Body>
</Card>
</div>
    </>
  )
}

export default ItemList