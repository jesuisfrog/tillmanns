document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "bloodPressureReadings": [
            {
                "date": "10-15-2023",
                "time": "10:11pm",
                "systolic": 128,
                "diastolic": 82,
                "pulse": 65
            },
            {
                "date": "10-14-2023",
                "time": "11:56am",
                "systolic": 133,
                "diastolic": 84,
                "pulse": 76
            },
            {
                "date": "10-13-2023",
                "time": "3:38pm",
                "systolic": 143,
                "diastolic": 89,
                "pulse": 64
            },
            {
                "date": "10-12-2023",
                "time": "9:55pm",
                "systolic": 124,
                "diastolic": 88,
                "pulse": 58
            },
            {
                "date": "10-12-2023",
                "time": "9:47am",
                "systolic": 136,
                "diastolic": 88,
                "pulse": 59
            },
            {
                "date": "10-11-2023",
                "time": "10:51am",
                "systolic": 134,
                "diastolic": 86,
                "pulse": 65
            },
            {
                "date": "10-10-2023",
                "time": "9:30am",
                "systolic": 139,
                "diastolic": 80,
                "pulse": 74
            }
        ]
    };

    const tableBody = document.getElementById("bpReadingsTableBody");

    data.bloodPressureReadings.forEach(reading => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${reading.date}</td>
            <td>${reading.time}</td>
            <td>${reading.systolic}</td>
            <td>${reading.diastolic}</td>
            <td>${reading.pulse}</td>
        `;
        tableBody.appendChild(row);
    });
});
