import React from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { DataUser } from '../DataDummy/DataUser';


function CardDetail() {
    const params = useParams()
    return (
        <div className='container'>
            <h5>Detail Page</h5>
            {/* <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={dataUser.image} />
                <img src={dataUser.image} class="rounded-pill mx-auto d-block" alt="user"></img>
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
            </Card> */}
        </div>
    )
}

export default CardDetail