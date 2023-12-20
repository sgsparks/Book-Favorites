package com.luv2code.springbootlibrary.entity;

import lombok.Data;
import javax.persistence.*;
@Entity
@Table( name = "book")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="title")
    private String title;
    @Column(name="author")
    private String aurthur;
    @Column(name="copies")
    private int copies;
    @Column(name="copiesAvailable")
    private int copiesAvailable;
    @Column(name="img")
    private String img;

}
