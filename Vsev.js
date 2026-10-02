function showProfessionals() {

    // Get selected values
    let waterService = document.getElementById("waterService").value;
    let healthService = document.getElementById("HealthService").value;
    let service = document.getElementById("Services").value;
    let consultation = document.getElementById("Consultation").value;

    // Get output areas
    let waterList = document.getElementById("waterprofessionalList");
    let healthList = document.getElementById("healthprofessionalList");
    let serviceList = document.getElementById("serviceprofessionalList");
    let consultationList = document.getElementById("conprofessionalList");


    // Clear all lists
    waterList.innerHTML = "";
    healthList.innerHTML = "";
    serviceList.innerHTML = "";
    consultationList.innerHTML = "";


    // ---------------- WATER ----------------

    if (waterService === "Purified Water") {

        waterList.innerHTML = `
            <div class="professional">
                <h4>Rahul Sharma</h4>
                <p>📞 98765 43210</p>
                <p>🕘 9 AM - 1 PM</p>
            </div>

            <div class="professional">
                <h4>Amit Kumar</h4>
                <p>📞 98765 12345</p>
                <p>🕑 2 PM - 6 PM</p>
            </div>

            <div class="professional">
                <h4>Vikash Singh</h4>
                <p>📞 98765 67890</p>
                <p>🕙 10 AM - 4 PM</p>
            </div>
        `;

    } else if (waterService === "Water Recycling") {

        waterList.innerHTML = `
            <div class="professional">
                <h4>Rohan Verma</h4>
                <p>📞 98765 55555</p>
                <p>🕘 9 AM - 3 PM</p>
            </div>
        `;

    } else if (waterService === "Rainwater Harvesting") {

        waterList.innerHTML = `
            <div class="professional">
                <h4>Arjun Singh</h4>
                <p>📞 98765 77777</p>
                <p>🕙 10 AM - 5 PM</p>
            </div>
        `;
    }


    // ---------------- HEALTH ----------------

    if (healthService === "Medicine") {

        healthList.innerHTML = `
            <div class="professional">
                <h4>Dr. Anjali Mehta</h4>
                <p>📞 98765 11111</p>
                <p>🕙 10 AM - 2 PM</p>
            </div>

            <div class="professional">
                <h4>Dr. Rajesh Kumar</h4>
                <p>📞 98765 22222</p>
                <p>🕒 3 PM - 7 PM</p>
            </div>
        `;

    } else if (healthService === "Tests") {

        healthList.innerHTML = `
            <div class="professional">
                <h4>Lab Technician Priya Singh</h4>
                <p>📞 98765 33333</p>
                <p>🕘 9 AM - 1 PM</p>
            </div>

            <div class="professional">
                <h4>Lab Technician Arjun Verma</h4>
                <p>📞 98765 44444</p>
                <p>🕑 2 PM - 6 PM</p>
            </div>
        `;
    }


    // ---------------- SERVICES ----------------

    if (service === "Plumber") {

        serviceList.innerHTML = `
            <div class="professional">
                <h4>Ravi Kumar</h4>
                <p>📞 98765 55555</p>
                <p>🕘 9 AM - 5 PM</p>
            </div>
        `;

    } else if (service === "Carpenter") {

        serviceList.innerHTML = `
            <div class="professional">
                <h4>Anil Singh</h4>
                <p>📞 98765 66666</p>
                <p>🕙 10 AM - 4 PM</p>
            </div>
        `;

    } else if (service === "Electrician") {

        serviceList.innerHTML = `
            <div class="professional">
                <h4>Sunil Verma</h4>
                <p>📞 98765 77777</p>
                <p>🕚 11 AM - 7 PM</p>
            </div>
        `;
    }


    // ---------------- CONSULTATION ----------------

    if (consultation === "Medical Consultation") {

        consultationList.innerHTML = `
            <div class="professional">
                <h4>Dr. Priya Sharma</h4>
                <p>📞 98765 88888</p>
                <p>🕘 9 AM - 1 PM</p>
            </div>
        `;

    } else if (consultation === "Technical Consultation") {

        consultationList.innerHTML = `
            <div class="professional">
                <h4>Engineer Rahul Verma</h4>
                <p>📞 98765 99999</p>
                <p>🕑 2 PM - 6 PM</p>
            </div>
        `;
    }
}
function updateSubServices() {

    let service = document.getElementById("Service").value;
    let subService = document.getElementById("SubService");

    // Clear existing options
    subService.innerHTML = "";

    // Default option
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Choose the Sub-Service --";
    subService.appendChild(defaultOption);


    // WATER
    if (service === "Water") {

        let waterOptions = [
            "Purified Water",
            "Water Recycling",
            "Rainwater Harvesting"
        ];

        waterOptions.forEach(function(option) {

            let newOption = document.createElement("option");

            newOption.value = option;
            newOption.textContent = option;

            subService.appendChild(newOption);
        });
    }


    // HEALTH
    else if (service === "Health") {

        let healthOptions = [
            "Medicine",
            "Tests"
        ];

        healthOptions.forEach(function(option) {

            let newOption = document.createElement("option");

            newOption.value = option;
            newOption.textContent = option;

            subService.appendChild(newOption);
        });
    }


    // SERVICES
    else if (service === "Services") {

        let serviceOptions = [
            "Plumber",
            "Carpenter",
            "Electrician"
        ];

        serviceOptions.forEach(function(option) {

            let newOption = document.createElement("option");

            newOption.value = option;
            newOption.textContent = option;

            subService.appendChild(newOption);
        });
    }


    // CONSULTATION
    else if (service === "Consultation") {

        let consultationOptions = [
            "Medical Consultation",
            "Technical Consultation"
        ];

        consultationOptions.forEach(function(option) {

            let newOption = document.createElement("option");

            newOption.value = option;
            newOption.textContent = option;

            subService.appendChild(newOption);
        });
    }
}
document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();
        alert(" ✅Your request has been booked. Please refer to the reference number: 3454627XXXXX for further communication");
    });

