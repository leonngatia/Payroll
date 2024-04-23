let form = document.getElementById("fom")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    // gross
    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)
    let gross_salary = gross(basic_salary, benefits)
    console.log("Gross", gross_salary)
    document.getElementById("gross").innerHTML = gross_salary

    //nhif
    let nhif = calc_nhif(gross_salary)
    console.log("NHIF", nhif)
    document.getElementById("nhif").innerHTML = nhif
    let NSSF = calc_nssf(gross_salary)
    console.log("NSSF", NSSF)
    document.getElementById("nssf").innerHTML = NSSF
    // NHDF
    let NHDF = calc_nhdf(gross_salary)
    console.log("NHDF", NHDF)
    document.getElementById("nhdf").innerHTML = NHDF


    let taxable_income = calc_taxable_income(gross_salary, NSSF, NHDF)
    console.log("Taxable_income", taxable_income)

    // PAYE
    let PAYEE = calc_payee(taxable_income)
    console.log("payee", PAYEE)
    document.getElementById("paye").innerHTML = PAYEE
    // netpay
    let Net_pay = calc_netsalary(gross_salary,nhif, NSSF, NHDF, PAYEE)

    console.log("Net pay", Net_pay)
    document.getElementById("netpay").innerHTML = Net_pay

}
)

function gross(a, b) {
    let gross_salary = a + b
    return gross_salary


}
function calc_nhdf(gross, rate = 0.015) {
    let nhdf_contribution = gross * rate
    return nhdf_contribution
}




function calc_nhif(gross_salary) {
    let nhif = ""
    if (gross_salary < 5999) {
        nhif = 150
    }
    else if (gross_salary <= 7999 && gross_salary >= 6000) {
        nhif = 300
    }
    else if (gross_salary <= 11999 && gross_salary >= 8000) {
        nhif = 400
    }
    else if (gross_salary <= 14999 && gross_salary >= 12000) {
        nhif = 500
    }
    else if (gross_salary <= 19999 && gross_salary >= 15000) {
        nhif = 600
    }
    else if (gross_salary <= 24999 && gross_salary >= 20000) {
        nhif = 750
    }
    else if (gross_salary <= 29999 && gross_salary >= 25000) {
        nhif = 850
    }
    else if (gross_salary <= 34999 && gross_salary >= 30000) {
        nhif = 900
    }
    else if (gross_salary <= 39000 && gross_salary >= 35000) {
        nhif = 950
    }
    else if (gross_salary <= 44999 && gross_salary >= 40000) {
        nhif = 1000
    }
    else if (gross_salary <= 49000 && gross_salary >= 45000) {
        nhif = 1200
    }
    else if (gross_salary <= 59999 && gross_salary >= 50000) {
        nhif = 1100
    }
    else if (gross_salary <= 69999 && gross_salary >= 60000) {
        nhif = 1300
    }
    else if (gross_salary <= 79999 && gross_salary >= 70000) {
        nhif = 1400
    }
    else if (gross_salary <= 89999 && gross_salary >= 80000) {
        nhif = 1500
    }
    else if (gross_salary <= 99999 && gross_salary >= 90000) {
        nhif = 1600
    }
    else {
        nhif = 1700
    }
    return nhif

}
function calc_nssf(x, rate = 0.06) {
    let nssf_contribution = 0
    //check the gross
    if (x > 0 && x <= 18000) {
        nssf_contribution = x * rate
    } else {
        nssf_contribution = 18000 * rate
    }
    return nssf_contribution
}
function calc_taxable_income(a, b, c) {
    let taxable_income = a - (b + c)
    return taxable_income
}


function calc_payee(tax) {
    let payee = 0
    let relief = 2400
    if (tax >= 0 && tax <= 24000) {
        payee = 0
    }
    else if (tax > 24000 && tax <= 32333) {
        payee = (24000 * 0.01) + ((tax - 24000) * 0.25) - relief
    }
    else if (tax > 32333 && tax <= 500000) {
        payee = (24000 * 0.01) + (8333 * 0.25) + ((tax - 32333) * 0.3) - relief
    }
    else if (tax > 500000 && tax <= 800000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((tax - 500000) * 0.325) - relief
    } else {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((tax - 800000) * 0.35) - relief
    }
    return payee
}

function calc_netsalary(a, b, c, d, e) {
    let net_salary = a - (b + c + d + e)
    return net_salary
}
function calc_netsalary(a, b, c, d, e) {
    let net_salary = a - (b + c + d + e)
    return net_salary
}
