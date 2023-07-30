import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../restAction';


function Home() {



  //object for useSelector
   const result=useSelector(state=>state.reducer1)
    const {restList}=result


    //create an object for useDispatch hook
    const dispatch=useDispatch()


    useEffect(() => {
        // dispatch action
      dispatch(getData)
    }, [])




    return (

        <Row style={{ margin: '0px' }} >
            {
                restList.map(i => (
                    <Col className='p-5 mt-2' sm={12} md={6} lg={4} xl={3}>


                       <Link to={`viewrest/${i.id}`} style={{textDecoration:'none'}}>
                            <Card className='  mb-2 d1' style={{ width: '18rem', borderRadius: '10px',height:'350px' }}>
                                <Card.Img style={{ height:'350px' }} variant="top" src={i.photograph} />
                                <Card.Title className='mt-3 text-center text-white'><strong>{i.name}</strong></Card.Title>
                                <Card.Body>
                                    <Card.Text className='text-light'>
                                        {i.address}
                                    </Card.Text>
    
                                </Card.Body>
                            </Card>
    
                       </Link>

                    </Col>
                ))
            }

        </Row>

    )
}

export default Home