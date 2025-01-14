package com.rp.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import javax.sql.rowset.serial.SerialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.rp.model.Room;
import com.rp.response.RoomResponse;
import com.rp.service.IRoomService;

@RestController
@RequestMapping("/rooms")
public class RoomController {

	@Autowired
	IRoomService iRoomService;

	@PostMapping("/add/new-room")
	public ResponseEntity<RoomResponse> addNewRoom(
			@RequestParam("photo") MultipartFile photo,
			@RequestParam("roomType") String roomType,
			@RequestParam("roomPrice") BigDecimal roomPrice)
			throws SerialException, IOException, SQLException
	{
		Room savedRoom = iRoomService.addNewRoom(photo, roomType, roomPrice);
		RoomResponse response = new RoomResponse(savedRoom.getId(), savedRoom.getRoomType(), savedRoom.getRoomPrice());
		return ResponseEntity.ok(response);
	}
}
