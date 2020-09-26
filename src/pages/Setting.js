import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Pencil, Trash, Plus } from 'react-bootstrap-icons';
import {Cluster} from './Cluster';
import styled from 'styled-components';
const Styles = styled.table`
.center {
    text-align: center;
}
`
export const  Setting = () => {
    const [clusters, setClusters] = useState([])

    useEffect(()=>{
        axios.get(`/clusters`)
        .then(results => setClusters(results.data))
        .catch(error=>console.log(error))
     }, [])

     const deleteCluster = (cluster) => {
         setClusters(clusters.filter(item=>item.name !== cluster.name))   
     }

     const editCluster = (cluster) => Cluster(cluster)

     const populateRow = (cluster) => (
        <tr>
        <td>{cluster.name}</td>
        <td>{cluster.url}</td>
        <td>        
                <ButtonGroup class="sm">
                <Button onClick={editCluster(cluster)}><Pencil/></Button>
                <Button onClick={e=>deleteCluster(cluster)}><Trash/></Button>
                </ButtonGroup>
            </td>
        </tr>

     )

    return (
    <Styles>    
     <Card>
    <Button><Plus/>Add New Cluster</Button>
    <Table center striped bordered hover size="sm">
    <thead>
        <tr>
        <th>Name</th>
        <th>Url</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {clusters.map(cluster=>populateRow(cluster))}        
    </tbody>
    </Table>
    </Card>   
    </Styles>)

}