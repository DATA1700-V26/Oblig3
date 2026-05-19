package com.example.oblig_3_template.repository;

import com.example.oblig_3_template.model.Upgrade;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Optional;

@Repository
public class UpgradeRepository {
    private final JdbcTemplate jdbcTemplate;

    private final RowMapper<Upgrade> upgradeRowMapper = (rs, rowNum) -> {
        Upgrade upgrade = new Upgrade();
        upgrade.setId(rs.getInt("id"));
        upgrade.setName(rs.getString("name"));
        upgrade.setCost(rs.getInt("cost"));
        upgrade.setTitle(rs.getString("title"));
        upgrade.setCpsMulti(rs.getDouble("cps_multi"));
        upgrade.setClickMulti(rs.getDouble("click_multi"));
        return upgrade;
    };

    public UpgradeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Upgrade> findAll() {
        String sql = "SELECT id, name, cost, title, cps_multi, click_multi FROM upgrade ORDER BY id";
        return jdbcTemplate.query(sql, upgradeRowMapper);
    }

    public Optional<Upgrade> findById(Integer id) {
        String sql = "SELECT id, name, cost, title, cps_multi, click_multi FROM upgrade WHERE id = ?";
        return jdbcTemplate.query(sql, upgradeRowMapper, id).stream().findFirst();
    }

    public Upgrade save(Upgrade upgrade) {
        String sql = "INSERT INTO upgrade (name, cost, title, cps_multi, click_multi) VALUES (?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"id"});
            ps.setString(1, upgrade.getName());
            ps.setInt(2, upgrade.getCost());
            ps.setString(3, upgrade.getTitle());
            ps.setDouble(4, upgrade.getCpsMulti());
            ps.setDouble(5, upgrade.getClickMulti());
            return ps;
        }, keyHolder);

        Number key = keyHolder.getKey();
        if (key != null) {
            upgrade.setId(key.intValue());
        }
        return upgrade;
    }

    public boolean update(Integer id, Upgrade upgrade) {
        String sql = "UPDATE upgrade SET name = ?, cost = ?, title = ?, cps_multi = ?, click_multi = ? WHERE id = ?";
        int rows = jdbcTemplate.update(
                sql,
                upgrade.getName(),
                upgrade.getCost(),
                upgrade.getTitle(),
                upgrade.getCpsMulti(),
                upgrade.getClickMulti(),
                id
        );
        return rows > 0;
    }

    public boolean deleteById(Integer id) {
        String sql = "DELETE FROM upgrade WHERE id = ?";
        return jdbcTemplate.update(sql, id) > 0;
    }
}