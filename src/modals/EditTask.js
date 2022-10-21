import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader style={{"background-color": "#000"}} toggle={toggle}><h2 className="gradient-text">Update Task</h2></ModalHeader>
            <ModalBody style={{"background-color": "#000"}}>
            
                    <div className = "form-group">
                        <label className="gradient-text"><h7>Task Name</h7></label>
                        <input type="text" style={{"font-family": "Archivo Black, sans-serif", "font-size": "20px"}} className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label className="gradient-text"><h7>Description</h7></label>
                        <textarea rows = "5" style={{"font-family": "Great Vibes, cursive", "font-size": "22px"}} className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button className = "button-85" role="button" onClick={handleUpdate}><h6 className="gradient-text">Update</h6></Button>{' '}
            <Button color="secondary" onClick={toggle}><h6>Cancel</h6></Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;