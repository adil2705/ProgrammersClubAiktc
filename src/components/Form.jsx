import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [acYr, setAcYr] = useState("");
  const [roll, setRoll] = useState("");
  const [domain, setDomain] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");

  return (
    <div className="m-6 ">
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <img src="./img/logo_pc.png" alt="Logo" class="w-30 h-20" />
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Form</h1>
    
    <form action="https://formspree.io/f/moqgaedb" method="POST">
      {/* ... (other form elements) */}
      
      <div className="mb-4">
        <label htmlFor="Name" className="block mb-2 text-sm text-gray-600">Enter your Name</label>
        <input type="text" id="Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Enter your College Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
      </div>
      

      <div className="mb-4">
      <label for="Branch" className="block mb-2 text-sm text-gray-600">Enter your Department</label>
      <input type="text" id="Branch" name="Branch"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
    </div>
    <div className="mb-4">
      <label for="ac_yr" className="block mb-2 text-sm text-gray-600">Enter your Year</label>
      <input type="ac_yr" id="ac_yr" name="ac_yr"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
    </div>
   
    <div className="mb-4">
      <label for="roll" className="block mb-2 text-sm text-gray-600">Enter your Roll Number</label>
      <input type="password" id="roll" name="roll"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
    </div>
    <div className="mb-6">
      <label for="Domain" className="block mb-2 text-sm text-gray-600">intrested Domain</label>
      <input type="password" id="domain" name="domain"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
    </div>

    <div className="mb-6">
      <label for="q1" className="block mb-2 text-sm text-gray-600">In this domain what kind of work you can do ?</label>
      <textarea type="text" id="q1" name="q1"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
    </div>

    <div className="mb-6">
      <label for="q2" className="block mb-2 text-sm text-gray-600">Why you want to join ?</label>
      <textarea type="text" id="q2" name="q2"  onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
    </div>

      
      <button type="submit" className="w-32 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-2">Submit</button>
    </form>
    </div>
    </div>
    </div>

  );
}


