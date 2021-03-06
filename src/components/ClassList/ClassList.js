import React, { Component } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: []
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3 style={{color: 'black'}}>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1 style={{ borderBottom: '5px solid gray', }}>{this.props.match.params.class} <button style={{borderRadius: '40px', backgroundColor: 'gray', border: "none", color: 'white', width: 80, height: 30, marginBottom: '20', marginLeft: '30'}}><Link to="/">Back</Link></button></h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}