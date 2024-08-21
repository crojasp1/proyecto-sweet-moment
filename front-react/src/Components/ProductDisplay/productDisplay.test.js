import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDisplay from './ProductDisplay';
import { ShopContext } from '../../Context/ShopContext';

describe('ProductDisplay Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Producto de prueba',
    image: 'https://via.placeholder.com/150',
    old_price: 100,
    new_price: 80,
  };

  const mockAddToCart = jest.fn(); // Crear un mock de la función addToCart

  const renderComponent = () => {
    render(
      <ShopContext.Provider value={{ addToCart: mockAddToCart }}>
        <ProductDisplay product={mockProduct} />
      </ShopContext.Provider>
    );
  };

  test('renders product information correctly', () => {
    renderComponent();

    expect(screen.getByText('Producto de prueba')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('$80')).toBeInTheDocument();
    expect(screen.getAllByAltText('Product image').length).toBe(4); // 4 imágenes en miniatura
  });

  test('calls addToCart when the "AGREGAR A CARRITO" button is clicked', () => {
    renderComponent();

    const button = screen.getByText('AGREGAR A CARRITO');

    act(() => {
      fireEvent.click(button);
    });

    expect(mockAddToCart).toHaveBeenCalledTimes(1); // Verifica que la función fue llamada una vez
    expect(mockAddToCart).toHaveBeenCalledWith(1); // Verifica que la función fue llamada con el ID correcto
  });
});