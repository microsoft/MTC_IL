import { useState, useEffect } from "react";
import { Container, Table, Row, Col, Spinner, Carousel, Button, Modal, Form } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import api from "./Api";
import Auth from "./Auth";


const App = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [workers, setWorkers] = useState([]);

  
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [loadingTeachers, setLoadingTeachers] = useState(false);
  const [loadingWorkers, setLoadingWorkers] = useState(false);



  useEffect(() => {
    setLoadingStudents(true);
    setLoadingTeachers(true);
    setLoadingWorkers(true);
    
    api({
      method: "get",
      url: "/students/getStudents",
      headers: { Authorization: Auth.getToken() }
    }).then((response) => {
      setStudents(response.data);
      setLoadingStudents(false);
    });

    // Loading Teachers from app service 
    api({
      method: "get",
      url: '/teachers/api/teachers',
    }).then((response) => {
      console.log(response.data);
      setTeachers(response.data);
      setLoadingTeachers(false);
    })

    api({
      method: "GET",
      url: '/workerstest/workers',
    }).then((response) => {
      console.log(response.data);    
      setWorkers(response.data);
      setLoadingWorkers(false);
    })

  }, []);

  // Load Students 
  const loadStudents = () => {
    setLoadingStudents(true);
    api({
      method: "get",
      url: "/students/getStudents",
    }).then((response) => {
      setStudents(response.data);
      setLoadingStudents(false);
    });
  }

  // Load Workers
  const loadWorkers = () => {
    setLoadingWorkers(true);
    api({
      method: "GET",
      url: '/workerstest/workers',
    }).then((response) => {
      console.log(response.data);    
      setWorkers(response.data);
      setLoadingWorkers(false);
    })
  }

  const loadTeachers = () => {
    setLoadingTeachers(true);

    api({
      method: "get",
      url: '/teachers/api/teachers',
    }).then((response) => {
      console.log(response.data);
      setTeachers(response.data);
      setLoadingTeachers(false);
    })
  }

  return (
    <div className="App">
      <Header/>
      {/* <HeaderImg title="Microsoft Technology Center Israel" subTitle="Multi Environment Application" /> */}


      <Container>
        <Row className="box">
          <h2>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "images/kubernetes-services.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Loads from Azure Kubernetes Cluster{" "}
            <img
              src={process.env.PUBLIC_URL + "images/kubernetes-services.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </h2>
          <Col>
            <h3 className="kubernetes_title">Workers</h3>
            {loadingWorkers ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
              <Table striped bordered hover variant="dark" className="box">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker, index) => {
                    return (
                      <tr key={index}>
                        <td>{worker.Id}</td>
                        <td>{worker.Email}</td>
                        <td>{worker.Name}</td>
                        <td>{worker.Age}</td>
                        <td>{worker.Gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={loadWorkers}>Load Workers</Button>
              </>
            )}
          </Col>
        </Row>
        <Row className="box">
          <h2>
            <img
              src={process.env.PUBLIC_URL + "images/function-apps.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Loads from Azure Functions{" "}
            <img
              src={process.env.PUBLIC_URL + "images/function-apps.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </h2>
          <Col>
          <h3 className="functions_title">Students</h3>
            {loadingStudents ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
              <Table striped bordered hover variant="dark" className="box">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Class Category</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => {
                    return (
                      <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.Email}</td>
                        <td>{student.Name}</td>
                        <td>{student.Age}</td>
                        <td>{student.Gender}</td>
                        <td>{student.Class}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={loadStudents}>Load Students</Button>
              </>
            )}
            
          </Col>
        </Row>
        <Row className="box">
          <h2>
            <img
              src={process.env.PUBLIC_URL + "images/app-services.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Loads from Azure App Container{" "}
            <img
              src={process.env.PUBLIC_URL + "images/app-services.svg"}
              alt="kubernetes"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </h2>
          <Col>
          <h3 className="apps_title">Teachers</h3>

            {loadingTeachers ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
              <Table striped bordered hover variant="dark" className="box">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => {
                    return (
                      <tr key={index}>
                        <td>{teacher.id}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.age}</td>
                        <td>{teacher.gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={loadTeachers}>Load Teachers</Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
