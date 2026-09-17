// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// ================= CLOSE MENU =================

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});
/* =========================
   ADMISSIONS SECTION
========================= */

.admissions {
    padding: 80px 8%;
    background: #f7f9fc;
}

.section-title {
    text-align: center;
    margin-bottom: 45px;
}

.section-title h2 {
    font-size: 38px;
    margin-bottom: 10px;
}

.section-title p {
    font-size: 17px;
    color: #666;
}

.admission-content {
    display: flex;
    gap: 50px;
    align-items: stretch;
    max-width: 1100px;
    margin: auto;
}


.admission-info,
.admission-card {
    flex: 1;
    padding: 35px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
}

.admission-info h3,
.admission-card h3 {
    font-size: 27px;
    margin-bottom: 20px;
}

.admission-info p {
    line-height: 1.8;
    color: #555;
}

.admission-info ul {
    list-style: none;
    padding: 0;
    margin-top: 25px;
}

.admission-info li {
    margin: 14px 0;
    font-size: 16px;
}

.admission-card form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.admission-card input,
.admission-card select,
.admission-card textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 15px;
    box-sizing: border-box;
}

.admission-card textarea {
    height: 120px;
    resize: vertical;
}

.admission-card button {
    padding: 14px;
    border: none;
    border-radius: 8px;
    background: #f5a623;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.admission-card button:hover {
    opacity: 0.9;
}


/* =========================
   MOBILE DESIGN
========================= */

@media (max-width: 768px) {

    .admissions {
        padding: 55px 5%;
    }

    .section-title h2 {
        font-size: 30px;
    }

    .admission-content {
        flex-direction: column;
        gap: 25px;
    }

    .admission-info,
    .admission-card {
        padding: 25px;
    }

    .admission-info h3,
    .admission-card h3 {
        font-size: 23px;
    }
}
// =========================
// THE ASPIRE SCHOOL
// ADMISSION FORM
// =========================

const admissionForm = document.getElementById("admissionForm");
const formMessage = document.getElementById("formMessage");

const googleSheetURL =
"https://script.google.com/macros/s/AKfycby7mWywh5d17tUWGUxDb5oRsPV8B4EaB6Lk9FphZ2HvYyid-JNMw0echEis5PwQHuT9fA/exec";

if (admissionForm) {

    admissionForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const inputs = admissionForm.querySelectorAll("input");
        const select = admissionForm.querySelector("select");
        const textareas = admissionForm.querySelectorAll("textarea");

        const applicationData = {
            studentName: inputs[0].value,
            fatherName: inputs[1].value,
            dob: inputs[2].value,
            phone: inputs[3].value,
            email: inputs[4].value,
            className: select.value,
            previousSchool: inputs[5].value,
            address: textareas[0].value,
            message: textareas[1].value
        };

        formMessage.textContent = "⏳ Submitting application...";
        formMessage.style.color = "orange";

        fetch(googleSheetURL, {
            method: "POST",
            body: JSON.stringify(applicationData)
        })
        .then(response => response.json())
        .then(data => {

            if (data.success) {

                formMessage.textContent =
                "✅ Application submitted successfully!";

                formMessage.style.color = "green";

                admissionForm.reset();

            } else {

                formMessage.textContent =
                "❌ Something went wrong. Please try again.";

                formMessage.style.color = "red";
            }

        })
        .catch(error => {

            console.error(error);

            formMessage.textContent =
            "❌ Unable to submit application. Please try again.";

            formMessage.style.color = "red";

        });

    });

}