package com.examen.reciclaje.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.services.PuntoReciclajeServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/puntos")
public class PuntoReciclajeController {

	private final PuntoReciclajeServices service;

	public PuntoReciclajeController(PuntoReciclajeServices service) {
		super();
		this.service = service;
	}

	// Consultar todos los puntos de Reciclaje
	@GetMapping("/listar")
	public List<PuntoReciclaje> listar() {
		return service.listarPuntos();
	}

	// Recibe un JSON y regista un punto de reciclaje
	@PostMapping("/registrar")
	public PuntoReciclaje guardar(@RequestBody PuntoReciclaje punto) {
		return service.guardarPunto(punto);
	}
}
