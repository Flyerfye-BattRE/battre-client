import { useState, useEffect } from "react";
import CustomerList from "../components/layout/opsPage/CustomerList";
import CustomerForm from "../components/layout/opsPage/CustomerForm";
import { CustomerData } from "../types";
import Card from "../components/ui/Card";
import config from "../config/config";

export interface CustomerInfo {
  id: string;
  // customerId: number;
  customerId: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  address: string;
  loyaltyId: string;
  updateFn: () => void;
}

export default function OpsCustomerPage() {
  const [update, setUpdate] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddCustomerDialogOpen, setIsAddCustomerDialogOpen] =
    useState<boolean>(false);
  const [customerList, setCustomerList] = useState<CustomerInfo[]>([]);

  const triggerUpdate = () => {
    setUpdate(!update);
  };

  const handleNewCustomer = (customerData: CustomerData) => {
    setIsAddCustomerDialogOpen(false);
    addNewCustomerFn(customerData);
  };

  const handleCancel = () => {
    setIsAddCustomerDialogOpen(false);
    console.log("Cancelled customer add");
  };

  const addNewCustomerFn = (data: CustomerData) => {
    console.log("Adding customer " + data.firstName + " " + data.lastName);
    fetch(config.apiBaseUrl + "/ops/addCustomer", {
      method: "POST",
      headers: {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        address: data.address,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(
            "Finished adding customer " + data.firstName + " " + data.lastName
          );
          triggerUpdate();
        } else {
          console.log(
            "Failed to add customer " + data.firstName + " " + data.lastName
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error adding customer " +
            data.firstName +
            " " +
            data.lastName +
            ": ",
          error
        );
      });
  };

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch(config.apiBaseUrl + "/ops/getCustomerList", {
      method: "GET",
      headers: {
        // 'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.customerList)) {
          const customerList: CustomerInfo[] = data.customerList.map(
            (customer, index) => ({
              id: String(index),
              ...customer,
            })
          );

          setCustomerList(customerList);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsLoading(false);
        // setOpsPlans(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsLoading(false);
      });
  }, [update]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <button onClick={() => setIsAddCustomerDialogOpen(true)}>
        Add Customer
      </button>
      <Card>
        <CustomerList customerList={customerList} addCustomerFn={() => setIsAddCustomerDialogOpen(true)} updateFn={triggerUpdate} />
      </Card>
      {isAddCustomerDialogOpen && (
        <CustomerForm
          newCustomer={true}
          onSubmit={handleNewCustomer}
          onCancel={handleCancel}
        />
      )}
    </section>
  );
}
