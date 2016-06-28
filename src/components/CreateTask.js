import _ from 'lodash';
import { Component, PropTypes } from 'react';


/**
Form to create new tasks
**/

class CreateTask extends Component {
  render() {
    const { addTask, id } = this.props

    let inputName
    let inputDescription
    return (
      <div >
        <h3 style={headerStyle}>Create New Tasks</h3>
        <hr style={hrStyle}/>
        <form style={formStyle} onSubmit={e => {
          e.preventDefault()
          if (!inputName.value.trim()) {
            return
          }
          addTask(id, inputName.value, inputDescription.value)
          inputName.value = ''
          inputDescription.value = ''
        }}>
          <span style={spanStyle}>Task Name</span>
          <input className='form-control' placeholder='Name of new task' ref={node => { inputName = node }} />
          <br/>
          <span style={spanStyle}>Task Description</span>
          <input className='form-control' placeholder='Description of new task' ref={node => { inputDescription = node }} />
          <br/>
          <button style={{width: '125px'}}className='btn btn-primary' type='submit'>Create</button>
        </form>
      </div>
    );
  }
}

const headerStyle = {
  fontWeight: 300,
  fontSize: '3em',
  margin: '2% 0 0 1%',
  position: 'relative'
}

const spanStyle = {
  color: '#808080',
  fontWeight: 300,
  fontSize: '1.2em'
}

const formStyle = {
  width: '40%',
  marginLeft: '1.2%'
}

const hrStyle = {
  marginTop: 0,
}

CreateTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default CreateTask;
