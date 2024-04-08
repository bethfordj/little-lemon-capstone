import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
  fireEvent
} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import BookingPage from './Pages/BookingPage';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));


/* START Tests */

test('Renders page heading for the booking page', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book a Reservation");
    expect(headingElement).toBeInTheDocument();
})


test('Date values are filled and can be selected', async () => {
  const user = userEvent.setup()
  render(<BookingPage />);
  const dates = screen.getByTestId("dateSelect").querySelectorAll("option");
  dates[0].selected = false;
  dates[1].selected = true;

  expect(screen.getByText("Sun Apr 07 2024").selected).toBeTruthy();
})


// Can't get onBlur to trigger here, but it's working on the front end
test('initializeTimes provides expected default times', async () => {
  const user = userEvent.setup()
  render(<BookingPage />);
  const dates = screen.getByTestId("dateSelect").querySelectorAll("option");
  dates[0].selected = false;
  dates[1].selected = true;
  await dates[1].blur();
  await screen.getByTestId("dateSelect").blur();
  await screen.getByTestId("timeSelect").focus();
  fireEvent.blur(screen.getByTestId("dateSelect"))

  const times = screen.getByTestId("timeSelect").querySelectorAll("option");

  expect(screen.getByText("Sun Apr 07 2024").selected).toBeTruthy();
  expect(times.length > 2).toBeTruthy();

})