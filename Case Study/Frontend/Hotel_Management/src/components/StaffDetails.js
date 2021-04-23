import React from 'react';
import axios from 'axios';
class StaffDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            staff:[],
            code:0,
            employeeName:'',
            employeeAddress:'',
            nic:'',
            salary:'',
            age:'',
            occupation:'',
            email:''
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8082/staffapi/findAllStaffMembers")
        .then((res)=>{
            this.setState({
            staff:res.data,
            code:0,
            employeeName:'',
            employeeAddress:'',
            nic:'',
            salary:'',
            age:'',
            occupation:'',
            email:''
            })
        })
    }
    submit(evenet,code){
            evenet.preventDefault();
            if(code===0){
            axios.post("http://localhost:8082/staffapi/newStaffMember",{  
            employeeName:this.state.employeeName,
            employeeAddress:this.state.employeeAddress,
            nic:this.state.nic,
            salary:this.state.salary,
            age:this.state.age,
            occupation:this.state.occupation,
            email:this.state.email
                }).then(()=>{
                    this.componentDidMount();
                })
            }else{
            axios.put("http://localhost:8082/staffapi/updateStaffMember/"+code,{   
            code:code,
            employeeName:this.state.employeeName,
            employeeAddress:this.state.employeeAddress,
            nic:this.state.nic,
            salary:this.state.salary,
            age:this.state.age,
            occupation:this.state.occupation,
            email:this.state.email
                }).then(()=>{
                    this.componentDidMount();
                })
            }
    }
    delete(code)
    {
        axios.delete("http://localhost:8082/staffapi/deleteStaffMember/"+code)
        .then(()=>{
            this.componentDidMount();
        })
    }
    edit(code){
        axios.get("http://localhost:8082/staffapi/findStaffMember/"+code)
        .then((res)=>{
            this.setState({
            code:res.data.code,
            employeeName:res.data.employeeName,
            employeeAddress:res.data.employeeAddress,
            nic:res.data.nic,
            salary:res.data.salary,
            age:res.data.age,
            occupation:res.data.occupation,
            email:res.data.email
            });
        })
    }
    render()
    {
return (
 <>
    <div className="manager_container">
    <div className="manager_staff_row">
            <form onSubmit={(e)=>this.submit(e,this.state.code)}>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">code</i>
          <input value={this.state.code} onChange={(e)=>this.setState({code:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Code"/>
        </div>
                    <div class="manager_input_field col s12">
          <i class="material-icons prefix">person</i>
          <input value={this.state.employeeName} onChange={(e)=>this.setState({employeeName:e.target.value})} type="name" id="autocomplete-input" class="autocomplete" placeholder="Enter Name"/>
        </div>
                    <div class="manager_input_field col s12">
          <i class="material-icons prefix">location_on</i>
          <input value={this.state.employeeAddress} onChange={(e)=>this.setState({employeeAddress:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter Address"/>
        </div>
                            <div class="manager_input_field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input value={this.state.nic} onChange={(e)=>this.setState({nic:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter nic"/>
        </div>
                            <div class="manager_input_field col s12">
          <i class="material-icons prefix">attach_money</i>
          <input value={this.state.salary} onChange={(e)=>this.setState({salary:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter salary"/>
        </div>
                            <div class="manager_input_field col s12">
          <i class="material-icons prefix">person_outline</i>
          <input value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter age"/>
        </div>
                            <div class="manager_input_field col s12">
          <i class="material-icons prefix">work</i>
          <input value={this.state.occupation} onChange={(e)=>this.setState({occupation:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter occupation"/>
        </div>
                            <div class="manager_input_field col s12">
          <i class="material-icons prefix">mail</i>
          <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type="email" id="autocomplete-input" class="autocomplete" placeholder="Enter email"/>
        </div>
          <button class="manager_submit" type="submit" name="action">Submit</button>

            </form>
  <div className="manager_container_backend">
  <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Address</th>
              <th>NIC</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.staff.map(staff=>
            <tr key={staff.code}>
            <td>{staff.code}</td>
            <td>{staff.employeeName}</td>
            <td>{staff.employeeAddress}</td>
            <td>{staff.nic}</td>
            <td>{staff.salary}</td>
            <td>{staff.age}</td>
            <td>{staff.occupation}</td>
            <td>{staff.email}</td>
            <td>
            <button onClick={(e)=>this.edit(staff.code)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">edit</i>
            </button>
            </td>
            <td>
            <button  onClick={(e)=>this.delete(staff.code)} class="btn waves-effect waves-light" type="submit" name="action">
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

export default StaffDetails
