const dragItems = document.querySelectorAll('.dragitem')
const myContainer = document.querySelectorAll('.container')

dragItems.forEach(dragitem =>{
    dragitem.addEventListener('dragstart', ()=>{
    dragitem.classList.add('dragging')
    })
    dragitem.addEventListener('dragend', ()=>{
        dragitem.classList.remove('dragging')
    })
})

myContainer.forEach(container =>{
    container.addEventListener('dragover', e =>{
        e.preventDefault()
        const afterItemAppears = getDragBetweenElement(container, e.clientY)
        const dragitem = document.querySelector('.dragging')
        container.appendChild(dragitem)
    })
})

function getDragBetweenElement(container, y){
  const draggableItems =  [...container.querySelectorAll('.draggable:not(.dragging )')]

   return draggableItems.reduce((closest, child) => {

    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2

    if(offset < 0 && offset > closest.offset)
    {
        return {offset:offset, element:child}
    }
    else
    {
        return closest
    }
  }, 

  {offset: Number.POSITIVE_INFINITY}).element
}
