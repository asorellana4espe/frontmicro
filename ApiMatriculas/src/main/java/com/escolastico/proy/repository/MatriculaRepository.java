package com.escolastico.proy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.escolastico.proy.entities.Matricula;

@Repository
public interface MatriculaRepository extends JpaRepository<Matricula, Long>{
	List<Matricula> findByCursoId(Long cursoId);
}
