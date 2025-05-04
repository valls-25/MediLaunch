"use client"

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // You'll need to install this package: npm install uuid @types/uuid
import Text from './Text'; // Assuming this exists
import Container from './Container'; // Assuming this exists
import Heading from './Heading';
import { saveEditorContent, loadEditorContent } from '../lib/api';

const Editor: React.FC = () => {
  const [components, setComponents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load content on initial render
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const savedContent = await loadEditorContent();
        if (savedContent) {
          setComponents(savedContent);
        }
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const addComponent = (type: string) => {
    const newComponent = {
      id: uuidv4(),
      type,
      content: type === 'Heading' ? 'New Heading' : 'New Text',
      level: type === 'Heading' ? 2 : undefined,
      children: type === 'Container' ? [] : undefined
    };

    setComponents([...components, newComponent]);
  };

  const updateComponent = (id: string, content: string, level?: number) => {
    setComponents(components.map(component => 
      component.id === id 
        ? { ...component, content, ...(level !== undefined ? { level } : {}) } 
        : component
    ));
  };

  const deleteComponent = (id: string) => {
    setComponents(components.filter(component => component.id !== id));
  };

  const duplicateComponent = (id: string) => {
    const componentToDuplicate = components.find(component => component.id === id);
    if (componentToDuplicate) {
      const duplicatedComponent = {
        ...componentToDuplicate,
        id: uuidv4()
      };
      setComponents([...components, duplicatedComponent]);
    }
  };

  const moveComponentUp = (id: string) => {
    const index = components.findIndex(component => component.id === id);
    if (index > 0) {
      const newComponents = [...components];
      const temp = newComponents[index];
      newComponents[index] = newComponents[index - 1];
      newComponents[index - 1] = temp;
      setComponents(newComponents);
    }
  };

  const handleSave = async () => {
    try {
      await saveEditorContent(components);
      alert('Content saved successfully!');
    } catch (error) {
      alert('Failed to save content');
    }
  };

  if (loading) {
    return <div>Loading editor content...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <button 
          onClick={() => addComponent('Text')}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Text
        </button>
        <button 
          onClick={() => addComponent('Heading')}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Heading
        </button>
        <button 
          onClick={() => addComponent('Container')}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Container
        </button>
        <button 
          onClick={handleSave}
          className="bg-green-500 text-white px-3 py-1 rounded ml-auto"
        >
          Save
        </button>
      </div>

      <div className="border p-4 min-h-[400px]">
        {components.map(component => {
          if (component.type === 'Text') {
            return (
              <Text
                key={component.id}
                id={component.id}
                content={component.content}
                onUpdate={updateComponent}
                onDelete={deleteComponent}
                onDuplicate={duplicateComponent}
                onMoveUp={moveComponentUp}
              />
            );
          } else if (component.type === 'Heading') {
            return (
              <Heading
                key={component.id}
                id={component.id}
                content={component.content}
                level={component.level || 2}
                onUpdate={updateComponent}
                onDelete={deleteComponent}
                onDuplicate={duplicateComponent}
                onMoveUp={moveComponentUp}
              />
            );
          } else if (component.type === 'Container') {
            return (
              <Container
                key={component.id}
                id={component.id}
                onDelete={deleteComponent}
                onDuplicate={duplicateComponent}
                onMoveUp={moveComponentUp}
              >
                {/* Container children would go here */}
              </Container>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Editor;