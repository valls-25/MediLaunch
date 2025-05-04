"use client"

import React from "react"
import { Plus, ArrowUp, Trash, Copy } from 'lucide-react'

interface FloatingToolbarProps {
  position: { top: number; left: number }
  onAdd: () => void
  onMoveUp: () => void
  onDelete: () => void
  onDuplicate: () => void
}

const FloatingToolbar: React.FC<FloatingToolbarProps> = ({ 
  position, 
  onAdd, 
  onMoveUp, 
  onDelete, 
  onDuplicate 
}) => {
  return (
    <div
      className="absolute bg-blue-500 text-white p-2 rounded flex gap-2 z-50"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <button onClick={onAdd} className="p-1 hover:bg-blue-600 rounded">
        <Plus size={18} />
      </button>
      <button onClick={onMoveUp} className="p-1 hover:bg-blue-600 rounded">
        <ArrowUp size={18} />
      </button>
      <button onClick={onDelete} className="p-1 hover:bg-blue-600 rounded">
        <Trash size={18} />
      </button>
      <button onClick={onDuplicate} className="p-1 hover:bg-blue-600 rounded">
        <Copy size={18} />
      </button>
    </div>
  )
}

export default FloatingToolbar