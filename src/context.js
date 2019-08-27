import React from "react";
import data from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            console.log("data", data);

            // let rooms = this.formatData(data);
            // let featuredRooms = rooms.filter(room => room.featured === true);

            // let maxPrice = Math.max(...rooms.map(item => item.price));
            // let maxSize = Math.max(...rooms.map(item => item.size));
            // this.setState({
            //     rooms,
            //     featuredRooms,
            //     sortedRooms: rooms,
            //     loading: false,
            //     price: maxPrice,
            //     maxPrice,
            //     maxSize
            // });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return <RoomContext.Provider value={{ ...this.state }}>{this.props.children}</RoomContext.Provider>;
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };
