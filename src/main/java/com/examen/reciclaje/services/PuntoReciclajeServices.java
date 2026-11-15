package com.examen.reciclaje.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.repository.PuntoReciclajeRepository;

@Service
public class PuntoReciclajeServices {

	private final PuntoReciclajeRepository repository;

	public PuntoReciclajeServices(PuntoReciclajeRepository repository) {
		super();
		this.repository = repository;
	}
	
	//Consultar todos los puntos de Reciclaje
	public List<PuntoReciclaje> listarPuntos(){
		return repository.findAll();
	}
	
	//Guardar un punto de Reciclaje
	public PuntoReciclaje guardarPunto(PuntoReciclaje punto) {
		//Validar nombre
		if(punto.getNombre()==null || punto.getNombre().isBlank()) {
			throw new IllegalArgumentException(
					"El nombre del punto es obligatorio"
					);
		}
		//Validar el sector
		if(punto.getSector()==null || punto.getSector().isBlank()) {
			throw new IllegalArgumentException(
					"El nombre del sector es obligatorio"
					);
		}
		//Validar el Material
		if(punto.getMaterial()==null || punto.getMaterial().isBlank()) {
			throw new IllegalArgumentException(
					"El nombre del Material es obligatorio"
					);
		}
		//Validar Capacidad
		if(punto.getCapacidad() == null || punto.getCapacidad() <= 0) {
			throw new IllegalArgumentException(
					"La Capacidad disponible debe ser mayor a cero"
					);
		}
		return repository.save(punto);
	}
	
	
	
	
	
}
