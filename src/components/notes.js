import React, { useState, useEffect } from 'react';
import './notes.css';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Load notes from localStorage on component mount
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    // Save notes to localStorage whenever notes state changes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleSave = () => {
        if (title && content) {
            const newNote = { title, content };
            setNotes([...notes, newNote]);
            setTitle('');
            setContent('');
        }
    };

    const handleDelete = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className='notes-container'>
            <h1>Notes App</h1>
            <div className='form'>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='Title' 
                    className='input-title' 
                />
                <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder='Content' 
                    className='input-content' 
                />
                <button onClick={handleSave} className='save-button'>Save</button>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                    <div key={index} className='note'>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <button onClick={() => handleDelete(index)} className='delete-button'>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;
