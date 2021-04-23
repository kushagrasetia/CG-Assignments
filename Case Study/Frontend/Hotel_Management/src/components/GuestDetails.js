import React from 'react'
import axios from 'axios';
class GuestDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            guest:[],
            memberCode:0,
            phoneNumber:'',
            company:'',
            name:'',
            email:'',
            gender:'',
            address:''
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8084/guestapi/findAllGuests")
        .then((res)=>{
            this.setState({
            guest:res.data,
            memberCode:0,
            phoneNumber:'',
            company:'',
            name:'',
            email:'',
            gender:'',
            address:''
            })
        })
    }
    submit(evenet,memberCode){
            evenet.preventDefault();
            if(memberCode===0){
            axios.post("http://localhost:8084/guestapi/newGuest",{  
            phoneNumber:this.state.phoneNumber,
            company:this.state.company,
            name:this.state.name,
            email:this.state.email,
            gender:this.state.gender,
            address:this.state.address
                }).then(()=>{
                    this.componentDidMount();
                })
            }else{
            axios.put("http://localhost:8084/guestapi/updateGuest/"+memberCode,{  
            memberCode:memberCode, 
            phoneNumber:this.state.phoneNumber,
            company:this.state.company,
            name:this.state.name,
            email:this.state.email,
            gender:this.state.gender,
            address:this.state.address
                }).then(()=>{
                    this.componentDidMount();
                })
            }
    }
    delete(memberCode)
    {
        axios.delete("http://localhost:8084/guestapi/deleteGuest/"+memberCode)
        .then(()=>{
            this.componentDidMount();
        })
    }
    edit(memberCode){
        axios.get("http://localhost:8084/guestapi/findGuest/"+memberCode)
        .then((res)=>{
            this.setState({
            memberCode:res.data.memberCode,
            phoneNumber:res.data.phoneNumber,
            company:res.data.company,
            name:res.data.name,
            email:res.data.email,
            gender:res.data.gender,
            address:res.data.address
            });
        })
    }
    render()
    {
return (
 <>
    <div className="receptionist_container">
    <div className="receptionist_guest_row">
            <form onSubmit={(e)=>this.submit(e,this.state.memberCode)}>
            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">code</i>
          <input value={this.state.memberCode} onChange={(e)=>this.setState({memberCode:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Member Code"/>
        </div>
                    <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">phone</i>
          <input value={this.state.phoneNumber} onChange={(e)=>this.setState({phoneNumber:e.target.value})} type="name" id="autocomplete-input" class="autocomplete" placeholder="Enter Phone Number"/>
        </div>
                    <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">work</i>
          <input value={this.state.company} onChange={(e)=>this.setState({company:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter company"/>
        </div>
                            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">person</i>
          <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter name"/>
        </div>
                            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">mail</i>
          <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter email"/>
        </div>
                            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">person_outline</i>
          <input value={this.state.gender} onChange={(e)=>this.setState({gender:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter gender"/>
        </div>
                            <div class="receptionist_input_field col s12">
          <i class="material-icons prefix">location_on</i>
          <input value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter address"/>
        </div>

          <button class="receptionist_submit" type="submit" name="action">Submit
  </button>

            </form>
            <div className="receptionist_backend">
 <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Member Code</th>
              <th>Phone Number</th>
              <th>Company</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.guest.map(guest=>
            <tr key={guest.memberCode}>
            <td>{guest.memberCode}</td>
            <td>{guest.phoneNumber}</td>
            <td>{guest.company}</td>
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.gender}</td>
            <td>{guest.address}</td>
            <td>
            <button onClick={(e)=>this.edit(guest.memberCode)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">edit</i>
            </button>
            </td>
            <td>
            <button  onClick={(e)=>this.delete(guest.memberCode)} class="btn waves-effect waves-light" type="submit" name="action">
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

export default GuestDetails
