package com.example.kaisen.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class Repository {

    @Autowired
    private JdbcTemplate jdbc;
}
