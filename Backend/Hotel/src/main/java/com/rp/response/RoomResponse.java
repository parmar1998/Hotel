package com.rp.response;

import java.math.BigDecimal;
import java.util.List;

import org.apache.tomcat.util.codec.binary.Base64;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class RoomResponse {

	private Long id;
	private String roomType;
	private BigDecimal roomPrice;
	private Boolean isBooked;
	private String photo;
	private List<BookingRoomResponse> bookings;

	public RoomResponse(Long id, String roomType, BigDecimal roomPrice) {
		super();
		this.id = id;
		this.roomType = roomType;
		this.roomPrice = roomPrice;
	}

	public RoomResponse(Long id, String roomType, BigDecimal roomPrice, Boolean isBooked, byte[] photoBytes,
			List<BookingRoomResponse> bookings) {
		super();
		this.id = id;
		this.roomType = roomType;
		this.roomPrice = roomPrice;
		this.isBooked = isBooked;
		this.photo = photoBytes != null ? Base64.encodeBase64String(photoBytes) : null;
		this.bookings = bookings;
	}
}
