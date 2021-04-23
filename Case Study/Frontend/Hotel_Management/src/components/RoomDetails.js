import React from 'react';
import axios from 'axios';
class RoomDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            room:[],
            roomNum:0,
            roomType:'',
            roomFeatures:'',
            roomPrice:'',
            roomStatus:'',
            roomCapacity:''
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8081/roomapi/findAllRooms")
        .then((res)=>{
            this.setState({
            room:res.data,
            roomNum:0,
            roomType:'',
            roomFeatures:'',
            roomPrice:'',
            roomStatus:'',
            roomCapacity:''
            })
        })
    }
    submit(evenet,roomNum){
            evenet.preventDefault();
            if(roomNum===0){
            axios.post("http://localhost:8081/roomapi/newRoom",{  
            roomType:this.state.roomType,
            roomFeatures:this.state.roomFeatures,
            roomPrice:this.state.roomPrice,
            roomStatus:this.state.roomStatus,
            roomCapacity:this.state.roomCapacity
                }).then(()=>{
                    this.componentDidMount();
                })
            }else{
            axios.put("http://localhost:8081/roomapi/updateRoom/"+roomNum,{  
            roomNum:roomNum, 
            roomType:this.state.roomType,
            roomFeatures:this.state.roomFeatures,
            roomPrice:this.state.roomPrice,
            roomStatus:this.state.roomStatus,
            roomCapacity:this.state.roomCapacity
                }).then(()=>{
                    this.componentDidMount();
                })
            }
    }
    delete(roomNum)
    {
        axios.delete("http://localhost:8081/roomapi/deleteRoom/"+roomNum)
        .then(()=>{
            this.componentDidMount();
        })
    }
    edit(roomNum){
        axios.get("http://localhost:8081/roomapi/findRoom/"+roomNum)
        .then((res)=>{
            this.setState({
            roomNum:res.data.roomNum,
            roomType:res.data.roomType,
            roomFeatures:res.data.roomFeatures,
            roomPrice:res.data.roomPrice,
            roomStatus:res.data.roomStatus,
            roomCapacity:res.data.roomCapacity
            });
        })
    }
    render()
    {
return (
 <>
    <div className="manager_container">
    <div className="manager_room_row">
      
        <form onSubmit={(e)=>this.submit(e,this.state.roomNum)}>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">code</i>
          <input value={this.state.roomNum} onChange={(e)=>this.setState({roomNum:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Room Number"/>
        </div>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">hotel</i>
          <input value={this.state.roomType} onChange={(e)=>this.setState({roomType:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter Room Type"/>
        </div>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">list</i>
          <input value={this.state.roomFeatures} onChange={(e)=>this.setState({roomFeatures:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter Room Features"/>
        </div>
          <div class="manager_input_field col s12">
          <i class="material-icons prefix">attach_money</i>
          <input value={this.state.roomPrice} onChange={(e)=>this.setState({roomPrice:e.target.value})} type="int" id="autocomplete-input" class="autocomplete" placeholder="Enter Room Price"/>
        </div>
          <div class="manager_input_field col s12">
          <i class="material-icons prefix">event_available</i>
          <input value={this.state.roomStatus} onChange={(e)=>this.setState({roomStatus:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="enter Room Status"/>
        </div>
          <div class="manager_input_field col s12">
          <i class="material-icons prefix">people</i>
          <input value={this.state.roomCapacity} onChange={(e)=>this.setState({roomCapacity:e.target.value})} type="int" id="autocomplete-input" class="autocomplete" placeholder="Enter Room Capacity"/>
        </div>
          <button class="manager_submit" type="submit" name="action">Submit</button>

          </form>
        <div className="manager_container_backend">
<div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Features</th>
              <th>Price</th>
              <th>Status</th>
              <th>Capacity</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.room.map(room=>
            <tr key={room.roomNum}>
            <td>{room.roomNum}</td>
            <td>{room.roomType}</td>
            <td>{room.roomFeatures}</td>
            <td>{room.roomPrice}</td>
            <td>{room.roomStatus}</td>
            <td>{room.roomCapacity}</td>
            <td>
            <button onClick={(e)=>this.edit(room.roomNum)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">edit</i>
            </button>
            </td>
            <td>
            <button  onClick={(e)=>this.delete(room.roomNum)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">delete</i>
            </button>
            </td>

          </tr>
            )
        }

        </tbody>
      </table>
        </div>
   
</div> 
    </div>
        </div>
        
    </>
    )
    }  
}

export default RoomDetails;
