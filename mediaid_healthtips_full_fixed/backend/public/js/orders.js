
document.getElementById('paymentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    medicineName: form.medicineName.value,
    quantity: form.quantity.value,
    address: form.address.value,
    paymentMethod: form.paymentMethod.value
  };

  const res = await fetch('http://localhost:5000/api/orders/place', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message || 'Error occurred');
});
