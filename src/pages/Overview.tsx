import ActionButton from "../components/ui/ActionButton";

export default function OverviewPage() {
  const RECV_ORDER_BUTTON = "receive-order";

  const recvOrderFn = (
  ) => {
    console.log('Receiving battery order')
    fetch(
      'http://localhost:8080/triage',
      {
        method: 'GET',
        // body: JSON.stringify("Here's the body"),
        headers: {
          // 'Content-Type': 'application/json'
        }
      }
    )
    
    console.log('Finished receiving battery order')
  };

  return (
    <div>
      <h1>Overview</h1>
      {/* Total # Orders [Triage Button]
      Most recent order:
      <Recent Order Info> */}
      <h3>Receive new order: <ActionButton
        buttonId={RECV_ORDER_BUTTON}
        text="Submit"
        actionFn={recvOrderFn}
      /></h3>
      <h2>[Ops]</h2>
      {/* > Avail Batts, Batts on Hold, Batts completed */}
      <h2>[Lab]</h2>
      {/* > # Current Lab Batts / Total Lab Batts */}
      <h2>[Storage]</h2>
      {/* > Total Usage / Total Capacity */}
      <h2>[Spec]</h2>
      {/* > Total # Specs */}
    </div>
  );  
}
