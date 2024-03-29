package com.example.homepage.Service;

import com.example.homepage.Repository.ReservationRepository;
import com.example.homepage.VO.ReservationEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public List<ReservationEntity> getAllReservationList() {
        return reservationRepository.getAllReservationList();
    }

    public void saveReservation(ReservationEntity reservationEntity) {
        reservationRepository.saveReservation(reservationEntity);
    }


    /**
     * getReservationListByDate
     * @param resDate
     * @return List<String>
     * */
    public List<String> getReservationListByDate(String resDate) {
        return reservationRepository.getReservationListByDate(resDate);
    }
}
