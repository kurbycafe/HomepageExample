package com.example.homepage.VO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Objects;

@Setter
@Getter
@Entity
@ToString
@Table(name = "RESERVATION", schema = "Franzoimaler")
public class ReservationEntity {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "RES_IDX")
    private int resIdx;
    
    @Column(name = "RES_VOR_NAME")
    private String resVorName;
    
    @Column(name = "RES_NACH_NAME")
    private String resNachName;
    
    @Column(name = "RES_EMAIL")
    private String resEmail;
    
    @Column(name = "RES_PHONE")
    private String resPhone;
    
    @Column(name = "RES_DATE")
    private String resDate;

    
    @Column(name = "RES_TIME")
    private String resTime;
    
    @Column(name = "RES_ADDR")
    private String resAddr;
    
    @Column(name = "RES_CONT")
    private String resCont;
    
    @Column(name = "REG_DATE")
    private Date regDate;

    @PrePersist
    protected void onCreate() {
        regDate = new Date();
    }


}
