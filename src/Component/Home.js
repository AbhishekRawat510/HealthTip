import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';


import { Container,Col,Row,Card,CardBody, CardHeader,Form, Button } from 'reactstrap';



function Home({nameData, ageData}) {
    const navigate =useNavigate();


    const [selected, setSelected] = useState("");

const handleChange =(e) =>{
    console.log(e.target.value)
   setSelected(e.target.value)
   navigate(`/${e.target.value}`)

    
}



  return (
    <div>

    <Container className='mt-5'>
    <Row className ='justify-content-center'>

    </Row>
    </Container>
      
       <Col sm={{size:6, offset:3}}>
       <Card color='dark' outline>
        <CardHeader>
            <h1>Hi {nameData}, {ageData} </h1>
        <h1>Navigate through a wealth of senior health information and targeted advice with our user-friendly filter.</h1>
        </CardHeader>
        <CardBody>
            
            <h3>Are you looking for exercise tips, dietary advice, or both for your health?"</h3>
            <select value={selected} onChange={(e) =>handleChange(e)}>
                <option value= "">Select an option</option>
  <option value="cardivasular" >Cardiovascular Health</option>
  <option value="jointHealth" >Joint Health and Arthritis</option>
  <option value="balanceAndFall">Balance and Fall Prevention</option>
  <option value="bone" >Osteoporosis and Bone Health</option>
  <option value="chronic" >Chronic Conditions Management</option>
</select>




        </CardBody>

       </Card>
       </Col>



    </div>
  )
}




export default Home;