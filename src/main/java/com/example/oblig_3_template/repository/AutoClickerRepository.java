package com.example.oblig_3_template.repository;

import com.example.oblig_3_template.model.AutoClicker;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Optional;

@Repository
public class AutoClickerRepository {
    private final JdbcTemplate jdbcTemplate;

    private final RowMapper<AutoClicker> autoClickerRowMapper = (rs, rowNum) -> {
        AutoClicker autoClicker = new AutoClicker();
        autoClicker.setId(rs.getInt("id"));
        autoClicker.setName(rs.getString("name"));
        autoClicker.setCost(rs.getInt("cost"));
        autoClicker.setCps(rs.getInt("cps"));
        autoClicker.setTitle(rs.getString("title"));
        return autoClicker;
    };

    public AutoClickerRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<AutoClicker> findAll() {
        String sql = "SELECT id, name, cost, cps, title FROM auto_clicker ORDER BY id";
        return jdbcTemplate.query(sql, autoClickerRowMapper);
    }

    public Optional<AutoClicker> findById(Integer id) {
        String sql = "SELECT id, name, cost, cps, title FROM auto_clicker WHERE id = ?";
        return jdbcTemplate.query(sql, autoClickerRowMapper, id).stream().findFirst();
    }

    public AutoClicker save(AutoClicker autoClicker) {
        String sql = "INSERT INTO auto_clicker (name, cost, cps, title) VALUES (?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"id"});
            ps.setString(1, autoClicker.getName());
            ps.setInt(2, autoClicker.getCost());
            ps.setInt(3, autoClicker.getCps());
            ps.setString(4, autoClicker.getTitle());
            return ps;
        }, keyHolder);

        Number key = keyHolder.getKey();
        if (key != null) {
            autoClicker.setId(key.intValue());
        }
        return autoClicker;
    }

    public boolean update(Integer id, AutoClicker autoClicker) {
        String sql = "UPDATE auto_clicker SET name = ?, cost = ?, cps = ?, title = ? WHERE id = ?";
        int rows = jdbcTemplate.update(
                sql,
                autoClicker.getName(),
                autoClicker.getCost(),
                autoClicker.getCps(),
                autoClicker.getTitle(),
                id
        );
        return rows > 0;
    }

    public boolean deleteById(Integer id) {
        String sql = "DELETE FROM auto_clicker WHERE id = ?";
        return jdbcTemplate.update(sql, id) > 0;
    }
}
