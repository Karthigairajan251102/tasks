// import React, { useState } from "react";

// export default function App() {


//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//     setSubmitted(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Password validation without regex
//     const hasUppercase = [...form.password].some(
//       (ch) => ch >= "A" && ch <= "Z"
//     );
//     const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
//     const hasSpecial = [...form.password].some((ch) =>
//       specialChars.includes(ch)
//     );

//     const newErrors = {
//       name: form.name.trim() ? "" : "Name is required",

//       email:
//         form.email.includes("@") && form.email.includes(".")
//           ? ""
//           : "Enter a valid email",

//       mobile:
//         form.mobile.length === 10 && !isNaN(form.mobile)
//           ? ""
//           : "Enter 10-digit mobile number",

//       password:
//         form.password.length < 6
//           ? "Password must be at least 6 chars"
//           : !hasUppercase
//           ? "Password must contain at least one uppercase letter"
//           : !hasSpecial
//           ? "Password must contain at least one special character"
//           : "",

//       confirmPassword:
//         form.password === form.confirmPassword
//           ? ""
//           : "Passwords do not match",
//     };  

//     // --- only one if ---
//     if (Object.values(newErrors).some(Boolean)) {
//       setErrors(newErrors);
//       setSubmitted(false);
//       return;
//     }

//     // success
//     setErrors({});
//     setSubmitted(true);
//     console.log("Form data:", form);
//   };


//   return (
//     <div style={{ maxWidth: 420, margin: "2rem auto", fontFamily: "sans-serif" }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit} noValidate>
//         <div style={{ marginBottom: 12 }}>
//           <label>Name</label><br />
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your name"
//           />
//           {errors.name && <div style={{ color: "crimson" }}>{errors.name}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>Email</label><br />
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//           />
//           {errors.email && <div style={{ color: "crimson" }}>{errors.email}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>Mobile</label><br />
//           <input
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             placeholder="10-digit number"
//           />
//           {errors.mobile && <div style={{ color: "crimson" }}>{errors.mobile}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>Password</label><br />
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Min 8 characters"
//           />
//           {errors.password && (
//             <div style={{ color: "crimson" }}>{errors.password}</div>
//           )}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>Confirm Password</label><br />
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             placeholder="Re-enter password"
//           />
//           {errors.confirmPassword && (
//             <div style={{ color: "crimson" }}>{errors.confirmPassword}</div>
//           )}
//         </div>

//         <button type="submit">Create Account</button>
//       </form>

//       {submitted && (
//         <p style={{ color: "green", marginTop: 12 }}>
//           ✅ All good! Form submitted.
//         </p>
//       )}
//     </div>
//   );
// }


import React, {useState } from 'react'

function App() {

  const[form, setForm] = useState({
    name: "",
    mail: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  })

  const[valid, setValid] = useState({})
  const[submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((f) => ({...f, [name]:value}))
    setSubmitted(false)
  }


  const handleValidate = (e) =>{
    e.preventDefault()

    const hasUppercase = [...form.password].some(
      (ch) => ch >= "A" && ch <= "Z"
    )

    const splChars = "!@#$%^&*()_+[]{}<>?"
    const hasSpecial = [...form.password] .some(
      (ch) => splChars.includes(ch)
    )

    const createError = {
      name: form.name.trim() ? "" : "Enter name",

      mail: form.mail.includes("@") && form.mail.includes(".") ? "" : "Enter valid mail",

      mobile: form.mobile.length === 10 && !isNaN(form.mobile) ? "" : "Enter valid mobile number",

      password : 
      form.password.length < 8 ? "Minimum 8 characters" :
      !hasUppercase ? "Atleast one uppercase" : 
      !hasSpecial ? "Atleast one specia characters" : "",

      confirmPassword: form.confirmPassword === form.password ? "" : "Password does not match"
    }

    if (Object.values(createError).some(Boolean)) {
      setValid(createError)
      setSubmitted(false)
      return
    }

    setValid({})
    setSubmitted(true)
    console.log("Form data" , form);
  }

  return (
    <>
    <h1>Validate</h1>
    <form onSubmit={handleValidate} noValidate>


      <div>
        <input 
        type='text'
        placeholder='name'
        name='name'
        value={form.name}
        onChange={handleChange}
        />
        {valid.name && <div style={{color:'red'}}>{valid.name}</div>}
      </div>


      <div>
        <input 
        type='email'
        placeholder='mail'
        name='mail'
        value={form.mail}
        onChange={handleChange}
        />
        {valid.mail && <div style={{color:'red'}}>{valid.mail}</div>}
      </div>


      <div>
        <input 
        type='text'
        placeholder='mobile'
        name='mobile'
        value={form.mobile}
        onChange={handleChange}
        />
        {valid.mobile && <div style={{color:'red'}}>{valid.mobile}</div>}
      </div>


      <div>
        <input 
        type='password'
        placeholder='password'
        name='password'
        value={form.password}
        onChange={handleChange}
        />
        {valid.password && ((<div style={{color:'red'}}>{valid.password}</div>))}
      </div>


      <div>
        <input 
        type='password'
        placeholder='confrim Password'
        name='confirmPassword'
        value={form.confirmPassword}
        onChange={handleChange}
        />
        {valid.confirmPassword && ((<div style={{color:'red'}}>{valid.confirmPassword}</div>))}
      </div>

      <button>Submit</button>
    </form>

    {submitted && <div style={{color:'green'}}>Submitted</div>}
    </>
  )
}

export default App