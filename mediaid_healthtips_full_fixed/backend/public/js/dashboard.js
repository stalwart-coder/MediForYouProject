// Activity Chart
const ctx = document.getElementById('activityChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Activity %',
            data: [38, 18, 72, 15, 25, 65, 42],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1000
        }
    }
});

// Health Ring (using Doughnut)
const ctx2 = document.getElementById('healthChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['General Health', 'Remaining'],
        datasets: [{
            data: [48, 52],
            backgroundColor: ['#0077ff', '#eee']
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: { display: true }
        }
    }
});
