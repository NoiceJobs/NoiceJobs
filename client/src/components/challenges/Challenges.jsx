import React, {Component} from 'react';
import {Container, Table} from "react-bootstrap";
import OurNavbar from "../ourNavbar/OurNavbar";
import axios from "axios";
import {Link} from "react-router-dom";
import {SiJavascript} from "react-icons/all";



class Challenges extends Component {
    state = {
        challenges : []
    }

    getData(){
        axios.get('/api/challenges/')
            .then((response) => {
                this.setState({
                    challenges: response.data
                });

            });

    }

    componentDidMount() {
        this.getData()

    }

    challengesRow = () => {
        return this.state.challenges.map((challenge, index) => {
            return <tr key={challenge._id}> <td>{index + 1}</td> <td>{challenge.title}</td> <td>{challenge.description}</td> <td><Link className={'text-warning'} to={`/challenge/${challenge._id}`}> <SiJavascript /></Link></td> </tr>

        })
    }

    render() {
        console.log(this.state.challenges)
        return (
            <div>
                <OurNavbar isNavAuths={true} profile={false} setting={false} challenge={true} job={false}/>
                <Container className={'mt-5'}>
                <Link to='/challenges/add' className={'btn btn-outline-success text-center mb-3'}>+ Add Challenge</Link>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Challenge</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.challengesRow()}

                    {/*<tr key={value._id}>
                        <td>{index}</td>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value._id}</td>
                    </tr>*/}
                    </tbody>
                </Table>
                </Container>
            </div>
        );
    }
}

export default Challenges;
