"use client"

import React, { useState } from 'react';
import EditorComponent from './EditorComponent';

interface HeadingProps {
  id: string;
  content: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  onUpdate: (id: string, content: string, level: number) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onMoveUp: (id: string) => void;
}

const Heading: React.FC<HeadingProps> = ({
  id,
  content,
  level = 2,
  onUpdate,
  onDelete,
  onDuplicate,
  onMoveUp
}) => {
  const [editableContent, setEditableContent] = useState(content);
  const [headingLevel, setHeadingLevel] = useState(level);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setEditableContent(newContent);
    onUpdate(id, newContent, headingLevel);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
    setHeadingLevel(newLevel);
    onUpdate(id, editableContent, newLevel);
  };

  const renderHeading = () => {
    const props = {
      className: "font-bold outline-none w-full",
      value: editableContent,
      onChange: handleContentChange
    };

    switch (headingLevel) {
      case 1: return <input {...props} className={`${props.className} text-3xl`} />;
      case 2: return <input {...props} className={`${props.className} text-2xl`} />;
      case 3: return <input {...props} className={`${props.className} text-xl`} />;
      case 4: return <input {...props} className={`${props.className} text-lg`} />;
      case 5: return <input {...props} className={`${props.className} text-base`} />;
      case 6: return <input {...props} className={`${props.className} text-sm`} />;
      default: return <input {...props} className={`${props.className} text-2xl`} />;
    }
  };

  return (
    <EditorComponent
      id={id}
      type="Heading"
      onDelete={() => onDelete(id)}
      onDuplicate={() => onDuplicate(id)}
      onMoveUp={() => onMoveUp(id)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm">Level:</label>
          <select 
            value={headingLevel} 
            onChange={handleLevelChange}
            className="border rounded p-1 text-sm"
          >
            <option value={1}>H1</option>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
            <option value={4}>H4</option>
            <option value={5}>H5</option>
            <option value={6}>H6</option>
          </select>
        </div>
        {renderHeading()}
      </div>
    </EditorComponent>
  );
};

export default Heading;