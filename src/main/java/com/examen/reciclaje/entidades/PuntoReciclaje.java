package com.examen.reciclaje.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "puntos_reciclaje")
public class PuntoReciclaje {
	
	//datos requeridos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "nombre", nullable = false, length = 50)
	private String nombre;

	@Column(name = "sector", nullable = false, length = 50)
	private String sector;

	@Column(name = "material", nullable = false, length = 100)
	private String material;

	@Column(name = "capacidad", nullable = false)
	private Integer capacidad;

	//constructor vacio 
	public PuntoReciclaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	//constructor con todos los campos
	public PuntoReciclaje(Integer id, String nombre, String sector, String material, Integer capacidad) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.sector = sector;
		this.material = material;
		this.capacidad = capacidad;
	}

	//getters and setters
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public Integer getCapacidad() {
		return capacidad;
	}

	public void setCapacidad(Integer capacidad) {
		this.capacidad = capacidad;
	}
	
}
