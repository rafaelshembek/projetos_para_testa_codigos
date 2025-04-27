'use client'
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const initialItems = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '4', content: 'Item 3' },
    { id: '5', content: 'Item 4' },
    { id: '6', content: 'Item 5' },
    { id: '7', content: 'Item 6' },
];

const ExemploDragDrop = () => {
    const [items, setItems] = useState(initialItems);

    // Função que é chamada quando o usuário termina de arrastar e soltar um item.
    const handleOnDragEnd = (result) => {
        // Se o item não foi solto em um destino válido, apenas retorna (não faz nada).
        if (!result.destination) return;

        // Copia a lista atual dos itens.
        const newItems = Array.from(items);
        // Remove o item que foi arrastado da lista.
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, initialItems, movedItem);

        setItems(newItems);
    }
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold mb-4">Arraste os itens</h1>
            {/* FUNÇÃO OnDragEnd */}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {/* CAMPO ONDE PODEMOS SOLTAR OS ITEMS */}
                <Droppable droppableId="list">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 p-4 rounded w-72 space-y-4">
                            {items.map((item, index) => (
                                // COMPONENTE QUE PODE SER ARRASTADO
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        // Cada item da lista é um Draggable
                                        <li className="bg-zinc-600 p-4 rounded shadow cursor-grab active:cursor-grabbing text-lg" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {item.content}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    )

}

export default ExemploDragDrop;