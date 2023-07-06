import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PopupComment from './CommentPopup';

describe('PopupComment', () => {
  test('renders component correctly', () => {
    render(<PopupComment saveContent={() => {}} updateConsoleLog={() => {}} />);

    // Verifica que el botón "GUARDAR" esté presente
    const saveButton = screen.getByText('GUARDAR');
    expect(saveButton).toBeInTheDocument();

    // Verifica que el popup no se muestre inicialmente
    const popupContainer = screen.queryByTestId('popup-container');
    expect(popupContainer).toBeNull();
  });

  test('toggles popup on button click', () => {
    render(<PopupComment saveContent={() => {}} updateConsoleLog={() => {}} />);

    // Haz clic en el botón "GUARDAR"
    const saveButton = screen.getByText('GUARDAR');
    fireEvent.click(saveButton);

    // Verifica que el popup se muestre después de hacer clic en el botón
    const popupContainer = screen.getByTestId('popup-container');
    expect(popupContainer).toBeInTheDocument();

    // Haz clic en el botón "GUARDAR" nuevamente
    fireEvent.click(saveButton);

    // Verifica que el popup se oculte después de hacer clic en el botón nuevamente
    const closedPopupContainer = screen.queryByTestId('popup-container');
    expect(closedPopupContainer).toBeNull();
  });

  test('handles input change correctly', () => {
    render(<PopupComment saveContent={() => {}} updateConsoleLog={() => {}} />);

    // Haz clic en el botón "GUARDAR" para mostrar el popup
    const saveButton = screen.getByText('GUARDAR');
    fireEvent.click(saveButton);

    // Ingresa un valor en el input
    const inputElement = screen.getByPlaceholderText('¿Cómo te sientes con tu lectura de tarot?');
    fireEvent.change(inputElement, { target: { value: 'Ejemplo de comentario' } });

    // Verifica que el valor del input se actualice correctamente
    expect(inputElement.value).toBe('Ejemplo de comentario');
  });

  test('calls the saveContent and updateConsoleLog functions correctly', () => {
    // Crea funciones simuladas para verificar si se llaman correctamente
    const saveContentMock = jest.fn();
    const updateConsoleLogMock = jest.fn();

    render(<PopupComment saveContent={saveContentMock} updateConsoleLog={updateConsoleLogMock} />);

    // Haz clic en el botón "GUARDAR" para mostrar el popup
    const saveButton = screen.getByText('GUARDAR');
    fireEvent.click(saveButton);

    // Ingresa un valor en el input
    const inputElement = screen.getByPlaceholderText('¿Cómo te sientes con tu lectura de tarot?');
    fireEvent.change(inputElement, { target: { value: 'Ejemplo de comentario' } });

    // Haz clic en el botón "Agregar"
    const addButton = screen.getByText('Agregar');
    fireEvent.click(addButton);

    // Verifica si lasfunciones simuladas se llaman correctamente con el valor ingresado
    expect(saveContentMock).toHaveBeenCalledTimes(1);
    expect(saveContentMock).toHaveBeenCalledWith('Ejemplo de comentario');
    expect(updateConsoleLogMock).toHaveBeenCalledTimes(1);
    expect(updateConsoleLogMock).toHaveBeenCalledWith('Agregar: Ejemplo de comentario');
  });
});
