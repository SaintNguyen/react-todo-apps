import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
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

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader style={{"background-color": "#000"}} toggle={toggle}><h2 className="gradient-text">Create Task</h2></ModalHeader>
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
            <Button className = "button-85" role="button" onClick={handleSave}><h6 className="gradient-text">Create</h6></Button>{' '}
            <Button color="secondary" onClick={toggle}><h6>Cancel</h6></Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;