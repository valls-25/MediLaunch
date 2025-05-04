"use client"

import React, { useState } from "react"
import FloatingToolbar from "../components/FloatingToolbar"

interface EditorComponentProps {
  id: string
  type: string
  children: React.ReactNode
  onAdd?: () => void
  onMoveUp?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
}

const EditorComponent: React.FC<EditorComponentProps> = ({
  id,
  type,
  children,
  onAdd,
  onMoveUp,
  onDelete,
  onDuplicate,
}) => {
  const [isSelected, setIsSelected] = useState(false)
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 })

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()

    // Calculate position for toolbar
    const rect = e.currentTarget.getBoundingClientRect()
    setToolbarPosition({
      top: rect.top - 40, // Position above the component
      left: rect.left,
    })

    setIsSelected(true)
  }

  // Close toolbar when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = () => {
      setIsSelected(false)
    }

    document.addEventListener("click", handleOutsideClick)
    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative border border-gray-300 p-2 my-2 rounded" onClick={handleClick}>
      {isSelected && (
        <FloatingToolbar
          position={toolbarPosition}
          onAdd={onAdd || (() => {})}
          onMoveUp={onMoveUp || (() => {})}
          onDelete={onDelete || (() => {})}
          onDuplicate={onDuplicate || (() => {})}
        />
      )}
      <div className="text-xs text-gray-500 mb-1">{type}</div>
      {children}
    </div>
  )
}

export default EditorComponent