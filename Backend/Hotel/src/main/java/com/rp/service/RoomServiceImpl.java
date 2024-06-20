package com.rp.service;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rp.model.Room;
import com.rp.repository.RoomRepository;

@Service
public class RoomServiceImpl implements IRoomService {
	@Autowired
	private RoomRepository roomRepository;

	@Override
	public Room addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice)
			throws IOException, SerialException, SQLException {
		Room room = new Room();
		room.setRoomType(roomType);
		room.setRoomPrice(roomPrice);
		if (!photo.isEmpty()) {
			byte[] photoBytes = photo.getBytes();
			Blob photoBlob = new SerialBlob(photoBytes);
			room.setPhoto(photoBlob);
		}
		return roomRepository.save(room);
	}

}
