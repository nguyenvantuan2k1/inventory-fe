import * as React from "react";

interface ISidebarMenuProps {}

const SidebarMenu: React.FunctionComponent<ISidebarMenuProps> = (props) => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <a href="index.html">
                  <img src="/src/assets/img/icons/dashboard.svg" alt="img" />
                  <span>Dashboard</span>{" "}
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <img src="/src/assets/img/icons/product.svg" alt="img" />
                  <span>Product</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="productlist.html">Product List</a>
                  </li>
                  <li>
                    <a href="addproduct.html">Add Product</a>
                  </li>
                  <li>
                    <a href="categorylist.html">Category List</a>
                  </li>
                  <li>
                    <a href="addcategory.html">Add Category</a>
                  </li>
                  <li>
                    <a href="subcategorylist.html">Sub Category List</a>
                  </li>
                  <li>
                    <a href="subaddcategory.html">Add Sub Category</a>
                  </li>
                  <li>
                    <a href="brandlist.html">Brand List</a>
                  </li>
                  <li>
                    <a href="addbrand.html">Add Brand</a>
                  </li>
                  <li>
                    <a href="importproduct.html">Import Products</a>
                  </li>
                  <li>
                    <a href="barcode.html">Print Barcode</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <img src="/src/assets/img/icons/users1.svg" alt="img" />
                  <span>People</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="customerlist.html">Customer List</a>
                  </li>
                  <li>
                    <a href="addcustomer.html">Add Customer </a>
                  </li>
                  <li>
                    <a href="supplierlist.html">Supplier List</a>
                  </li>
                  <li>
                    <a href="addsupplier.html">Add Supplier </a>
                  </li>
                  <li>
                    <a href="userlist.html">User List</a>
                  </li>
                  <li>
                    <a href="adduser.html">Add User</a>
                  </li>
                  <li>
                    <a href="storelist.html">Store List</a>
                  </li>
                  <li>
                    <a href="addstore.html">Add Store</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <img src="/src/assets/img/icons/users1.svg" alt="img" />
                  <span>Users</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="newuser.html">New User </a>
                  </li>
                  <li>
                    <a href="userlists.html">Users List</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <img src="/src/assets/img/icons/settings.svg" alt="img" />
                  <span>Settings</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="generalsettings.html">General Settings</a>
                  </li>
                  <li>
                    <a href="emailsettings.html">Email Settings</a>
                  </li>
                  <li>
                    <a href="paymentsettings.html">Payment Settings</a>
                  </li>
                  <li>
                    <a href="currencysettings.html">Currency Settings</a>
                  </li>
                  <li>
                    <a href="grouppermissions.html">Group Permissions</a>
                  </li>
                  <li>
                    <a href="taxrates.html">Tax Rates</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
