import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewUpdate from '../pages/NewUpdate';

describe('Testes da tela NewUpdate', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <NewUpdate/>
      </BrowserRouter>
    );
  });

  it('Existe card em NewUpdate?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Home em NewUpdate?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

});