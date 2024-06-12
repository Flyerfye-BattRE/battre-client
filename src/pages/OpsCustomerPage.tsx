import { useState, useEffect } from "react";
import OpsSubNavigation from "../components/layout/opsPage/OpsSubNavigation";
import CustomerList from "../components/layout/opsPage/CustomerList";

interface CustomerInfo {
  id: string;
  customerId: number;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  address: string;
  loyaltyId: string;
}

export default function OpsCustomerPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [customerList, setCustomerList] = useState<CustomerInfo[]>([]);

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/ops/getCustomerList", {
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
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <OpsSubNavigation />
      <h1>Ops Customer Page</h1>
      <CustomerList customerList={customerList} />
    </section>
  );
}
