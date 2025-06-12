import { useState, useEffect } from 'react';
import { Note } from '@/types/note';
import { getNotes, saveNotes } from '@/utils/localStorage';

export default function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load notes from localStorage on component mount
  useEffect(() => {
    setNotes(getNotes());
    setIsLoading(false);
  }, []);

  // Add a new note
  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Update an existing note
  const updateNote = (id: string, title: string, content: string) => {
    const updatedNotes = notes.map(note => 
      note.id === id 
        ? { ...note, title, content, updatedAt: Date.now() } 
        : note
    );
    
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Delete a note
  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return {
    notes,
    isLoading,
    addNote,
    updateNote,
    deleteNote,
  };
}