const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    createHTML() {
        return `<section class="person-card">
        <div class="card-header"><h3>${this.name}</h3>
          <i class="fas fa-coffee fa-sm"></i> <h4>${this.role}</h4>
        </div>
        <div class="card-body">
          <table class="person-table">
            <tr class="border_bottom"><td class="table-row"><h5>ID: ${this.id}</h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Email: <a href=mailto:"${this.email}">${this.email}</a></h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Office Number: ${this.officeNumber}</h5></td></tr>
          </table>
        </div>
      </section>\n`

    }
}

module.exports = Manager;