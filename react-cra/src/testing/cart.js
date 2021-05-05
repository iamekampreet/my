import React from 'react';
import logo from './logo.png';
import chips1 from './chips1.png';

export default function fun(){
    return(
<div>
    
    <header>
		<nav className="navbar navbar-light" style={{backgroundColor:'#00a3da'}}>
		  <div className="container">
		    <a className="navbar-brand" href="#">
		      <img src={logo} alt="Logo of the company" width="70" height="70" />
		    </a>
	    	<div className="nav-item dropdown my-auto">	
	          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
	          	<div className="d-flex">
	          		<i className="material-icons me-2" style={{fontSize:'60px',color:'#ace3f5'}}>account_circle</i>
		            <p className="my-auto">Kevin</p>
		            <i className="material-icons my-auto" style={{fontSize:'30px'}}>expand_more</i>
		        </div>
	          </a>
	          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	            <li><a className="dropdown-item" href="#">Action</a></li>
	            <li><a className="dropdown-item" href="#">Another action</a></li>
	            <li><a className="dropdown-item" href="#">Something else here</a></li>
	          </ul>

		    </div>
		  </div>
		</nav>	
	</header>

	<div className="container" >
		<a href="#" className="d-flex my-3" style={{textDecoration:'none', color:'#00a3da', fontSize:'17px'}}>
			<i className="material-icons my-auto" style={{fontSize:'17px'}}>keyboard_backspace</i>
			<span className="mx-1">Back To Dashboard</span>
		</a>
	</div>

	<div className="container mb-2">
		<div className="row">
			<div className="col-lg-4 myBox myCartBox1" >
				<div className="myTopRight d-flex flex-row-reverse">
					<a href="#" className="d-flex">
						<i className="material-icons my-auto" style={{fontSize:'16px'}}>replay</i>
						<span>Change</span>
					</a>
				</div>
				<div className="d-flex">
					<i className="material-icons me-2 myLGC my-auto" style={{fontSize:'30px'}}>store</i>
					<div>
						<h6 className="mb-0">Janes Retails</h6>
						<p className="myLGC mb-0">30 Shambles Street Bansley Y017LX</p>	
					</div>
				</div>
				<hr className="myLGC mb-0" /> 
				<div className="d-flex my-4">
					<a href="#" className="d-flex mx-auto myBC">
						<i className="material-icons my-auto me-2" style={{fontSize:'25px'}}>shopping_cart</i>
						<span className="text-center">View Basket</span>
					</a>
					<hr width="1" size="30" className="my-0" />
					<a href="#" className="d-flex mx-auto myBC">
						<i className="material-icons my-auto me-2" style={{fontSize:'25px'}}>toc</i>
						<span>View Suggested</span>
					</a>
				</div>
			</div>

			<hr className="myHrBwCartBox" />

			<div className="col-lg-4 myBox myCartBox2" >
				<div className="myTopRight d-flex flex-row-reverse">
					<a href="#" className="d-flex">
						<i className="material-icons my-auto" style={{fontSize:'16px'}}>close</i>
						<span>Close</span>
					</a>
				</div>
				<p className="myLGC my-0">Select Duration</p>
				<div className="d-flex">
					<i className="material-icons me-2 myLGC my-auto" style={{fontSize:'30px'}}>date_range</i>
					<form>
					  <div className="d-flex">
					  	<input type="text" className="form-control border-0" id="dateStart" aria-describedby="startDate" defaultValue="25-Mar-2020" />
					  	<span className="myLGC my-auto">to</span>
					  	<input type="text" className="form-control border-0" id="dateEnd" aria-describedby="endDate" defaultValue="28-Mar-2020" />
					  </div>
					</form>
				</div>
				<hr className="myLGC my-0" />
				<div className="text-center ">
					<span style={{color:'green'}}>OR</span>
				</div>
				<a href="#" className="myLGC">Select Last Order<br />Select</a>
				<hr className="myLGC mt-0" />
			</div>

			<hr className="myHrBwCartBox" />

			<div className="col-lg-4 myBox d-flex myCartBox3" >
					<i className="material-icons mx-3 myLGC my-auto" style={{fontSize:'30px',color:'green'}}>emoji_objects</i>
					<div>
						<p className="myLGC my-3">The Acceptance Rate</p>
						<p className="my-1"><span>30%</span> Suggested Products</p>
						<p className="mt-1 mb-4"><span>70%</span> Added to the basket</p>	
					</div>

			</div>
		</div>
	</div>



	<div className="container myBox my-3">
		<div className="row py-3">

			<div className="col-lg-7 d-sm-flex mb-3">
				<div className="d-flex my-3 mx-auto me-1">
					<div className="d-flex mx-auto">
						<i className="material-icons myLGC my-auto" style={{fontSize:'25px'}}>search</i>
						<form> <input type="text" className="form-control mx-auto myLGC border-top-0 border-start-0 border-end-0" id="mySearch" aria-describedby="SearchBar" defaultValue="Search Products" /> </form>
					</div>
				</div>

				<div className="d-flex">
					<div className="form-floating mx-auto me-1 mb-1">
					  <select className="form-select border-top-0 border-start-0 border-end-0" style={{width:'10em', id:"Category", ariaLabel:"Floating label select example"}}>
					    <option defaultValue>Bagged Sweets</option>
					    <option defaultValue="1">One</option>
					    <option defaultValue="2">Two</option>
					    <option defaultValue="3">Three</option>
					  </select>
					  <label htmlFor="Category" className="myLGC" style={{fontSize:'1.2e'}}>Category</label>
					</div>
					
					<div className="form-floating mx-auto">
					  <select className="form-select border-top-0 border-start-0 border-end-0" style={{width:"10rem", id:"Category", 'ariaLabel':"Floating label select example"}}>
					    <option defaultValue>All Products</option>
					    <option defaultValue="1">One</option>
					    <option defaultValue="2">Two</option>
					    <option defaultValue="3">Three</option>
					  </select>
					  <label htmlFor="Category" className="myLGC" style={{fontSize:'1.2e'}}>Products</label>
					</div>
				</div>
			</div>


			<div className="col-lg-5 d-flex">
				<div className="d-flex mx-auto">
					<div className="form-check my-auto mx-2">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="topSellers" defaultChecked />
					  <label className="form-check-label" htmlFor="topSellers">
					    Top Sellers
					  </label>
					</div>
					<div className="form-check my-auto mx-2">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="selectedProducts" defaultChecked />
					  <label className="form-check-label" htmlFor="selectedProducts">
					    Selected Products
					  </label>
					</div>
				</div>

				<div className="my-auto mx-auto">
					<a href="#" className="my-auto mx-2"><i className="material-icons" style={{fontSize:'25px', color:'#00a3da'}}>grid_view</i></a>
					<a href="#" className="my-auto ms-2"><i className="material-icons myLGC" style={{fontSize:'25px'}}>view_list</i></a>
				</div>
			</div>

		</div>

		<div className="table-responsive">
		  	<table className="table table-light table-striped table-hover align-middle">
		  	 <thead>
			    <tr>
			      <th></th>
			      <th scope="col">Product Code</th>
			      <th scope="col">Unit</th>
			      <th scope="col">Description</th>
			      <th scope="col">Cost</th>
			      <th scope="col">RSP</th>
			      <th scope="col">Margin</th>
			      <th scope="col">Category</th>
			      <th scope="col">Last Order</th>
			      <th scope="col">Ordered Qty.</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td style={{width:'0', padding:'5px 0'}}><hr width='5' size='70' style={{color:'green', margin:'0'}} /></td>
			      <td>
					<div className="form-check">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
					  <label className="form-check-label" htmlFor="flexCheckChecked">
					    102
					  </label>
					</div>	
			      </td>
			      <td>
			      	<div className="d-flex">
				      	<img src={chips1} width='35' height='44' alt='chips' />
				      	<span className="my-auto">Fritolay Doritos Cool Ranch</span>
			      	</div>
			      </td>
			      <td>198gm</td>
			      <td>$14.99</td>
			      <td>$1.00</td>
			      <td>30%</td>
			      <td>Bagged Sweets</td>
			      <td>25-March-2020</td>
			      <td>9</td>
			    </tr>
			    
			    <tr>
				<td style={{width:'0', padding:'5px 0'}}><hr width='5' size='70' style={{color:'green', margin:'0'}} /></td>
			      <td>
					<div className="form-check">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
					  <label className="form-check-label" htmlFor="flexCheckChecked">
					    102
					  </label>
					</div>	
			      </td>
			      <td>
			      	<div className="d-flex">
					  <img src={chips1} width='35' height='44' alt='chips' />
				      	<span className="my-auto">Fritolay Doritos Cool Ranch</span>
			      	</div>
			      </td>
			      <td>198gm</td>
			      <td>$14.99</td>
			      <td>$1.00</td>
			      <td>30%</td>
			      <td>Bagged Sweets</td>
			      <td>25-March-2020</td>
			      <td>9</td>
			    </tr>
			    
			    <tr>
				<td style={{width:'0', padding:'5px 0'}}><hr width='5' size='70' style={{color:'green', margin:'0'}} /></td>
			      <td>
					<div className="form-check">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
					  <label className="form-check-label" htmlFor="flexCheckChecked">
					    102
					  </label>
					</div>	
			      </td>
			      <td>
			      	<div className="d-flex">
					  <img src={chips1} width='35' height='44' alt='chips' />
				      	<span className="my-auto">Fritolay Doritos Cool Ranch</span>
			      	</div>
			      </td>
			      <td>198gm</td>
			      <td>$14.99</td>
			      <td>$1.00</td>
			      <td>30%</td>
			      <td>Bagged Sweets</td>
			      <td>25-March-2020</td>
			      <td>
			      	<div className="d-flex">
				      	<span className="my-auto">9</span>	
				      	<div className="mx-4">
				      		<div className="d-flex"><i className="material-icons mx-auto" style={{color:'red'}}>delete_outline</i></div>
				      		<div>In Basket</div>
				      	</div>
				    </div>
			      </td>
			    </tr>

			    <tr>
			      <td style={{width:'0', padding:'5px 0'}}><hr width='5' size='70' style={{color:'green', margin:'0'}} /></td>
			      <td>
					<div className="form-check">
					  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
					  <label className="form-check-label" htmlFor="flexCheckChecked">
					    102
					  </label>
					</div>	
			      </td>
			      <td>
			      	<div className="d-flex">
					  <img src={chips1} width='35' height='44' alt='chips' />
				      	<span className="my-auto">Fritolay Doritos Cool Ranch</span>
			      	</div>
			      </td>
			      <td>198gm</td>
			      <td>$14.99</td>
			      <td>$1.00</td>
			      <td>30%</td>
			      <td>Bagged Sweets</td>
			      <td>25-March-2020</td>
			      <td>9</td>
			    </tr>

			  </tbody>	
			</table>	
		</div>
    </div>

</div>

)
}

