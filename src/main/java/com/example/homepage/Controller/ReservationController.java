package com.example.homepage.Controller;

import com.example.homepage.Service.ReservationService;
import com.example.homepage.VO.ReservationEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.time.LocalDateTime;


@RestController
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping("/reservation/apply")
    public Map<String, Object> reservationApply(ReservationEntity reservationEntity, Model model) {
        System.out.println("예약 신청");
        System.err.println(reservationEntity.toString());
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("SUCCESS" , true);

        return resultMap;
    }

    @PostMapping("/reservation/apply")
    public Map<String, Object> reservationApplyAction(ReservationEntity reservationEntity, Model model) {
        System.out.println("예약 신청");
        System.err.println(reservationEntity.toString());
        Map<String,Object> resultMap = new HashMap<>();
        try {
            reservationService.saveReservation(reservationEntity);
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("SUCCESS" , false);
            return resultMap;
        }


        resultMap.put("SUCCESS" , true);

        return resultMap;
    }


    @PostMapping("/api/getReservationInfo")
    public Map<String, Object> getReservationInfo(@RequestBody ReservationEntity res) {

        System.err.println(res.getResDate());
        //여기에 서버&클라이언트간 시차 계산해서 보여주기
        //서버 시간은 CET로 통일
        //클라이언트 시간은 사용자의 로컬 시간으로 통일



        //CET time generate
        LocalDateTime dateTime_CET = LocalDateTime.now(ZoneId.of("CET"));

        //get Day of the today in German
        String dayInGerman = dateTime_CET.format(DateTimeFormatter.ofPattern("EEEE", Locale.GERMAN));

        //change date format to dd-MM-yyyy HH:mm:ss
        String srvDateTime = dateTime_CET.format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));

        //change date format to dd-MM-yyyy
        String srvDate = dateTime_CET.format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));


        //make a time slot list for reservation List<String> format
        List<String> timeSlotList = new ArrayList<>(Arrays.asList("9:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"));

        //if resDate is null, set resDate as current date


        SimpleDateFormat isoFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSX");
        isoFormat.setTimeZone(TimeZone.getTimeZone("CET"));
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        String usrDateTime = null;
        String  usrDate = null;

        if(res.getResDate() == null) {
            usrDate = srvDate;
        }
        else{
            try {


                Date usrResDate = isoFormat.parse(res.getResDate());

                System.err.println("usrResDate: " + usrResDate);
                String formattedUsrResDate = dateFormat.format(usrResDate);
                System.err.println("formattedUsrResDate: "+ formattedUsrResDate);
           /*  usrDate = LocalDateTime.parse(formattedUsrResDate, DateTimeFormatter.ofPattern("dd-MM-yyyy"));
             usrDateTime = LocalDateTime.parse(formattedUsrResDate, DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));*/

            } catch (ParseException e) {
                e.printStackTrace();
            }
        }




        //remove the time slot that is already reserved
        List<String> timeSlotListResultList = reservationService.getReservationListByDate(usrDate);
        System.err.println("timeSlotListResultList: " + timeSlotListResultList);
        timeSlotList.removeAll(timeSlotListResultList);

        System.err.println("usrResDate: " + res.getResDate());
        System.err.println(res.getResDate());

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("srvDateTime", srvDateTime);
        resultMap.put("srvDate", srvDate);
        resultMap.put("srvDayInGerman", dayInGerman);
        resultMap.put("usrDateTime", usrDateTime);
        resultMap.put("usrDate", usrDate);
        resultMap.put("timeSlotList", timeSlotList);

        return resultMap;
    }
}

