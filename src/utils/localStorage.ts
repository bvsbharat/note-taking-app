import { Note } from '@/types/note';

const STORAGE_KEY = 'notes-app-data';

export const getNotes = (): Note[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
  } catch (error) {
    console.error('Error retrieving notes from localStorage:', error);
    return [];
  }
};

export const saveNotes = (notes: Note[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes to localStorage:', error);
  }
};

export const addNote = (title: string, content: string): Note[] => {
  const notes = getNotes();
  const newNote: Note = {
    id: Date.now().toString(),
    title,
    content,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  
  const updatedNotes = [newNote, ...notes];
  saveNotes(updatedNotes);
  return updatedNotes;
};

export const updateNote = (id: string, title: string, content: string): Note[] => {
  const notes = getNotes();
  const updatedNotes = notes.map(note => 
    note.id === id 
      ? { ...note, title, content, updatedAt: Date.now() } 
      : note
  );
  
  saveNotes(updatedNotes);
  return updatedNotes;
};

export const deleteNote = (id: string): Note[] => {
  const notes = getNotes();
  const updatedNotes = notes.filter(note => note.id !== id);
  
  saveNotes(updatedNotes);
  return updatedNotes;
};