import { fetchCardData } from "../lib/data";
import { Card } from "../ui/dashboard/cards";

export default async function CardWraper() {
  const {
    totalPaidInvoices,
    numberOfInvoices,
    numberOfCustomers,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
