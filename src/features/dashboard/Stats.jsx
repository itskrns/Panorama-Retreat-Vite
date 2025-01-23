import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  numCabins,
}) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * numCabins);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="bookings"
        value={numBookings}
        color="blue"
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="sales"
        value={formatCurrency(sales)}
        color="green"
      />

      <Stat
        icon={<HiOutlineCalendarDays />}
        title="check-ins"
        value={checkins}
        color="indigo"
      />

      <Stat
        icon={<HiOutlineChartBar />}
        title="occupancy rate"
        value={`${Math.round(occupation * 100)}%`}
        color="yellow"
      />
    </>
  );
}
