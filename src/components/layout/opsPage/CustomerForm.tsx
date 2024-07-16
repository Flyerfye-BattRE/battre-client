import React, { useRef } from "react";
import classes from "./CustomerForm.module.css";
import { CustomerData } from "../../../types";

interface CustomerFormProps {
  newCustomer: boolean;
  prevData?: CustomerData;
  onSubmit: (data: CustomerData) => void;
  onCancel: () => void;
}

export default function CustomerForm(props: CustomerFormProps) {
  const lastNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const loyaltyIdRef = useRef<HTMLInputElement>(null);

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameRef.current?.value || "";
    const enteredLastName = lastNameRef.current?.value || "";
    const enteredEmail = emailRef.current?.value || "";
    const enteredPhone = phoneRef.current?.value || "";
    const enteredAddress = addressRef.current?.value || "";
    const enteredLoyaltyId = loyaltyIdRef.current?.value || "";

    const customerData = {
      lastName: enteredLastName,
      firstName: enteredFirstName,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
      loyaltyId: enteredLoyaltyId,
    };

    props.onSubmit(customerData);
  }

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div className={classes.customForm}>
      <h2>Add Customer</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* <label htmlFor="firstName">First Name</label> */}
          <input
            type="text"
            required
            id="firstName"
            ref={firstNameRef}
            defaultValue={props.prevData?.firstName}
            placeholder="First Name"
          />
        </div>
        <div className={classes.control}>
          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            type="text"
            required
            id="lastName"
            ref={lastNameRef}
            defaultValue={props.prevData?.lastName}
            placeholder="Last Name"
          />
        </div>
        <div className={classes.control}>
          {/* <label htmlFor="email">E-Mail</label> */}
          <input
            type="email"
            required
            id="email"
            ref={emailRef}
            defaultValue={props.prevData?.email}
            placeholder="E-Mail"
          />
        </div>
        <div className={classes.control}>
          {/* <label htmlFor="phone">Phone</label> */}
          <input
            type="tel"
            required
            id="phone"
            ref={phoneRef}
            defaultValue={props.prevData?.phone}
            placeholder="Phone"
          />
        </div>
        <div className={classes.control}>
          {/* <label htmlFor="address">Address</label> */}
          <input
            type="text"
            required
            id="address"
            ref={addressRef}
            defaultValue={props.prevData?.address}
            placeholder="Address"
          />
        </div>
        {!props.newCustomer && (
          <div className={classes.control}>
            {/* <label htmlFor="loyaltyId">Loyalty Id</label> */}
            <input
              type="text"
              required
              id="loyaltyId"
              ref={loyaltyIdRef}
              defaultValue={props.prevData?.loyaltyId}
              placeholder="Loyalty Id"
            />
          </div>
        )}
        <div className={classes.actions}>
          <button type="submit">Submit</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
