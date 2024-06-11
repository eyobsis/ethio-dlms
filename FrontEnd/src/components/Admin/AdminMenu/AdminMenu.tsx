import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function AdminMenu() {
  return (
    <div className="p-4">
      <div className="admin-menu mb-6">
        <h2 className="text-2xl font-bold">Admin Menu</h2>
      </div>
      <div className="list-group space-y-4">
        <Link to="/admin">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Dashboard
          </Button>
        </Link>
        <Link to="/admin/orders">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Orders
          </Button>
        </Link>
        <Link to="/admin/order">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            New Order
          </Button>
        </Link>
        <Link to="/admin/AddProduct">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Add Products
          </Button>
        </Link>
        <Link to="/admin/users">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Users
          </Button>
        </Link>
        <Link to="/admin/products">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            All Products
          </Button>
        </Link>
        <Link to="/admin/revenue">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Total Revenue
          </Button>
        </Link>
        <Link to="/admin/stats">
          <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 mb-4">
            Stats
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
