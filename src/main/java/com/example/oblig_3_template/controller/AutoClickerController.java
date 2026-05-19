package com.example.oblig_3_template.controller;

import com.example.oblig_3_template.model.AutoClicker;
import com.example.oblig_3_template.repository.AutoClickerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/autoclickers")
public class AutoClickerController {
    // Sub rosa
    private final AutoClickerRepository autoClickerRepository;

    public AutoClickerController(AutoClickerRepository autoClickerRepository) {
        this.autoClickerRepository = autoClickerRepository;
    }

    @GetMapping
    public ResponseEntity<List<AutoClicker>> getAll() {
        return ResponseEntity.ok(autoClickerRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutoClicker> getById(@PathVariable("id") Integer id) {
        return autoClickerRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<AutoClicker> create(@RequestBody AutoClicker autoClicker) {
        return ResponseEntity.status(201).body(autoClickerRepository.save(autoClicker));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable("id") Integer id, @RequestBody AutoClicker autoClicker) {
        if (autoClickerRepository.update(id, autoClicker)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        if (autoClickerRepository.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
