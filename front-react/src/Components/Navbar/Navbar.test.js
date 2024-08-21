import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';
import { ShopContext } from '../../Context/ShopContext';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock de ShopContext
const mockGetTotalCartItems = jest.fn(() => 3); // Simulamos que hay 3 items en el carrito

const MockShopContextProvider = ({ children }) => (
  <ShopContext.Provider value={{ getTotalCartItems: mockGetTotalCartItems }}>
    {children}
  </ShopContext.Provider>
);

describe('Navbar', () => {
  beforeEach(() => {
    // Limpiamos el localStorage antes de cada prueba
    localStorage.clear();
  });


  test('debe mostrar las opciones del menú y la selección', () => {
    render(
      <Router>
        <MockShopContextProvider>
          <Navbar />
        </MockShopContextProvider>
      </Router>
    );

    const menuItems = ['Tienda', 'Juguetes', 'Lubricantes', 'Lenceria'];

    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

        // Se simula la selección del menú
        fireEvent.click(screen.getByText('Juguetes'));

        expect(screen.getByText('Juguetes')).toBeInTheDocument();
        expect(screen.getByText('Juguetes').nextSibling.tagName).toBe('HR');
      });

    });

