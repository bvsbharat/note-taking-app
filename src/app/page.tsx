'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import NoteForm from '@/components/NoteForm';
import NoteCard from '@/components/NoteCard';
import SearchBar from '@/components/SearchBar';
import EmptyState from '@/components/EmptyState';
import useNotes from '@/hooks/useNotes';
import { Note } from '@/types/note';

export default function Home() {
  const { notes, isLoading, addNote, updateNote, deleteNote } = useNotes();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter notes based on search query
  const filteredNotes = notes.filter(note => {
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Notes</h2>
        
        <NoteForm onSubmit={addNote} />
        
        <SearchBar onSearch={setSearchQuery} />
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredNotes.length > 0 ? (
          <div className="space-y-4">
            {filteredNotes.map((note: Note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onEdit={updateNote}
              />
            ))}
          </div>
        ) : (
          <EmptyState searchQuery={searchQuery} />
        )}
      </main>
    </div>
  );
}
