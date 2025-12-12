import React, { useState } from "react";
import axios from "axios";


const Form = ({ onUserCreated, children }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = async (id) => {
    const isConfirm = confirm("Do you want to delete this?");
    if (!isConfirm) return;
    
    
    await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);
    if (onUserCreated) {
    onUserCreated();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://67eca027aa794fb3222e43e2.mockapi.io/members",formData);
      setFormData({
        name: "",
        lastname: "",
        position: "",
      });
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return children ({
    formData,
    loading,
    handleChange,
    handleSubmit,
    handleDelete
  });
}
export default Form;
