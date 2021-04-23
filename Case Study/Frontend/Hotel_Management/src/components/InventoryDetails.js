import React from 'react';
import axios from 'axios';
class InventoryDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            item:[],
            itemId:0,
            itemDescription:'',
            itemStock:'',
            itemNeeded:'',
            itemPrice:''
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8083/inventoryapi/findAllItems")
        .then((res)=>{
            this.setState({
            item:res.data,
            itemId:0,
            itemDescription:'',
            itemStock:'',
            itemNeeded:'',
            itemPrice:''
            })
        })
    }
    submit(evenet,itemId){
            evenet.preventDefault();
            if(itemId===0){
            axios.post("http://localhost:8083/inventoryapi/newItem",{  
            itemDescription:this.state.itemDescription,
            itemStock:this.state.itemStock,
            itemPrice:this.state.itemPrice
                }).then(()=>{
                    this.componentDidMount();
                })
            }else{
            axios.put("http://localhost:8083/inventoryapi/updateItem/"+itemId,{  
            itemId:itemId, 
            itemDescription:this.state.itemDescription,
            itemStock:this.state.itemStock,
            itemNeeded:this.state.itemNeeded,
            itemPrice:this.state.itemPrice
                }).then(()=>{
                    this.componentDidMount();
                })
            }
    }
    delete(itemId)
    {
        axios.delete("http://localhost:8083/inventoryapi/deleteItem/"+itemId)
        .then(()=>{
            this.componentDidMount();
        })
    }
    edit(itemId){
        axios.get("http://localhost:8083/inventoryapi/findItem/"+itemId)
        .then((res)=>{
            this.setState({
            itemId:res.data.itemId,
            itemDescription:res.data.itemDescription,
            itemStock:res.data.itemStock,
            itemNeeded:res.data.itemNeeded,
            itemPrice:res.data.itemPrice
            });
        })
    }
    render()
    {
return (
 <>
    <div className="manager_container">
    <div className="manager_inventory_row">
            <form onSubmit={(e)=>this.submit(e,this.state.itemId)}>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">code</i>
          <input value={this.state.itemId} onChange={(e)=>this.setState({itemId:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Item id"/>
        </div>
                    <div class="manager_input_field col s12">
          <i class="material-icons prefix">description</i>
          <input value={this.state.itemDescription} onChange={(e)=>this.setState({itemDescription:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter Item Description"/>
        </div>
                    <div class="manager_input_field col s12">
          <i class="material-icons prefix">view_module</i>
          <input value={this.state.itemStock} onChange={(e)=>this.setState({itemStock:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Item Stock"/>
        </div>
            <div class="manager_input_field col s12">
          <i class="material-icons prefix">format_list_bulleted</i>
          <input value={this.state.itemNeeded} onChange={(e)=>this.setState({itemNeeded:e.target.value})} type="number" id="autocomplete-input" class="autocomplete" placeholder="Enter Item Needed"/>
    
        </div>
        <div class="manager_input_field col s12">
          <i class="material-icons prefix">attach_money</i>
          <input value={this.state.itemPrice} onChange={(e)=>this.setState({itemPrice:e.target.value})} type="text" id="autocomplete-input" class="autocomplete" placeholder="Enter Item Price"/>
    
        </div>
          <button class="manager_submit" type="submit" name="action">Submit</button>

            </form>

  <div className="manager_container_backend">
 <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Id</th>
              <th>Item Description</th>
              <th>Stock</th>
              <th>Item Needed</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.item.map(item=>
            <tr key={item.itemId}>
            <td>{item.itemId}</td>
            <td>{item.itemDescription}</td>
            <td>{item.itemStock}</td>
            <td>{item.itemNeeded}</td>
            <td>{item.itemPrice}</td>
            <td>
            <button onClick={(e)=>this.edit(item.itemId)} class="btn waves-effect waves-light" type="submit" name="action">
             <i class="material-icons">edit</i>
            </button>
            </td>
            <td>
            <button  onClick={(e)=>this.delete(item.itemId)} class="btn waves-effect waves-light" type="submit" name="action">
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

export default InventoryDetails;
