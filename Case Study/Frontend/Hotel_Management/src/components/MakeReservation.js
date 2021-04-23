import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
class MakeReservation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            reservation:[],
            code:0,
            numberOfChildren:'',
            numberOfAdults:'',
            checkIn:'',
            checkOut:'',
            status:'',
            numberOfNights:''
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8085/reservationapi/findAllReservations")
        .then((res)=>{
            this.setState({
            reservation:res.data,
            code:0,
            numberOfChildren:'',
            numberOfAdults:'',
            checkIn:'',
            checkOut:'',
            status:'',
            numberOfNights:''

            })
        })
    }
    submit(evenet,code){
            evenet.preventDefault();
            if(code===0){
            axios.post("http://localhost:8085/reservationapi/newReservation",{  
            numberOfChildren:this.state.numberOfChildren,
            numberOfAdults:this.state.numberOfAdults,
            checkIn:this.state.checkIn,
            checkOut:this.state.checkOut,
            status:this.state.status,
            numberOfNights:this.state.numberOfNights
                 })
                 .then(()=>{
                    this.componentDidMount();
                })
             }
            else{
            axios.put("http://localhost:8085/reservationapi/updateReservation/"+code,{  
            code:code, 
            numberOfChildren:this.state.numberOfChildren,
            numberOfAdults:this.state.numberOfAdults,
            checkIn:this.state.checkIn,
            checkOut:this.state.checkOut,
            status:this.state.status,
            numberOfNights:this.state.numberOfNights
                }).then(()=>{
                    this.componentDidMount();
                })
            }
    }
    delete(code)
    {
        axios.delete("http://localhost:8085/reservationapi/deleteReservation/"+code)
        .then(()=>{
            this.componentDidMount();
        })
    }
    edit(code){
        axios.get("http://localhost:8085/reservationapi/findReservation/"+code)
        .then((res)=>{
            this.setState({
            code:res.data.code,
            numberOfChildren:res.data.numberOfChildren,
            numberOfAdults:res.data.numberOfAdults,
            checkIn:res.data.checkIn,
            checkOut:res.data.checkOut,
            status:res.data.status,
            numberOfNights:res.data.numberOfNights
            });
        })
    }
    render()
    {
return (
 <>
    <div className="reservation_container">
    <div className="reservation_row">
      
        <form onSubmit={(e)=>this.submit(e,this.state.code)}>
            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">code</i>
          <input value={this.state.code} onChange={(e)=>this.setState({code:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter code"/>
        </div>
            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">person_outline</i>
          <input value={this.state.numberOfChildren} onChange={(e)=>this.setState({numberOfChildren:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Number Of Children"/>
        </div>
            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">person_outline</i>
          <input value={this.state.numberOfAdults} onChange={(e)=>this.setState({numberOfAdults:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Number Of Adults"/>
        </div>
          <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">date_range</i>
          <input value={this.state.checkIn} onChange={(e)=>this.setState({checkIn:e.target.value})} type="date" id="autocomplete-input" class="autocomplete" placeholder="CheckIn Date"/>
        </div>
          <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">date_range</i>
          <input value={this.state.checkOut} onChange={(e)=>this.setState({checkOut:e.target.value})} type="date" id="autocomplete-input" class="autocomplete" placeholder="CheckOut Date"/>
        </div>
                  <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">view_day</i>
          <input value={this.state.numberOfNights} onChange={(e)=>this.setState({numberOfNights:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Number of Nights"/>
        </div>
        <button class="reservation_submit" type="submit" name="action">Proceed to Fill Guest Details</button>

          </form>
        <div className="reservation_backend">
        <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Code</th>
              <th>Number Of Children</th>
              <th>Number Of Adults</th>
              <th>CheckIn Date</th>
              <th>CheckOut Date</th>
              <th>Number Of Nights</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.reservation.map(reservation=>
            <tr key={reservation.code}>
            <td>{reservation.code}</td>
            <td>{reservation.numberOfChildren}</td>
            <td>{reservation.numberOfAdults}</td>
            <td>{reservation.checkIn}</td>
            <td>{reservation.checkOut}</td>
            <td>{reservation.numberOfNights}</td>
            <td>
            <button onClick={(e)=>this.edit(reservation.code)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">edit</i>
            </button>
            </td>
            <td>
            <button  onClick={(e)=>this.delete(reservation.code)} class="btn waves-effect waves-light" type="submit" name="action">
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

export default MakeReservation;
