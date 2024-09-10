package com.example.bookstore.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    [ADD PRIVATE STRING VARIABLES FOR A TITLE AND AUTHOR]

    public Book() {

    }

    public Book(Long id, String title, String author) {

        [INITIALIZE ID, TITLE, AND AUTHOR FOR A MEMBER OF THE BOOK CLASS]
    }

    [CREATE GET AND SET OPERATORS FOR THE ID, TITLE, AND AUTHOR VARIABLES (getId has already been provided)]
    public Long getId() {
        return id;
    }
}