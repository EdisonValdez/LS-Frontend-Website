import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("renders navigation items", () => {
    render(<Header />);

    expect(screen.getByText("Lugares")).toBeInTheDocument();
    expect(screen.getByText("Eventos")).toBeInTheDocument();
    expect(screen.getByText("Itinerarios")).toBeInTheDocument();
    expect(screen.getByText("Explorar")).toBeInTheDocument();
    expect(screen.getByText("Mis viajes")).toBeInTheDocument();
  });

  test("renders user action items", () => {
    render(<Header />);

    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contacto")).toBeInTheDocument();
    expect(screen.getByAltText("Perfil de usuario")).toBeInTheDocument();
  });
});
