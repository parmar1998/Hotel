package com.rp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rp.model.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
