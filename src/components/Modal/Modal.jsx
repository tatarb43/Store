import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'
import './Modal.css'

export default function Modal({ children, open, onClose }) {
  const dialog = useRef(null)
  const modalRoot = document.getElementById('modal')

  useEffect(() => {
    if (!dialog.current) return

    if (open) {
      dialog.current.showModal()
      dialog.current.classList.add('open')
    } else {
      dialog.current.classList.remove('open')
      // ждём анимацию закрытия
      setTimeout(() => {
        dialog.current?.close()
      }, 200)
    }
  }, [open])

  if (!modalRoot) return null

  return createPortal(
    <dialog ref={dialog} className="modal" onClick={onClose}>  
      <div className="modal-content" onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </dialog>,
    modalRoot
  )
}
