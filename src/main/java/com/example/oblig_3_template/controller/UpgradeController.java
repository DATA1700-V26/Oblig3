package com.example.oblig_3_template.controller;

import com.example.oblig_3_template.model.Upgrade;
import com.example.oblig_3_template.repository.UpgradeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/upgrades")
public class UpgradeController {
    // Sub rosa
    private final UpgradeRepository upgradeRepository;

    public UpgradeController(UpgradeRepository upgradeRepository) {
        this.upgradeRepository = upgradeRepository;
    }

    @GetMapping
    public ResponseEntity<List<Upgrade>> getAll() {
        return ResponseEntity.ok(upgradeRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Upgrade> getById(@PathVariable("id") Integer id) {
        return upgradeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Upgrade> create(@RequestBody Upgrade upgrade) {
        return ResponseEntity.status(201).body(upgradeRepository.save(upgrade));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable("id") Integer id, @RequestBody Upgrade upgrade) {
        if (upgradeRepository.update(id, upgrade)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        if (upgradeRepository.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
