const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('bookBtn');

let ticketPrice = +movieSelect.value;

// Update count and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedCount = selectedSeats.length;
  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Movie change event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Booking event
bookBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat!');
    return;
  }
  alert(`🎟️ Booked ${selectedSeats.length} seat(s) for ₹${selectedSeats.length * ticketPrice}. Enjoy the movie!`);
});
