import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import { withRoomConsumer } from "../../context";
import RoomsList from "../RoomsFilter/RoomsList/RoomsList";

function Room({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(Room);
