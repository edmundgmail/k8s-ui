import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {select} from 'd3';
import Button from 'react-bootstrap/Button'

export const  Pods = () => {
    const [nss, setNss] = useState([])
    const [ns, setNs] = useState('default')
    const [pods, setPods] = useState([])
    const [data, setData] = useState([25, 30, 45, 60, 90, 200]);
    const svgRef = useRef()
      
    const showPod = (pod) => {
       
    }
    
    useEffect(() => {
        const svg = select(svgRef.current);
        svg
          .selectAll("circle")
          .data(data)
          .join("circle")
          .attr("r", value => value)
          .attr("cx", value => value * 2)
          .attr("cy", value => value * 2)
          .attr("stroke", "red");
      }, [])

    useEffect(()=> {
        axios.get(`/nss`)
        .then(result => {console.log(result); setNss(result.data)})
        .catch(error=>console.log(error))
    }, [])

    useEffect(()=>{
        if(ns) {
            axios.get(`/pods/${ns}`)
            .then(result=>{console.log(result); setPods(result.data)})
            .catch(error=>console.log(error))
        }
    }, [ns])

    return (
        <div>
        <Select placeholder="Select Namespace" options={nss} value={nss.filter(option=>option.value===ns)} onChange={e=>setNs(e.value)}/>
        <svg ref={svgRef}></svg>
        <Button></Button>
        {false && pods.map(pod=>showPod(pod))}
        </div>
    )
}
