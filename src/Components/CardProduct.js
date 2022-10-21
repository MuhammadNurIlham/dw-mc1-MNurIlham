import Card from 'react-bootstrap/Card';
// import { MenuProducts } from '../DataDummy/MenuProducts';
import { DataUser } from '../DataDummy/DataUser';
import { useNavigate } from 'react-router-dom';

function CardProduct() {
    const navigate = useNavigate()


    const handleGoToDetail = (id) => {
        navigate(`/${id}`)
    };


    return (
        <div className='container bg-warning py-3'>
            <div className='row d-flex justify-content-between'>
                {DataUser.map((dataUser) => {
                    return (
                        <div className='col-3 py-2 bg-danger' key={dataUser.id}>
                            <Card style={{ width: '13rem' }} onClick={() => handleGoToDetail(dataUser.id)}>
                                <Card.Img variant="top" src={dataUser.image} />
                                {/* <img src={dataUser.image} class="rounded-pill mx-auto d-block" alt="user"></img> */}
                                <Card.Body>
                                    <Card.Title>
                                        <span>
                                            {dataUser.username}
                                        </span>
                                    </Card.Title>
                                    <Card.Text>
                                        <span>
                                            {dataUser.follower}
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <span>
                                        {dataUser.following}
                                    </span>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CardProduct;