
import { Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/store';
import { useCartActions } from '../api/index';

const ListCart = () => {
    const { handleRemove } = useCartActions(); // use the custom hook
    const cartItems = useSelector((state: RootState) => state.cart.items);
    if (cartItems.length === 0) {
        return <p >There are 0 products in the cart.</p>;
    }

    return (
        <Row>
            {cartItems.map((item) => (
                <Col key={item.iproductIdd} md={4} className="">
                    <Card style={{ width: '800px', marginBottom: '24px' }}>
                        <Card.Body style={{ display: 'flex', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
                            <div style={{ display: 'flex' }}>
                                <Card.Img src={item.imageUrl} style={{ height: '100px', width: '200px' }}></Card.Img>
                                <div>
                                    <Card.Title style={{ marginLeft: '2rem', fontSize: '20px', fontWeight: 'bold' }}>{item.productName}</Card.Title>
                                    <Card.Text style={{ marginLeft: '2rem' }}>{item.description}</Card.Text>
                                     
                                    <div style={{ marginLeft: '2rem' }}>
                                      
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#de1717', cursor: 'pointer' }} onClick={() => handleRemove(item.iproductIdd)} />
                                <Card.Text>{item.price}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
//hehe

export default ListCart;