import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dayoffs from '../pages/Dayoffs';

describe('Testes da tela Dayoffs', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Dayoffs/>
      </BrowserRouter>
    );
  });

  it('Existe card em Dayoffs?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Dayoffs?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Dayoffs?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

});