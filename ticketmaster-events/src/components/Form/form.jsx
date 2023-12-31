//FORMULARIO CLASICO
// import { useState } from "react";

// const Form = () => {

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zipcode, setZipcode] = useState("");

//   const handleClearClick = () => {
//     setName("");
//     setAge("");
//     setAddress("");
//     setPhone("");
//     setZipcode("");
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log("sub", {
//       name,
//       age,
//       address,
//       zipcode,
//       phone,
//     });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Name
//         <input
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           required
//         ></input>
//       </label>
//       <br></br>
//       <label>
//         Age
//         <input
//           value={age}
//           onChange={(event) => setAge(event.target.value)}
//           required
//         ></input>
//       </label>
//       <br></br>

//       <label>
//         Address
//         <input
//           value={address}
//           onChange={(event) => setAddress(event.target.value)}
//           required
//         ></input>
//       </label>
//       <br></br>

//       <label>
//         Zipcode
//         <input
//           value={zipcode}
//           onChange={(event) => setZipcode(event.target.value)}
//           required
//         ></input>
//       </label>
//       <br></br>

//       <label>
//         Phone
//         <input
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)}
//           required
//         ></input>
//       </label>

//       <div>
//         <button type="button" onClick={handleClearClick}>
//           Clear
//         </button>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Form;


//FORMULARIO CON REACT HOOK
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors}  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleFormSubmit = (data) => {
    console.log(data);
  };
 

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Name
        <input {...register("name", { required: true })} ></input>
      </label>
      <br></br>
      <label>
        Age
        <input {...register("age", { required: true })} ></input>
      </label>
      <br></br>

      <label>
        Address
        <input {...register("address", { required: true })} ></input>
      </label>
      <br></br>

      <label>
        Zipcode
        <input {...register("zipcode", { required: true })} ></input>
      </label>
      <br></br>

      <label>
        Phone
        <input {...register("phone", { required: true })} ></input>
      </label>

      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
