package com.rp.response;

import java.time.LocalDate;
import com.rp.model.Room;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BookingRoomResponse {
	private Long bookingId;
	private LocalDate checkInDate;
	private LocalDate checkoutDate;
	private String guestFullName;
	private String guestEmail;
	private int numofAdults;
	private int numofChildrens;
	private int totalNoof_Guests;
	private String bookingconfirmationCode;
	private Room room;
	
	public BookingRoomResponse(Long bookingId, LocalDate checkInDate, LocalDate checkoutDate,
			String bookingconfirmationCode) {
		super();
		this.bookingId = bookingId;
		this.checkInDate = checkInDate;
		this.checkoutDate = checkoutDate;
		this.bookingconfirmationCode = bookingconfirmationCode;
	}

	
}
