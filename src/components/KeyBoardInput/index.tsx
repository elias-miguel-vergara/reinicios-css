"use client"
import { useState, useEffect } from "react"

export default function KeyBoardInput() {
    const [ superPressed, setSuperPressed ] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Meta' || event.key === 'Super') {
            setSuperPressed(true);
          }
        };
    
        const handleKeyUp = (event: KeyboardEvent) => {
          if (event.key === 'Meta' || event.key === 'Super') {
            setSuperPressed(false);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleKeyUp);
        };
      }, []);

      return (
        <div>
          <p>Presiona la tecla Ctrl + Home (Cmd, Win, Super) para activar/desactivar:</p>
          <p>{superPressed ? 'Tecla presionado' : 'Tecla no presionado'}</p>
        </div>
      );
}