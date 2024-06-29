import { useState } from "react";
import CustomerForm from "./CustomerForm";
import { CustomerData } from "../../../types";
import classes from "../TableItem.module.css";
import config from "../../../config/config";

export default function CustomerItem(props) {
  const [isUpdateCustomerDialogOpen, setIsUpdateCustomerDialogOpen] =
    useState<boolean>(false);

  const handleUpdateCustomer = (customerData: CustomerData) => {
    setIsUpdateCustomerDialogOpen(false);
    updateCustomerFn(customerData);
  };

  const handleCancel = () => {
    setIsUpdateCustomerDialogOpen(false);
    console.log("Cancelled customer update");
  };

  const updateCustomerFn = (data: CustomerData) => {
    console.log("Updating customer " + data.firstName + " " + data.lastName);
    if (props.lastName != data.lastName) {
      console.log(
        "Changing lastName: " + props.lastName + " => " + data.lastName
      );
    }
    if (props.firstName != data.firstName) {
      console.log(
        "Changing firstName: " + props.firstName + " => " + data.firstName
      );
    }
    if (props.email != data.email) {
      console.log("Changing email: " + props.email + " => " + data.email);
    }
    if (props.phone != data.phone) {
      console.log("Changing phone: " + props.phone + " => " + data.phone);
    }
    if (props.address != data.address) {
      console.log("Changing address: " + props.address + " => " + data.address);
    }
    if (props.loyaltyId != data.loyaltyId) {
      console.log(
        "Changing loyaltyId: " + props.loyaltyId + " => " + data.loyaltyId
      );
    }

    fetch(config.apiBaseUrl + "/ops/updateCustomer", {
      method: "PUT",
      headers: {
        customerId: props.customerId,
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        loyaltyId: data.loyaltyId,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(
            "Finished updating customer " + data.firstName + " " + data.lastName
          );

          // Trigger a re-render
          props.updateFn();
        } else {
          console.log(
            "Failed to update customer " + data.firstName + " " + data.lastName
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error updating customer " +
            data.firstName +
            " " +
            data.lastName +
            ": ",
          error
        );
      });
  };

  const deleteCustomerFn = () => {
    console.log(
      "Deleting customer " +
        props.firstName +
        " " +
        props.lastName +
        "[" +
        props.customerId +
        "]"
    );
    fetch(config.apiBaseUrl + "/ops/removeCustomer", {
      method: "DELETE",
      headers: {
        customerId: props.customerId,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(
            "Finished deleting customer " +
              props.firstName +
              " " +
              props.lastName +
              "[" +
              props.customerId +
              "]"
          );

          // Trigger a re-render
          props.updateFn();
        } else {
          console.error("Failed to delete customer");
        }
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
  };

  return (
    <tr>
      <td className={classes.summaryColumn}>
        {props.firstName} {props.lastName}
      </td>
      <td className={classes.summaryColumn}>{props.phone}</td>
      <td className={classes.summaryColumn}>{props.email}</td>
      <td className={classes.summaryColumn}>{props.address}</td>
      <td className={classes.summaryColumn}>{props.loyaltyId.substring(0,8)}</td>
      <td className={classes.summaryColumn}>
        <button
          type="button"
          onClick={() => setIsUpdateCustomerDialogOpen(true)}
        >
          Update
        </button>{" "}
        <button type="button" onClick={deleteCustomerFn}>
          Delete
        </button>
      </td>
      {isUpdateCustomerDialogOpen && (
        <CustomerForm
          newCustomer={false}
          prevData={{
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            phone: props.phone,
            address: props.address,
            loyaltyId: props.loyaltyId,
          }}
          onSubmit={handleUpdateCustomer}
          onCancel={handleCancel}
        />
      )}
    </tr>

    // <li>
    //   <div>
    //     <h3>
    //       {props.firstName} {props.lastName}
    //     </h3>
    //     <h4>&gt;&gt; Phone: {props.phone}</h4>
    //     <h4>&gt;&gt; E-mail: {props.email}</h4>
    //     <h4>&gt;&gt; Address: {props.address}</h4>
    //     <h4>&gt;&gt; Loyalty #: {props.loyaltyId}</h4>
    //     <h3>
    //       <button
    //         type="button"
    //         onClick={() => setIsUpdateCustomerDialogOpen(true)}
    //       >
    //         Update
    //       </button>
    //       <button type="button" onClick={deleteCustomerFn}>
    //         Delete
    //       </button>
    //     </h3>
    //     {isUpdateCustomerDialogOpen && (
    //       <CustomerForm
    //         newCustomer={false}
    //         prevData={{
    //           firstName: props.firstName,
    //           lastName: props.lastName,
    //           email: props.email,
    //           phone: props.phone,
    //           address: props.address,
    //           loyaltyId: props.loyaltyId,
    //         }}
    //         onSubmit={handleUpdateCustomer}
    //         onCancel={handleCancel}
    //       />
    //     )}
    //   </div>
    // </li>
  );
}
