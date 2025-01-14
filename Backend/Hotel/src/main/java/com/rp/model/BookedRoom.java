package com.rp.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BookedRoom {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;
	@Column(name = "CHECK_IN")
	private LocalDate checkInDate;
	@Column(name = "CHECK_OUT")
	private LocalDate checkoutDate;
	@Column(name = "GUEST_FULL_NAME")
	private String guestFullName;
	@Column(name = "GUEST_EMAIL")
	private String guestEmail;
	@Column(name = "ADULTS")
	private int numofAdults;
	@Column(name = "CHILDREN")
	private int numofChildrens;
	@Column(name = "TOTAL_GUESTS")
	private int totalNoof_Guests;
	@Column(name = "CONFIRMATION_CODE")
	private String bookingconfirmationCode;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ROOM_ID")
	private Room room;

	public void setBookingconfirmationCode(String bookingconfirmationCode) {
		this.bookingconfirmationCode = bookingconfirmationCode;
	}

	public void calculateTotalNumberofGuests() {
		this.totalNoof_Guests = this.numofAdults + this.numofChildrens;
	}

	public int getNumofAdults() {
		return numofAdults;
	}

	public void setNumofAdults(int numofAdults) {
		this.numofAdults = numofAdults;
		calculateTotalNumberofGuests();
	}

	public int getNumofChildrens() {
		return numofChildrens;
	}

	public void setNumofChildrens(int numofChildrens) {
		this.numofChildrens = numofChildrens;
		calculateTotalNumberofGuests();
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}
}
