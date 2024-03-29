package com.example.homepage.Repository;

import com.example.homepage.VO.ReservationEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
@Transactional
public class ReservationRepository {
    @PersistenceContext
    EntityManager entityManager;

    public void saveReservation(ReservationEntity reservationEntity) {
        entityManager.persist(reservationEntity );
        System.out.println("예약 저장");
    }

    public List<ReservationEntity> getAllReservationList() {
        //get all reservation list
        return entityManager.createQuery("SELECT r FROM ReservationEntity r", ReservationEntity.class).getResultList();
        }

    public List<String> getReservationListByDate(String resDate) {
        //get reservation list by date
        return entityManager.createQuery("SELECT r.resTime FROM ReservationEntity r WHERE r.resDate = :resDate", String.class)
                .setParameter("resDate", resDate)
                .getResultList();
    }
}
